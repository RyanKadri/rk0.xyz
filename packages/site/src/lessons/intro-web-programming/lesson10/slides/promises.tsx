
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import code from "./promises.md";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const items = [
    "Promises are a way to keep track of an asynchronous operation",
    'A "promise" that something will happen in the future',
    "Promises can complete or fail (resolve or reject)",
    "Promises allow callbacks to be set up for when a promise completes or fails",
];

export function Promises({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Promises" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}