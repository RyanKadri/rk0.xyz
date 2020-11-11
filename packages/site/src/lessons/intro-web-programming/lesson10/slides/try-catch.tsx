
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
try {
    someSketchyFunction(); // This function might fail
} catch (e) {
    console.error(e.message) // What to do with the failure
}
`.trim();

const items = [
    "Sometimes operations fail",
    "It would be nice to be able to handle errors gracefully",
    <>Errors immediately exit the current function and keep bubbling up until something <code>catch</code>es them</>,
    "try / catch in JavaScript lets you do this",
    <>You can <code>catch</code> an error and handle it</>
];

export function TryCatch({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="try / catch" context={context} Content={
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