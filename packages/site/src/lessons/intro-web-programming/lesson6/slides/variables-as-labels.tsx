
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import { synJS } from "../../../../common/highlighting";
import variableDiagram from "./variables.svg";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    },
    diagram: {
        width: 425,
        margin: "0 auto",
        display: "block"
    }
}))

const slideItems = [
    'Variables "label" a piece of data',
    "This means that you can update one object using two different variables",
    "JavaScript does not copy values when setting variables"
];

const code = synJS`
const ryan = { name: "Ryan", age: 26, job: "Developer", id: "abc123" };
const evilTwin = ryan;
evilTwin.isEvil = true;
`

export function VariablesAsLabels({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Variables are Labels" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
                <img className={ classes.diagram } src={ variableDiagram.src } />
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}