import { createStyles, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTitle } from "../../../site/src/common/use-app-bar";
import { activeCourses } from "../../../site/src/lessons/views/activeCourses";
import { PresentationContext } from "../services/types";
import { SlideControls } from "./slide-controls";
import { SlideViewport } from "./slide-viewport";

const useStyles = makeStyles(theme => createStyles({
    controls: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));

export function SlideManager({ courseSlug, lessonSlug, slideNum }: Props) {

    const classes = useStyles();
    const router = useRouter();
    const course = activeCourses.find(course => course.slug === courseSlug);
    const lesson = course.lessons.find(lesson => lesson.slug === lessonSlug);
    const slides = lesson.slides;
    const baseUrl = `/courses/${courseSlug}/lessons/${lessonSlug}/slides/`;

    const updateSlidePos = (amt: number) => {
        if(amt < 0) {
            router.push(baseUrl + Math.max(0, slideNum + amt));
        } else {
            router.push(baseUrl + Math.min(slides.length - 1, slideNum + amt));
        }
    }

    const context: PresentationContext = {
        numPages: slides.length,
        pageNum: slideNum + 1
    }

    useEffect(() => {
        const updatePos = (e: KeyboardEvent) => {
            if(e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) {
                return;
            }
            switch(e.key) {
                case "ArrowRight":
                case "PageDown":
                    return updateSlidePos(1);
                case "PageUp":
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

    useTitle(course.title)
    
    return (
        <div>
            <SlideViewport Slide={ slides[slideNum] } 
                           context={ context } />
            <SlideControls onPreviousSlide={ () => updateSlidePos(-1) } 
                           onNextSlide={ () => updateSlidePos(1) } 
                           className={ classes.controls } />
        </div>
    )
};

interface Props {
    courseSlug: string
    lessonSlug: string;
    slideNum: number;
}
