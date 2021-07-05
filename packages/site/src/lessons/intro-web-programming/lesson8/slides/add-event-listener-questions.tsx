
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text",
        border: "solid #444 2px",
        marginTop: 16
    }
}))

const slideItems = [
    "What just happened there?",
    <>Why not "<code>myPanel.addEventListener("click", <u>changeColor()</u>);</code>"?</>
];

const code = synJS`
const myPanelHeader = document.querySelector(".my-panel header");
myPanel.addEventListener("click", changeColor);

function changeColor() {
    myPanelHeader.style.color = "red"
}
`

export function AddEventListenerQuestions({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="addEventListener" context={context} Content={
            <>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
                <InfoList items={ slideItems }></InfoList>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}