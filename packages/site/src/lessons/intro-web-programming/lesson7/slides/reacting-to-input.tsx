
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text",
        border: "solid #444 2px",
        marginTop: 16
    }
}))

const slideItems = [
    "HTML elements can reference a function",
    "onclick, onmouseover, onkeypress, etc.",
    "The function needs to be defined somewhere"
];

const myHTML = `
<p id="detonate-paragraph">Detonate</p>
<button onclick="detonate()">Don't click me!</button>
`

const code = `
function detonate() {
    const paragraph = document.querySelector("#detonate-paragraph");
    paragraph.innerText = "Boom"
}
`.trim();

export function ReactingToInput({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Reacting to Inputs" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="html" code={ myHTML } className={ classes.code }></CodeBlock>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}