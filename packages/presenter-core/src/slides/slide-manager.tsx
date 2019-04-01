import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HammerComp from "react-hammerjs";
import { match, RouteComponentProps } from "react-router";
import { PresentationControls } from "../controls/presentation-controls";
import { Presentation, PresentationContext } from "../services/types";
import { SlideViewport } from "./slide-viewport";

const styles = createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    }
})

const _SlideManager = ({ presentation, history, match, classes }: Props) => {

    const slides = presentation.slides;
    const slideNum = parseInt(match.params.slideNum, 10);
    const [state, setState] = useState<AppState>({ fullscreen: false, requestFullscreenState: false });
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
        if(state.requestFullscreenState && !state.fullscreen) {
            document.body.requestFullscreen()
                .then(() => setState(old => ({ ...old, fullscreen: true })))
                .catch(e => console.log(`Failed to launch fullscreen`, e));
        } else if(!state.requestFullscreenState && state.fullscreen) {
            document.exitFullscreen()
                .then(() => setState(old => ({ ...old, fullscreen: false })))
        }
    }, [state.fullscreen, state.requestFullscreenState]);

    useEffect(() => {
        const updateFullscreen = () => {
            if(!document["fullscreenElement"]) {
                setState(old => ({ ...old, fullscreen: false, requestFullscreenState: false }))
            }
        }
        document.addEventListener("fullscreenchange", updateFullscreen);
        return () => document.removeEventListener("fullscreenchange", updateFullscreen);
    });

    useEffect(() => {
        document.title = presentation.title;
    }, [ presentation.title ])
    
    return (
        <HammerComp onSwipe={ e => e.direction === Hammer.DIRECTION_LEFT ? updateSlidePos(1) : updateSlidePos(-1) }>
            <div className={ classes.container }>
                <PresentationControls
                            title={ presentation.title } 
                            fullScreen={state.fullscreen} 
                            onFullScreen={ shouldFullscreen => setState(old => ({ ...old, requestFullscreenState: shouldFullscreen })) } 
                            />
                    <SlideViewport Slide={ slides[slideNum] } context={ context } isFullscreen={ state.fullscreen } />
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

interface AppState {
    fullscreen: boolean;
    requestFullscreenState: boolean;
}