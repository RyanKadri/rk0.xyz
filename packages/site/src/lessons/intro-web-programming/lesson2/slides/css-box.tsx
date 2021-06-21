
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import img from "../assets/box-model-alt-small.png";

const styles = createStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    }
})

const _CssBox = ({ context, classes }: Props) => (
    <ContentSlide Title="CSS Fundamentals: Box Model" context={context} Content={
        <div className={ classes.container }>
            <img src={img.src}/>
        </div>
    } />
)

export const CssBox = withStyles(styles)(_CssBox)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}