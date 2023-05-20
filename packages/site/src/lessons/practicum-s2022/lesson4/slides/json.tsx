import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const StyledCodeBlock = styled(CodeBlock)({
  fontSize: 32,
  userSelect: "text",
});

const items = [
  "JSON is a standard way to format data",
  "Similar to JavaScript object initialization format",
  "Probably the most common server messaging format these days",
  "Send a request with some JSON data and get JSON data in response",
];

const code = synJS`
{
    "name": "Ryan",
    "age": 28,
    "isProfessor": true
}
`;

export function JSONExample({ context }: Props) {
  return (
    <ContentSlide
      Title="JSON"
      context={context}
      Content={
        <>
          <InfoList items={items} />
          <StyledCodeBlock code={code} />
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
