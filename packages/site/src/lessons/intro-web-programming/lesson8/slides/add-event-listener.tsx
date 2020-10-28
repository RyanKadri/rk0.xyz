
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
    'You can "listen" for events in JavaScript like you can in HTML',
    "Similar to adding an onclick event handler in HTML"
];

const myHTML = `
<div class="my-panel">
    <header>Panel Title</header>
</div>
`

const code = `
const myPanelHeader = document.querySelector(".my-panel header");
myPanel.addEventListener("click", changeColor);

function changeColor() {
    myPanelHeader.style.color = "red"
}
`.trim();

export function AddEventListener({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="addEventListener" context={context} Content={
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