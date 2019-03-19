import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { PresentationContext } from "../services/types";
import { IntroSlide } from "./intro-slide";
import { SlideViewport } from "./slide-viewport";
import { WhatIsCourseSlide } from "./what-is-course";

const styles = createStyles({

})

const slides = [
    IntroSlide,
    WhatIsCourseSlide
];

const _SlideManager = ({}: Props) => {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    const updateSlidePos = (amt: number) => {
        const next = currentSlide + amt;
        if(amt < 0) {
            setCurrentSlide(Math.max(0, next))
        } else {
            setCurrentSlide(Math.min(slides.length - 1, next));
        }
    }

    const context: PresentationContext = {
        numPages: slides.length,
        pageNum: currentSlide + 1
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
    }, [])
    return (
        <SlideViewport Slide={ slides[currentSlide] } context={ context } />
    )
}

export const SlideManager = withStyles(styles)(_SlideManager)

interface Props extends WithStyles<typeof styles> {

}