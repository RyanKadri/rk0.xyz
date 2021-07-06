
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    },
    arrayExample: {
        display: "flex",
        border: "solid 4px black",
        marginTop: 16,
        alignSelf: "flex-start",
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

const code = synJS`
let evenNumbers = [2, 3, 6, 8];
evenNumbers[1] = 4 // Oops;
evenNumbers.push(10); // [2, 4, 6, 8, 10]
evenNumbers.unshift(0); // [0, 2, 4, 6, 8, 10];
evenNumbers.splice(2, 1);
`

export function UpdatingArrays({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Updating Arrays" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
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