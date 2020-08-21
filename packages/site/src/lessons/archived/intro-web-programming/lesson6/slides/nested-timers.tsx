
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 24,
        userSelect: "text"
    }
}))

const code = `
function part1() {
    console.log("Hi.");
    setTimeout(part2, 1000);
}

function part2() {
    console.log("My")
    setTimeout(part3, 1000);
}

function part3() {
    console.log("name")
    setTimeout(part4, 1000);
}

function part4() {
    console.log("is")
    setTimeout(function() {
        console.log("Ryan")
    }, 1000);
}
`.trim();

export function NestedTimeouts({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Nested Timers?" context={context} Content={
            <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
        } />
    );
}

interface Props {
    context: PresentationContext
}