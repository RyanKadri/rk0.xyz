import { AutomaticSlideRecording } from "../../../../../presenter-core/src/services/slide-recorder";
import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import basicDisplays from "./examples/basic-displays.html";
import flexChildren from "./examples/flex-children.html";
import flexDirections from "./examples/flex-directions.html";
import responsiveGrid from "./examples/grid.html";
import inlineBlock from "./examples/inline-block.html";
import mediaQuery from "./examples/media-query.html";
import simpleGrid from "./examples/simple-grid.html";
import { DetectBrowser } from "./slides/DetectBrowser";
import { ResponsiveCSS } from "./slides/ResponsiveCss";
import * as simple from "./slides/simple-slides";
import { UseMultipleSites } from "./slides/UsingMultipleSites";
import timings from "./slides/website-layouts.json";

export const lesson3: Presentation = {
    title: "The Mainstream Media Queries",
    description: "Website Layout",
    slug: "mainstream-media-queries",
    slides: [
        simple.TitleSlide,
        simple.Goal,
        simple.WhatAboutPosition,
        simple.DisplayProp,
        simple.Flow,
        simple.BlockVsInline,
        simple.FlexboxOverview,
        simple.FlexboxPractice,
        simple.FlexboxMissing,
        simple.GridOverview,
        simple.GridPractice,
        simple.CombineItAll,
        simple.ResponsiveDesignTitle,
        simple.GoalsOfResponsiveDesign,
        simple.GoalsOfResponsiveDesignMore,
        simple.AccessibilityAndResponsiveness,
        simple.HowToResponsive,
        UseMultipleSites,
        DetectBrowser,
        ResponsiveCSS,
        simple.ResponsiveIsHard,
        simple.MixMatchApproach,
        simple.EnterMedia,
        simple.MediaQueries,
        simple.MediaQueryExample,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        { code: basicDisplays, title: "Basic Display Types", language: "html" },
        { code: inlineBlock, title: "Inline Block", language: "html" },
        { code: flexDirections, title: "Flex Directions", language: "html" },
        { code: flexChildren, title: "Flex Children", language: "html" },
        { code: simpleGrid, title: "Simple Grid", language: "html" },
        { code: mediaQuery, title: "Media Query", language: "html" },
        { code: responsiveGrid, title: "Responsive Grid", language: "html" }
    ],
    lab: {
        title: "HTML + CSS Basics",
        slug: "html-css-basics",
    },
    recording: {
        link: "https://youtu.be/xwy5_CEFAU0",
        slideTimings: timings as AutomaticSlideRecording
    },
    references: simple.references
}