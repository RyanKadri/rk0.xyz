
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

const code = `
async function printSomeStuff() {
    await delay(1000);
    console.log("Hi");
    await delay(1000);
    console.log("I'm");
    await delay(1000);
    console.log("Ryan")
}
`.trim();

const items = [
    "Recently, JavaScript added support for async functions",
    "async functions simplify promises even further",
    <>Allow you to <code>await</code> a Promise and write more synchronous code</>,
    "Remains non-blocking. Always returns a Promise",
    <>Other code can run while async function is <code>await</code>ing</>
];

export function AsyncFunctions({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Async Functions" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock language="js" code={ code } className={ classes.code } />
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}