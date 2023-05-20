import { styled } from "@mui/material";
import { ReactNode } from "react";
import { CodeBlock, SyntaxHighlightedBlock } from "./code-block";
import { InlineCode } from "./inline-code-mdx";

const StyledCodeBlock = styled(CodeBlock)({
  overflow: "auto",
  maxHeight: "600px",
});

interface Props {
  children: ReactNode;
  className?: string;
}
export function CodeBlockMdxWrapper({ children, className }: Props) {
  const language = className?.replace(/language-/, "") ?? "plain";
  const code: SyntaxHighlightedBlock = {
    language,
    components: children,
  };
  const isInline = typeof children === "string" && !children.includes("\n");
  return isInline ? <InlineCode children={children} /> : <StyledCodeBlock code={code} />;
}
