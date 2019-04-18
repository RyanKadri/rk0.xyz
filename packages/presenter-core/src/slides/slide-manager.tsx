import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import HammerComp from "react-hammerjs";
import { match, RouteComponentProps } from "react-router";
import { useAppBar } from "../../../site/src/common/use-app-bar";
import { ViewportContext } from "../../../site/src/root/viewport-context";
import { Presentation, PresentationContext } from "../services/types";
import { SlideViewport } from "./slide-viewport";

const styles = createStyles({
    
})

const _SlideManager = ({ presentation, history, match }: Props) => {

    const slides = presentation.slides;
    const slideNum = parseInt(match.params.slideNum, 10);
    const { current: viewport, updateViewport } = useContext(ViewportContext);
    const updateSlidePos = (amt: number) => {
        if(amt < 0) {
            history.push("" + Math.max(0, slideNum + amt));
        } else {
            history.push("" + Math.min(slides.length - 1, slideNum + amt));
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
                case "Home":
                    return updateSlidePos(-slideNum);
                case "End":
                    return updateSlidePos(slides.length - 1 - slideNum)
                default:
                    return;
            }
        }
        document.addEventListener("keydown", updatePos);
        return () => document.removeEventListener("keydown", updatePos);
    }, [slideNum]);

    useEffect(() => {
        if(viewport.requestingFullscreen && !viewport.isFullscreen) {
            document.body.requestFullscreen()
                .then(() => updateViewport({ isFullscreen: true }))
                .catch(e => console.log(`Failed to launch fullscreen`, e));
        } else if(!viewport.requestingFullscreen && viewport.isFullscreen) {
            document.exitFullscreen()
                .then(() => updateViewport({ isFullscreen: false }))
        }
    }, [viewport.isFullscreen, viewport.requestingFullscreen]);

    useEffect(() => {
        const updateFullscreen = () => {
            if(!document["fullscreenElement"]) {
                updateViewport({ isFullscreen: false, requestingFullscreen: false })
            }
        }
        document.addEventListener("fullscreenchange", updateFullscreen);
        return () => document.removeEventListener("fullscreenchange", updateFullscreen);
    });

    useAppBar(presentation.title)
    
    return (
        <HammerComp onSwipe={ e => e.direction === Hammer.DIRECTION_LEFT ? updateSlidePos(1) : updateSlidePos(-1) }>
            <div>
                <SlideViewport Slide={ slides[slideNum] } context={ context } isFullscreen={ viewport.isFullscreen } />
            </div>
        </HammerComp>
    )
};

export const SlideManager = withStyles(styles)(_SlideManager)

interface Props extends WithStyles<typeof styles> {
    presentation: Presentation;
    history: RouteComponentProps["history"];
    match: match<any>;
}
