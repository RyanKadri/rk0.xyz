import { SyntaxHighlightedBlock } from "../../../presenter-core/src/slide-components/code-block";

export const synJS = makeHighlighter();
export const synHTML = makeHighlighter();
export const synCSS = makeHighlighter();
export const synTS = makeHighlighter();
export const synJava = makeHighlighter();
export const synHCL = makeHighlighter();
export const synDocker = makeHighlighter();
export const synGherkin = makeHighlighter();

function makeHighlighter() {
    return function(string: TemplateStringsArray): SyntaxHighlightedBlock {
        return {
            html: "",
            language: "",
            raw: string.join("")
        }
    }
}