
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
async function serverCall() {
    try {
        const resp = await fetch("https://some-server.com")
        const data = await resp.json();
        console.log(data);
    } catch(e) {
        console.log("Something went wrong with your request!")
    }
}
`.trim();

const items = [
    "async functions allow you to use normal try / catch with Promises",
    "If something throws in a try / catch while awaiting, you can handle it"
];

export function AsyncErrorHandling({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Async Error Handling" context={context} Content={
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