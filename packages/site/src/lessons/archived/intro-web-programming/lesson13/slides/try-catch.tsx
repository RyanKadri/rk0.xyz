
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Sometimes code creates an error outside your control",
    "Try / Catch helps solve that",
    "Avoid for your own synchronous code",
];

const code = `
try {
    const result = superSketchyLibraryFunction();
    console.log(result);
} catch (e) {
    console.log("Error: " + e.message)
}
`.trim();

export function TryCatch({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Try / Catch" context={context} Content={
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