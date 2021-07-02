
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const code = synJS`
async function printHello() {
    console.log("Hello.");
    // Delay is not a built-in function. But it's one you can write'
    delay(1000)()
        .then(() => console.log("My"))
        .then(delay(1000))
        .then(() => console.log("name"))
        .then(delay(1000))
        .then(() => console.log("is"))
        .then(delay(1000))
        .then(() => console.log("Ryan"));
}
`

export function PromisesExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Promises in Action" context={context} Content={
            <CodeBlock code={ code } className={ classes.code } />
        } />
    );
}

interface Props {
    context: PresentationContext
}