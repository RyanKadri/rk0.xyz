import { makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import xmlExample from "./xml-example.md";

const useStyles = makeStyles({
    code: {
        fontSize: "1.25em"
    }
})

export function XMLSlide({ context }: Props) {
    const classes = useStyles()
    return (
        <ContentSlide Title="XML" context={context} Content={
            <CodeBlock code={ xmlExample } className={ classes.code } />
        } />
    )
}

interface Props {
    context: PresentationContext
}