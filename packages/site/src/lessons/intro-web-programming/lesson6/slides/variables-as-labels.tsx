
import { createStyles, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import code from "./variables-as-labels.md";
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

export function VariablesAsLabels({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Variables are Labels" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
                <Image className={ classes.diagram } src={ variableDiagram } />
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}