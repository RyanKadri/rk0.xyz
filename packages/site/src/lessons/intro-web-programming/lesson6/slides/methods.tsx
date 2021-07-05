
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Objects can have functions that operate on their data",
    "These functions are called methods",
    `Methods use the special keyword "this"`,
    "Use the dot operator to call them"
];

const code = synJS`
const ryan = { 
    firstName: "Ryan", lastName: "Kadri", age: 26,
    getFullName() { return this.firstName + " " + this.lastName },
    birthdayParty() { this.age ++ }
};

console.log(ryan.getFullName());
`

export function Methods({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Methods" context={context} Content={
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