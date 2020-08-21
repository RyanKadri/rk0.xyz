
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "For loops are for iterating a specific number of times",
];

const code = `
const myFavoriteNumbers = [1,2,3];
for(const number of myFavoriteNumbers) {
    console.log(number);
}

for(let i = 0; i < 5; i++) {
    console.log("Here is a number: " + i)
}
`.trim();

export function ForLoops({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="For Loops" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}