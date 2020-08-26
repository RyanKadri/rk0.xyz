import { Presentation } from "../../../../../presenter-core/src/services/types";
import controls from "./examples/controls.html";
import lists from "./examples/lists.html";
import media from "./examples/media.html";
import tables from "./examples/tables.html";
import textAndHeadings from "./examples/textAndHeadings.html";
import { IntroToHtmlLab } from "./lab/intro-to-html-lab";
import { OutlineToHtml } from "./slides/outline-to-html";
import { SimpleBrowserSlide } from "./slides/simple-browser";
import { SimpleMonitorSlide } from "./slides/simple-monitor";
import { AboutMe, AboutMePicture, CourseNonTopics, CourseTools, CourseTopics, Expectations, HtmlAsStructure, HTMLDef, LetsCode, References, Syllabus, TitleSlide, WhatIsBrowser, WhatIsBrowserPart2, WhatIsWebsite } from "./slides/simple-slides";
import { XMLSlide } from "./slides/xml-slide";

export const lesson1: Presentation = {
    title: "Hello World!",
    description: "Course Expectations, Web Fundamentals, Developer Tools, HTML Basics",
    slug: "hello-world",
    slides: [
        TitleSlide,
        AboutMePicture,
        AboutMe,
        CourseTopics,
        CourseNonTopics,
        CourseTools,
        Expectations, 
        Syllabus,
        WhatIsWebsite,
        WhatIsBrowser,
        SimpleBrowserSlide,
        WhatIsBrowserPart2,
        SimpleMonitorSlide,
        HTMLDef,
        XMLSlide,
        OutlineToHtml,
        HtmlAsStructure,
        LetsCode,
        References,
    ],
    examples: [
        { code: textAndHeadings, title: "Text and Headings" },
        { code: lists, title: "Lists" },
        { code: media, title: "Media" },
        { code: controls, title: "Controls" },
        { code: tables, title: "Tables" }
    ],
    lab: {
        slug: "intro-to-html",
        title: "Intro to HTML",
        LabView: IntroToHtmlLab
    },
}