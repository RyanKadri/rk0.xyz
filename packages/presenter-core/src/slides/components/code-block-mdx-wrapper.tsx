import { makeStyles } from "@mui/styles";
import { ReactNode } from "react";
import { CodeBlock, SyntaxHighlightedBlock } from "./code-block";
import { InlineCode } from "./inline-code-mdx";

const useStyles = makeStyles({
  container: {
    overflow: "auto",
    maxHeight: "600px",
  },
});

interface Props {
  children: ReactNode;
  className?: string;
}
export function CodeBlockMdxWrapper({ children, className }: Props) {
  const classes = useStyles();
  const language = className?.replace(/language-/, "") ?? "plain";
  const code: SyntaxHighlightedBlock = {
    language,
    components: children,
  };
  const isInline = typeof children === "string" && !children.includes("\n");
  return isInline ? <InlineCode children={children} /> : <CodeBlock code={code} className={classes.container} />;
}
