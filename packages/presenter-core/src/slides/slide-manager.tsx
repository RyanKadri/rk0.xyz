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

export function SlideManager() {

    const classes = useStyles();
    const router = useRouter();
    const courseSlug = router.query.courseId;
    const lessonSlug = router.query.lessonId;
    const slideNum = parseInt(router.query.slideNum as string, 10);
    const course = activeCourses.find(course => course.slug === courseSlug);
    const lesson = course?.lessons.find(lesson => lesson.slug === lessonSlug);
    const slides = lesson?.slides ?? [];
    const baseUrl = `/courses/${courseSlug}/lessons/${lessonSlug}/slides/`;
        
    const toNextSlide = () => {
        const nextSlide = baseUrl + Math.min(slides.length - 1, slideNum + 1);
        router.replace(nextSlide, undefined, { shallow: true });
    }
    
    const toPrevSlide = () => {
        const prevSlide = baseUrl + Math.max(0, slideNum + 1);
        router.replace(prevSlide, undefined, { shallow: true });
    }

    const toSlide = (pos: number) => {
        router.replace(baseUrl + pos, undefined, { shallow: true })
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
                    return toNextSlide();
                case "PageUp":
                case "ArrowLeft":
                    return toPrevSlide();
                case "Home":
                    return toSlide(0);
                case "End":
                    return toSlide(slides.length - 1)
                default:
                    return;
            }
        }
        document.addEventListener("keydown", updatePos);
        return () => document.removeEventListener("keydown", updatePos);
    }, [slideNum]);

    useTitle(course?.title ?? "Unknown")
    
    return (
        <div>
            <SlideViewport Slide={ slides[slideNum] } 
                           context={ context } />
            <SlideControls onPreviousSlide={ toPrevSlide } 
                           onNextSlide={ toNextSlide } 
                           className={ classes.controls } />
        </div>
    )
};
