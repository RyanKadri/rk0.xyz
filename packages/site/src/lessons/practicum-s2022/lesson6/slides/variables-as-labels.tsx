import { createStyles, makeStyles } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJava } from "../../../../common/highlighting";
import variableDiagram from "./variables.svg";

const useStyles = makeStyles(
  createStyles({
    code: {
      fontSize: 26,
      userSelect: "text",
    },
    diagram: {
      width: 425,
      margin: "0 auto",
      display: "block",
    },
  })
);

const slideItems = [
  'Variables "label" a piece of data',
  "This means that you can update one object from two different variables",
];

const code = synJava`
Employee ryan = new Employee("Ryan", 26, "Developer", "abc123");
Employee evil = ryan;
evil.setIsEvilTwin(true);
`;

export function VariablesAsLabels({ context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title="Variables are Labels"
      context={context}
      Content={
        <>
          <InfoList items={slideItems}></InfoList>
          <CodeBlock code={code} className={classes.code}></CodeBlock>
          <img className={classes.diagram} src={variableDiagram.src} />
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
