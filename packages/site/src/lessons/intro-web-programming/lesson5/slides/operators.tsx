
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import code from "./operators.md";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: "1rem",
        userSelect: "text"
    }
}))

const slideItems = [
    "Operators let you create expressions",
    "Operators take 1-3 values",
    "JavaScript allows you to build large, complex expressions with operators (and order of operations)"
];

export function Operators({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Operators" context={context} Content={
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