
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import code from "./variables.md";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const slideItems = [
    "Variables give a label for data",
    'Variables are assigned with "const", "let", or "var"',
    'var is discouraged (obsolete?)',
    'The label can be re-pointed to new data if you use "let"',
    'The label can be re-pointed to different types of data if you use "let"'
];

export function VariablesExamples({ context }: Props) {
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