import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synHTML, synJS } from "../../../../common/highlighting";

const StyledCodeBlock = styled(CodeBlock)({
  code: {
    fontSize: 26,
    userSelect: "text",
    border: "solid #444 2px",
    marginTop: 16,
  },
});

const slideItems = [
  "HTML elements can reference a function",
  "onclick, onmouseover, onkeypress, etc.",
  "The function needs to be defined somewhere",
];

const code = synJS`
function detonate() {
    const paragraph = document.querySelector("#detonate-paragraph");
    paragraph.innerText = "Boom"
}
`;
const myHTML = synHTML`
<p id="detonate-paragraph">Detonate</p>
<button onclick="detonate()">Don't click me!</button>
`;

export function ReactingToInput({ context }: Props) {
  return (
    <ContentSlide
      Title="Reacting to Inputs"
      context={context}
      Content={
        <>
          <InfoList items={slideItems}></InfoList>
          <StyledCodeBlock code={myHTML} />
          <StyledCodeBlock code={code} />
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
