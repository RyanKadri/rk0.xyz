import { styled } from "@mui/material";
import { CodeBlock } from "../../components/code-block";
import { InfoList } from "../../components/info-list";
import { CodeSlideProps } from "../../slides";
import { ContentSlide } from "./content-slide";

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",

  "& .codeBlock": {
    overflow: "auto",
    flexShrink: 1,
    fontSize: "26px",
  },
});

export function CodeSlide({ context, Title, bullets, code, options = {}, children }: CodeSlideProps) {
  const { codeFirst = false, codeBlock: codeBlockOptions } = options;

  return (
    <ContentSlide
      Title={Title}
      context={context}
      Content={
        <ContentContainer>
          {codeFirst ? (
            <>
              <CodeBlock code={code} className={"codeBlock"} options={codeBlockOptions} />
              <InfoList items={bullets} />
              {children}
            </>
          ) : (
            <>
              <InfoList items={bullets} />
              <CodeBlock code={code} className={"codeBlock"} options={codeBlockOptions} />
              {children}
            </>
          )}
        </ContentContainer>
      }
    />
  );
}
