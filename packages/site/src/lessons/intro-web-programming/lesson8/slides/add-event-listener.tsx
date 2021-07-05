
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synHTML, synJS } from "../../../../common/highlighting";

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

const myHTML = synHTML`
<div class="my-panel">
    <header>Panel Title</header>
</div>
`;

const code = synJS`
const myPanelHeader = document.querySelector(".my-panel header");
myPanel.addEventListener("click", changeColor);

function changeColor() {
    myPanelHeader.style.color = "red"
}
`

export function AddEventListener({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="addEventListener" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ myHTML } className={ classes.code }></CodeBlock>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}