
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const code = `
setTimeout(function() {
    console.log("Hello!")
}, 1000);

setTimeout(function() {
    console.log("Hello!")
}, 1000);

setTimeout(function() {
    console.log("Hello!")
}, 1000);

setTimeout(function() {
    console.log("Hello!")
}, 1000);
`.trim();

export function TimeoutWaitWhat({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Wait what?" context={context} Content={
            <>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}