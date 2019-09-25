
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Objects can be associated with functions",
    "These functions are called methods",
    `Refers to special keyword "this"`,
    "Called with dot operator"
];

const code = `
const ryan = { 
    firstName: "Ryan", lastName: "Kadri", age: 26,
    getFullName() { return this.firstName + " " + this.lastName },
    birthdayParty() { this.age ++ }
};

console.log(ryan.getFullName());
`.trim();

export function Methods({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Methods" context={context} Content={
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