import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const ArrayExample = styled("div")(({ theme }) => ({
  display: "flex",
  border: `solid 4px ${theme.palette.text.secondary}`,
  marginTop: 16,
  alignSelf: "flex-start",
  "& div": {
    padding: 16,
    "&:not(:last-child)": {
      borderRight: `solid 4px ${theme.palette.text.secondary}`,
    },
  },
}));

const slideItems = ["Arrays hold ordered lists of values", "Positions start at 0"];

const code = synJS`
const myFavoriteNumbers = [1,2,3];
const names = ["Alice", "Bob", "Eve"];
const mixed = ["Alice", 2, false];

for(const element of mixed) {
    console.log(element);
}

console.log(mixed[0]);
mixed[3] = "something";
`;

export function ArraysExample({ context }: Props) {
  return (
    <CodeSlide Title="Arrays" context={context} bullets={slideItems} code={code}>
      <ArrayExample>
        <div>"Alice"</div>
        <div>2</div>
        <div>false</div>
        <div>"something"</div>
      </ArrayExample>
    </CodeSlide>
  );
}

interface Props {
  context: PresentationContext;
}
