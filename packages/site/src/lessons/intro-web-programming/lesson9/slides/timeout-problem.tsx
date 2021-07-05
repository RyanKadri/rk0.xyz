
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}));

const code = synJS`
function sayHi() {
    console.log("Hi")
}

setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
`

export function NonBlockingExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Async / Non-Blocking JavaScript" context={context} Content={
            <>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}