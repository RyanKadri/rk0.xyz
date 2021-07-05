import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import preview from "./bookreads.webp";

const useStyles = makeStyles(createStyles({
    preview: {
        width: "80%",
        margin: "0 auto",
        display: "block"
    }
}))

export function BookreadsSlide({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="I want it to look like this" context={ context } Content={
            <img src={ preview.src }
                 alt="Bookreads Preview"
                 className={ classes.preview } />
        } />
    );
}

interface Props {
    context: PresentationContext
}