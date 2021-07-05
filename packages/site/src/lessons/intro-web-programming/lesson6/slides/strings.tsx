
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
    }
}))

const slideItems = [
    "Strings are like arrays of characters",
    "Cannot be modified directly",
    "Many built-in methods"
];

const code = synJS`
const myName = "Ryan Kadri";

for(const letter of myName) {
    console.log(letter);
}

console.log(myName.toLowerCase()) // "ryan kadri";
console.log(myName.repeat(2)); // "Ryan KadriRyan Kadri"
console.log(myName.substring(0,4)) // "Ryan";
console.log(myName.split(" ")) // [ "Ryan", "Kadri" ];
`

export function StringsPart2({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Strings (Revisited)" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}