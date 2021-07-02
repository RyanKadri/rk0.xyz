const prism = require("prismjs");
const loadLanguages = require('prismjs/components/');

loadLanguages([ 'jsx', "typescript", "java", "hcl", "docker", "gherkin" ]);

prism.lan
const configMap = {
  "synJS": { grammar: prism.languages.jsx, language: "jsx" },
  "synCSS": { grammar: prism.languages.css, language: "css" },
  "synHTML": { grammar: prism.languages.html, language: "html" },
  "synTS": { grammar: prism.languages.typescript, language: "typescript" },
  "synJava": { grammar: prism.languages.java, language: "java" },
  "synHCL": { grammar: prism.languages.hcl, language: "hcl" },
  "synDocker": { grammar: prism.languages.docker, language: "docker" },
  "synGherkin": { grammar: prism.languages.gherkin, language: "gherkin" }
}

const prismTags = new Set(Object.keys(configMap));

module.exports = function({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression(path) {
        const { node } = path;
        if (prismTags.has(node.tag.name) && path.scope.hasBinding(node.tag.name)) {
          const prismConfig = configMap[node.tag.name];
          const templateExpression = node.quasi;
          if(templateExpression.length > 0) {
            throw path.buildCodeFrameError("Interpolation expressions are not supported yet");
          }
          const parts = templateExpression.quasis;
          const content = parts.map(part => part.value.raw).join("").trim()
          const precomputed = prism.highlight(content, prismConfig.grammar, prismConfig.language);
          path.replaceWith(
            t.objectExpression([
              t.objectProperty(
                t.stringLiteral("html"), t.stringLiteral(precomputed)
              ),
              t.objectProperty(
                t.stringLiteral("language"), t.stringLiteral(prismConfig.language)
              ),
              t.objectProperty(
                t.stringLiteral("raw"),
                t.stringLiteral(content)
              )
            ])
          )
        }
      }
    }
  }
}