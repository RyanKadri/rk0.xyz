
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const slideItems = [
    "Variables are defined with let and const",
    "They label a piece of data",
    'Variables defined with "let" can be reassigned. "const" variables cannot',
];

const code = synJS`
let data = "Ryan";
data = 123;
data = false;
data = null;
const something = 456;
something = 123 // TypeError
`

export function VariablesRedux({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Variables" context={context} Content={
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