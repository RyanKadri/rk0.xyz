import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { ComponentType, useEffect } from "react";
import { match, RouteComponentProps } from "react-router";
import { PresentationContext } from "../services/types";
import { SlideViewport } from "./slide-viewport";

const styles = createStyles({

})

const _SlideManager = ({ slides, history, match }: Props) => {

    const slideNum = parseInt(match.params.slideNum, 10);
    const updateSlidePos = (amt: number) => {
        const slideNum = parseInt(match.params.slideNum, 10);
        if(amt < 0) {
            history.push("/slides/" + Math.max(0, slideNum + amt));
        } else {
            history.push("/slides/" + Math.min(slides.length - 1, slideNum + amt));
        }
    }

    const context: PresentationContext = {
        numPages: slides.length,
        pageNum: slideNum + 1
    }

    useEffect(() => {
        const updatePos = (e: KeyboardEvent) => {
            switch(e.key) {
                case "ArrowRight":
                    return updateSlidePos(1);
                case "ArrowLeft":
                    return updateSlidePos(-1);
                default:
                    return;
            }
        }
        document.addEventListener("keydown", updatePos);
        return () => document.removeEventListener("keydown", updatePos);
    }, [slideNum])
    return (
        <SlideViewport Slide={ slides[slideNum] } context={ context } />
    )
};

export const SlideManager = withStyles(styles)(_SlideManager)

interface Props extends WithStyles<typeof styles> {
    slides: ComponentType<{context: PresentationContext}>[];
    history: RouteComponentProps["history"];
    match: match<any>;
}