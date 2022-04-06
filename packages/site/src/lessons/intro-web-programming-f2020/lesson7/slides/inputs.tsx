import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synHTML, synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(
  createStyles({
    code: {
      fontSize: 26,
      userSelect: "text",
      border: "solid #444 2px",
      marginTop: 16,
    },
  })
);

const slideItems = [
  "HTML has some elements for user inputs",
  "The <input>, <button>, and <select> are probably the most common",
  "JavaScript can read the value of inputs",
];

const code = synJS`
const myTextbox = document.querySelector("#my-textbox");
const myCheckbox = document.querySelector("#my-checkbox");

const userInputText = myTextbox.value;
const isCheckboxChecked = myCheckbox.checked;

if(isCheckboxChecked) {
    // ...
}
`;

const myHTML = synHTML`
<input type="text" id="my-textbox">
<input type="checkbox" id="my-checkbox">
`;

export function UserInputElements({ context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title="User Inputs"
      context={context}
      Content={
        <>
          <InfoList items={slideItems}></InfoList>
          <CodeBlock code={myHTML} className={classes.code}></CodeBlock>
          <CodeBlock code={code} className={classes.code}></CodeBlock>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
