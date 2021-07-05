
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "You can use the setTimeout function to do things after a certain delay",
    "Pass a function (for what to do) and a delay time (in ms)"
];

const code = synJS`
function printHello() {
    console.log("Hello!");
}

function annoying() {
    console.log("Is this annoying?");
}

setTimeout(printHello, 1000);
setInterval(annoying, 1000);
`

export function Timeouts({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Timers" context={context} Content={
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