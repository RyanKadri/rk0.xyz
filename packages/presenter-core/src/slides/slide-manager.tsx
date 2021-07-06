import { createStyles, makeStyles, MuiThemeProvider } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTitle } from "../../../site/src/common/use-app-bar";
import { CourseDefinition, PresentationContext } from "../services/types";
import { SlideControls } from "./slide-controls";
import { SlideViewport } from "./slide-viewport";
import { blankTheme } from "./themes/blank";
import { ThemeContext } from "./themes/theme-context";

const useStyles = makeStyles(theme => createStyles({
    controls: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));

interface Props {
    course: CourseDefinition
}
export function SlideManager({ course }: Props) {

    const classes = useStyles();
    const router = useRouter();
    const lessonSlug = router.query.lessonId;
    const slideNum = parseInt(router.query.slideNum as string, 10);
    const lesson = course.lessons.find(lesson => lesson.slug === lessonSlug)!;
    const slides = lesson.slides;

    const baseUrl = `/courses/${course.slug}/lessons/${lessonSlug}/slides/`;
    const nextSlide = slideNum < slides.length - 1 
        ? baseUrl + (slideNum + 1)
        : null;

    const previousSlide = slideNum > 0 
        ? baseUrl + (slideNum - 1)
        : null;
        
    const toNextSlide = () => {
        if(nextSlide) {
            router.replace(nextSlide, undefined, { shallow: true });
        }
    }
    
    const toPrevSlide = () => {
        if(previousSlide) {
            router.replace(previousSlide, undefined, { shallow: true });
        }
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

    useTitle(course?.title ?? "Unknown");

    const theme = lesson.theme ?? course.theme ?? blankTheme;
    
    return (
        <ThemeContext.Provider value={ theme }> 
            <MuiThemeProvider theme={ theme.theme }>    
                <main>
                    <SlideViewport Slide={ slides[slideNum] } 
                                context={ context } />
                    <SlideControls previousSlide={ previousSlide } 
                                nextSlide={ nextSlide } 
                                className={ classes.controls } />
                </main>
            </MuiThemeProvider> 
        </ThemeContext.Provider>
    )
};
