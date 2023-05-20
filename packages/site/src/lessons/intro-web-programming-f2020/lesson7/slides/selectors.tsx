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
  "JavaScript can use CSS Selectors to reference an element on the page",
  "The object you get represents an HTML element",
  "You can access properties of the object to get information",
  "You can overwrite some properties to make changes",
  "You can call methods to get additional info",
];

const myHTML = synHTML`
<div class="my-panel">
    <header>Panel Title</header>
</div>
`;

const code = synJS`
const myPanelHeader = document.querySelector(".my-panel header");
const panelTitle = myPanelHeader.innerText;
myPanelHeader.innerText = panelTitle.toUpperCase();
myPanelHeader.parentElement.getAttribute("class");
`;

export function QuerySelector({ context }: Props) {
  return (
    <ContentSlide
      Title="document.querySelector"
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
