
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const code = `
async function printHello() {
    console.log("Hello.");
    delay(1000)()
        .then(() => console.log("My"))
        .then(delay(1000))
        .then(() => console.log("name"))
        .then(delay(1000))
        .then(() => console.log("is"))
        .then(delay(1000))
        .then(() => console.log("Ryan"));
}
`.trim();

export function PromisesExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Promises To The Rescue!" context={context} Content={
            <CodeBlock language="js" code={ code } className={ classes.code } />
        } />
    );
}

interface Props {
    context: PresentationContext
}