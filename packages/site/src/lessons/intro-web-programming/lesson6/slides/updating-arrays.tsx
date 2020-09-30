
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    },
    arrayExample: {
        fontSize: 32,
        display: "flex",
        position: "absolute",
        border: "solid 4px black",
        "& div": {
            padding: 16,
            "&:not(:last-child)": {
                borderRight: "solid 4px black"
            }
        }
    }
}))

const slideItems = [
    "You can set individual items in arrays",
    "You can remove items from the middle of the array",
    'You can "push" items into the front or back of the array'
];

const code = `
let evenNumbers = [2, 3, 6, 8];
evenNumbers[1] = 4 // Oops;
evenNumbers.push(10); // [2, 4, 6, 8, 10]
evenNumbers.unshift(0); // [0, 2, 4, 6, 8, 10];
evenNumbers.splice(2, 1);
`.trim();

export function UpdatingArrays({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Updating Arrays" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
                <div className={ classes.arrayExample }>
                    { [0, 2, 6, 8, 10].map(num => (
                        <div key={num}>{num}</div>
                    )) }
                </div>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}