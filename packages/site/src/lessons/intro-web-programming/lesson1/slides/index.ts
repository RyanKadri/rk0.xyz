import controls from "../examples/controls.html";
import lists from "../examples/lists.html";
import media from "../examples/media.html";
import tables from "../examples/tables.html";
import textAndHeadings from "../examples/textAndHeadings.html";
import { OutlineToHtml } from "./outline-to-html";
import { SimpleBrowserSlide } from "./simple-browser";
import { SimpleMonitorSlide } from "./simple-monitor";
import { AboutMe, AboutMePicture, CourseNonTopics, CourseTopics, Expectations, HTMLDef, LetsCode, Syllabus, TitleSlide, WhatIsBrowser, WhatIsBrowserPart2, WhatIsWebsite } from "./simple-slides";
import { XMLSlide } from "./xml-slide";

export const lesson1 = {
    title: "Hello World!",
    description: "Course Expectations, Web Fundamentals, Developer Tools, HTML Basics",
    slug: "hello-world",
    slides: [
        TitleSlide,
        AboutMePicture,
        AboutMe,
        CourseTopics,
        CourseNonTopics,
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
        LetsCode,
    ],
    examples: [
        { code: textAndHeadings, title: "Text and Headings" },
        { code: lists, title: "Lists" },
        { code: media, title: "Media" },
        { code: controls, title: "Controls" },
        { code: tables, title: "Tables" }
    ]
}