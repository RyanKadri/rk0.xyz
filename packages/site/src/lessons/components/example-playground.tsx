import { NoSsr, styled, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";
import CodeEditor from "../shared/code-editor";
import { HTMLExampleOutput } from "./html-example-output";
import { JSExampleRunner } from "./js-example";

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  height: "100%",
  gridTemplateColumns: "50% 50%",
  gap: "4px",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
  },
  "& .editor": {
    border: "none",
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    outline: "none",
    fontSize: "1.25rem",
  },
  "& .editorContainer": {
    padding: 8,
    maxWidth: "100%",
  },
  "& .outputContainer": {
    padding: theme.spacing(),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      minHeight: 500,
    },
  },
}));

interface Props {
  example: ExampleDefinition;
  highlightedCode: SyntaxHighlightedBlock;
}
export function ExamplePlayground({ example, highlightedCode }: Props) {
  const [currCode, setCurrCode] = useState(example.code);
  const lgUp = useMediaQuery(theme => theme.breakpoints.up("lg"));

  useEffect(() => {
    setCurrCode(example.code);
  }, [example.code]);

  return (
    <Container>
      <div className={"editorContainer"}>
        {lgUp ? (
          <CodeEditor
            language={example.language}
            initialCode={example.code}
            onCodeChanged={updated => setCurrCode(updated)}
            height="100%"
            path={example.title}
          />
        ) : (
          <CodeBlock code={highlightedCode} />
        )}
        <NoSsr>
          <noscript>
            <CodeBlock code={highlightedCode} />
          </noscript>
        </NoSsr>
      </div>
      <div className={"outputContainer"}>
        {example.language === "html" ? (
          <HTMLExampleOutput code={currCode} />
        ) : (
          <JSExampleRunner code={currCode} testCases={example.testCases} />
        )}
      </div>
    </Container>
  );
}
