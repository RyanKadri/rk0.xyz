
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const code = `
function delay(nMillis) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, nMillis)
    })
}
`.trim();

const items = [
    "You can define your own promises from scratch",
    'Can "wrap" asynchronous functions with a callback',
    "More useful in server-side JavaScript than browser JavaScript"
];

export function PromisesFromScratch({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Promises from Scratch" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}