import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synHTML, synJS } from "../../../../common/highlighting";

const StyledCodeBlock = styled(CodeBlock)({
  fontSize: 26,
  userSelect: "text",
  border: "solid #444 2px",
  marginTop: 16,
});

const slideItems = [
  <>
    The <code>element.addEventListener</code> method lets you define event listeners in JS
  </>,
  "You can use it to keep HTML clean...",
  "Or when you want to respond to an event in multiple ways",
];

const myHTML = synHTML`
<h1>My Page</h1>
<button id="my-button">Click Me</button>
`;

const code = synJS`
const myButton = document.getElementById("my-button");
myButton.addEventListener("click", handleClick);

function handleClick() {
    myButton.innerText = "Thanks"
}
`;

export function AddEventListener({ context }: Props) {
  return (
    <ContentSlide
      Title="addEventListener"
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
