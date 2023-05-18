import { createStyles, makeStyles } from "@mui/styles";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeSlide } from "../../../../../../presenter-core/src/slides/themes/blank/code-slide";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(theme =>
  createStyles({
    arrayExample: {
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
    },
  })
);

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
  const classes = useStyles();
  return (
    <CodeSlide Title="Updating Arrays" context={context} bullets={slideItems} code={code}>
      <div className={classes.arrayExample}>
        {[0, 2, 6, 8, 10].map(num => (
          <div key={num}>{num}</div>
        ))}
      </div>
    </CodeSlide>
  );
}

interface Props {
  context: PresentationContext;
}
