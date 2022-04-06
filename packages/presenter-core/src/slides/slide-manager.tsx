import { createStyles, makeStyles, MuiThemeProvider } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTitle } from "../../../site/src/common/use-app-bar";
import { recorderService } from "../services/slide-recorder";
import { CourseDefinition, PresentationContext } from "../services/types";
import { SlideControls } from "./slide-controls";
import { SlideViewport } from "./slide-viewport";
import { blankTheme } from "./themes/blank";
import { ThemeContext } from "./themes/theme-context";

const controlsHeight = 48;
const useStyles = makeStyles(theme =>
  createStyles({
    viewportContainer: {
      display: "grid",
      [theme.breakpoints.down("sm")]: {
        gridTemplateRows: `${controlsHeight}px calc(100vh - 56px - ${controlsHeight}px)`,
      },
      [theme.breakpoints.up("md")]: {
        gridTemplateRows: `${controlsHeight}px calc(100vh - 64px - ${controlsHeight}px)`,
      },
      gridTemplateColumns: "100%",
    },
    controls: {},
  })
);

interface Props {
  course: CourseDefinition;
}
export function SlideManager({ course }: Props) {
  const classes = useStyles();
  const router = useRouter();
  const recorder = recorderService.useRecorder();
  const lessonSlug = router.query.lessonId;
  const slideNum = parseInt(router.query.slideNum as string, 10);
  const lesson = course.lessons.find(lesson => lesson.slug === lessonSlug)!;
  const slides = lesson.slides;

  const baseUrl = `/courses/${course.slug}/lessons/${lesson.slug}/slides/`;
  const nextSlide = slideNum < slides.length - 1 ? baseUrl + (slideNum + 1) : null;

  const previousSlide = slideNum > 0 ? baseUrl + (slideNum - 1) : null;

  const toNextSlide = () => {
    if (nextSlide) {
      router.replace(nextSlide, undefined, { shallow: true });
    }
  };

  const toPrevSlide = () => {
    if (previousSlide) {
      router.replace(previousSlide, undefined, { shallow: true });
    }
  };

  const toSlide = (pos: number) => {
    router.replace(baseUrl + pos, undefined, { shallow: true });
  };

  const context: PresentationContext = {
    numPages: slides.length,
    pageNum: slideNum + 1,
  };

  useEffect(() => {
    const updatePos = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) {
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          return toNextSlide();
        case "PageUp":
        case "ArrowLeft":
          return toPrevSlide();
        case "Home":
          return toSlide(0);
        case "End":
          return toSlide(slides.length - 1);
        default:
          return;
      }
    };
    document.addEventListener("keydown", updatePos);
    return () => document.removeEventListener("keydown", updatePos);
  }, [slideNum]);

  useEffect(() => {
    recorder.slideChanged({ slideNum, time: Date.now() });
  }, [slideNum]);

  useTitle(course?.title ?? "Unknown");

  const theme = lesson.theme ?? course.theme ?? blankTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <MuiThemeProvider theme={theme.theme}>
        <main className={classes.viewportContainer}>
          <SlideControls
            courseUrl={`/courses/${course.slug}`}
            currSlide={slideNum}
            previousSlideLink={previousSlide}
            nextSlideLink={nextSlide}
            className={classes.controls}
            onRecord={() =>
              recorder.startRecording(course.title, lesson.title ?? lesson.description)
            }
            onStop={recorder.stop}
            lesson={lesson}
            recording={recorder.currentRecording}
          />
          <SlideViewport Slide={slides[slideNum]} context={context} />
        </main>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
