
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const items = [
    <><code>.then</code> callbacks can be synchronous or return another Promise</>,
    <>If the <code>.then</code> callback returns a Promise, the next <code>.then</code> will wait until the <em>returned promise</em> finishes</>,
    "This collapsing helps make asynchronous code much easier to follow",
    "You don't need nested callbacks. Can orchestrate everything in one place"
];

const code = synJS`
delay(1000)
    .then(() => console.log("Hi"))
    .then(() => delay(1000))
    .then(() => console.log("I'm"))
    .then(() => delay(1000))
    .then(() => console.log("Ryan"))
`

export function PromiseChaining({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Chaining Promises" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock code={ code } className={ classes.code } />
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}