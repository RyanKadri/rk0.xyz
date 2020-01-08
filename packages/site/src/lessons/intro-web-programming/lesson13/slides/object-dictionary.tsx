
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Imagine your code has to store 50,000 employee objects",
    'You often need to "fetch" an employee by ID',
    "How do you do that?"
];

const code = `
const employees = [{ id: 123, name: "Bob" }, { id: 234, name: "Ryan" }];
// vs
const employees = {
    "123": { id: 123, name: "Ryan" },
    "234": { id: 234, name: "Bob" }
}
`.trim();

export function ObjectDictionaries({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title={`Object "Dictionaries"`} context={context} Content={
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