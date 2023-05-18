import { Hidden, NoSsr } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";
import CodeEditor from "../shared/code-editor";
import { HTMLExampleOutput } from "./html-example-output";
import { JSExampleRunner } from "./js-example";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "grid",
      height: "100%",
      gridTemplateColumns: "50% 50%",
      gap: "4px",
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr",
      },
    },
    editor: {
      border: "none",
      backgroundColor: "transparent",
      height: "100%",
      width: "100%",
      outline: "none",
      fontSize: "1.25rem",
    },
    editorContainer: {
      padding: 8,
      maxWidth: "100%",
    },
    outputContainer: {
      padding: theme.spacing(),
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("lg")]: {
        minHeight: 500,
      },
    },
  })
);

interface Props {
  example: ExampleDefinition;
  highlightedCode: SyntaxHighlightedBlock;
}
export function ExamplePlayground({ example, highlightedCode }: Props) {
  const classes = useStyles();
  const [currCode, setCurrCode] = useState(example.code);

  useEffect(() => {
    setCurrCode(example.code);
  }, [example.code]);

  return (
    <div className={classes.container}>
      <div className={classes.editorContainer}>
        <Hidden lgDown>
          <CodeEditor
            language={example.language}
            initialCode={example.code}
            onCodeChanged={updated => setCurrCode(updated)}
            height="100%"
            path={example.title}
          />
        </Hidden>
        <Hidden mdUp>
          <CodeBlock code={highlightedCode} />
        </Hidden>
        <NoSsr>
          <noscript>
            <CodeBlock code={highlightedCode} />
          </noscript>
        </NoSsr>
      </div>
      <div className={classes.outputContainer}>
        {example.language === "html" ? (
          <HTMLExampleOutput code={currCode} />
        ) : (
          <JSExampleRunner code={currCode} testCases={example.testCases} />
        )}
      </div>
    </div>
  );
}
