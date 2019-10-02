
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const code = `
async function printHello() {
    console.log("Hello.");
    
    await delay(1000)
    console.log("My")
    
    await delay(1000)
    console.log("name")

    await delay(1000)
    console.log("is")

    await delay(1000)
    console.log("Ryan")
}
`.trim();

export function AwaitExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Async/Await To The Rescue!" context={context} Content={
            <CodeBlock language="js" code={ code } className={ classes.code } />
        } />
    );
}

interface Props {
    context: PresentationContext
}