
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
    "Can still do console.log",
    "It prints text to the command line",
    "Text can be used in shell"
];

const code = `
function greet(name) {
    console.log("Good morning " + name);
}
`.trim();

export function ConsoleLogging({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Console Logging" context={context} Content={
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