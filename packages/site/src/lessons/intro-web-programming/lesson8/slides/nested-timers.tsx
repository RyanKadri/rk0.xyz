
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import code from "./nested-timers.md";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 24,
        userSelect: "text"
    }
}))

export function NestedTimeouts({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Nested Timers?" context={context} Content={
            <CodeBlock code={ code } className={ classes.code }></CodeBlock>
        } />
    );
}

interface Props {
    context: PresentationContext
}