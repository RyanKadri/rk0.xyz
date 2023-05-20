import { Link, styled } from "@mui/material";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import {
  CodeBlock,
  SyntaxHighlightedBlock,
} from "../../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/themes/blank/content-slide";

const StyledLink = styled(Link)({
  textAlign: "center",
  fontSize: "1.15rem",
});

const Container = styled<any>("div", { shouldForwardProp: prop => prop !== "dense" })(({ dense }: any) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 32,
  marginTop: 64,
  marginBottom: "3rem",
  ...(dense && {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "0.65rem",
  }),
}));

interface Props {
  leftCode: SyntaxHighlightedBlock;
  rightCode: SyntaxHighlightedBlock;
  link: string;
  options?: {
    codeSize?: "small" | "medium";
  };
}
export function ComparisonSlide({ leftCode, rightCode, link, options }: Props) {
  return function ({ context }: { context: PresentationContext }) {
    const dense = options?.codeSize === "small";

    return (
      <ContentSlide
        Title="Which Runs Faster?"
        context={context}
        Content={
          <>
            <Container dense={dense}>
              <CodeBlock code={leftCode} />
              <CodeBlock code={rightCode} />
            </Container>
            <StyledLink href={link}>{link}</StyledLink>
          </>
        }
      />
    );
  };
}
