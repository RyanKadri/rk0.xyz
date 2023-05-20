import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeSlide } from "../../../../../../presenter-core/src/slides/themes/blank/code-slide";
import { synJS } from "../../../../common/highlighting";
import variableDiagram from "./variables.svg";

const Diagram = styled("img")({
  diagram: {
    width: 425,
    margin: "0 auto",
    display: "block",
  },
});

const slideItems = [
  'Variables "label" a piece of data',
  "This means that you can update one object using two different variables",
  "JavaScript does not copy values when setting variables",
];

const code = synJS`
const ryan = { name: "Ryan", age: 26, job: "Developer", id: "abc123" };
const evilTwin = ryan;
evilTwin.isEvil = true;
`;

export function VariablesAsLabels({ context }: Props) {
  return (
    <CodeSlide Title="Variables are Labels" context={context} bullets={slideItems} code={code}>
      <Diagram src={variableDiagram.src} />
    </CodeSlide>
  );
}

interface Props {
  context: PresentationContext;
}
