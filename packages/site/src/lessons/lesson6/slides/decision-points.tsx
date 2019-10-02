
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    }
}))

const code = `
function findFirstGreaterThanN(array, n) {
    for(const el of array) {
        if(el > n) {
            return el;
        }
    }
}

function findFirstStartsWith(array, letter) {
    for(const el of array) {
        if(el.startsWith(letter)) {
            return el;
        }
    }
}

function find(array, elMatches) {
    // ???
}
`.trim();

export function SyncCallbackUseCase({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Synchronous Callbacks" context={context} Content={
            <CodeBlock language="js" code={ code } className={ classes.code } />
        } />
    );
}

interface Props {
    context: PresentationContext
}