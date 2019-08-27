import { Presentation } from "../../../../../presenter-core/src";
import content from "../examples/rothfuss.html";
import { OutlineToHtml } from "./outline-to-html";
import { SimpleBrowserSlide } from "./simple-browser";
import { SimpleMonitorSlide } from "./simple-monitor";
import { Expectations, GradingA, GradingB, HTMLDef, LetsCode, Syllabus, TitleSlide, WhatIsBrowser, WhatIsBrowserPart2, WhatIsWebsite } from "./simple-slides";
import { XMLSlide } from "./xml-slide";

export const lesson1: Presentation = {
    title: "Hello World!",
    description: "Course Expectations, Web Fundamentals, Developer Tools, HTML Basics",
    slides: [
        TitleSlide,
        Expectations, 
        GradingA,
        GradingB,
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
        { code: content, title: "Simple HTML" }
    ]
}