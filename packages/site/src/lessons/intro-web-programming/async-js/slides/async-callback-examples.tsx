
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Timers in JS call a callback when they are done",
    "Time is set in milliseconds"
];

const code = `
function printHello() {
    console.log("Hello!")
}

function printGoodbye(timerId) {
    console.log("Goodbye");
    clearTimeout(timerId);
}

const intervalTimeout = setInterval(printHello, 1000);
setTimeout(printGoodbye, 5500, intervalTimeout);
`.trim();

export function Timeouts({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Timers" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}