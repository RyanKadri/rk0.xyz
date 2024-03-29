import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeSlide } from "../../../../../../presenter-core/src/slides/themes/blank/code-slide";
import { synJS } from "../../../../common/highlighting";
import variableDiagram from "./variables.svg";

const Image = styled("img")({
  width: 425,
  margin: "8px auto",
  display: "block",
  padding: 8,
  backgroundColor: "white",
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
      <Image src={variableDiagram.src} />
    </CodeSlide>
  );
}

interface Props {
  context: PresentationContext;
}
