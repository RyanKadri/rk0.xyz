
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const slideItems = [
    "A variable can be assigned to any type of data",
    "Variables can be reassigned to other values (and types)",
    "Variables use keywords let, const, and var",
    "let and const are block scoped",
    "var is function scoped"
];

const code = `
let data = "Ryan";
data = 123;
data = false;
data = null;
const something = 456;
something = 123 // TypeError
`.trim();

export function VariablesRedux({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Variables" context={context} Content={
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