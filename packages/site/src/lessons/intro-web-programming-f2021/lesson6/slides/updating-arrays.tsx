import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeSlide } from "../../../../../../presenter-core/src/slides/themes/blank/code-slide";
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

const slideItems = [
  "You can set individual items in arrays",
  "You can remove items from the middle of the array",
  'You can "push" items into the front or back of the array',
];

const code = synJS`
let evenNumbers = [2, 3, 6, 8];
evenNumbers[1] = 4 // Oops;
evenNumbers.push(10); // [2, 4, 6, 8, 10]
evenNumbers.unshift(0); // [0, 2, 4, 6, 8, 10];
evenNumbers.splice(2, 1);
`;

export function UpdatingArrays({ context }: Props) {
  return (
    <CodeSlide Title="Updating Arrays" context={context} bullets={slideItems} code={code}>
      <ArrayExample>
        {[0, 2, 6, 8, 10].map(num => (
          <div key={num}>{num}</div>
        ))}
      </ArrayExample>
    </CodeSlide>
  );
}

interface Props {
  context: PresentationContext;
}
