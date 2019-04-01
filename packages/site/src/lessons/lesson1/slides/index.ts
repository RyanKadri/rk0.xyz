import { Presentation } from "../../../../../presenter-core/src";
import { CSSHTMLTogether } from "./css-html-together";
import { OutlineToHtml } from "./outline-to-html";
import { SimpleBrowserSlide } from "./simple-browser";
import { SimpleMonitorSlide } from "./simple-monitor";
import { CSSInfo, HTMLDef, LetsCode, TitleSlide, WhatIsBrowser, WhatIsBrowserPart2, WhatIsCourse, WhatIsWebsite } from "./simple-slides";
import { XMLSlide } from "./xml-slide";

export const lesson1: Presentation = {
    title: "Intro to Web Design",
    description: "Learn about HTML, CSS, and web history",
    slides: [
        TitleSlide,
        WhatIsCourse,
        WhatIsWebsite,
        WhatIsBrowser,
        SimpleBrowserSlide,
        WhatIsBrowserPart2,
        SimpleMonitorSlide,
        HTMLDef,
        XMLSlide,
        OutlineToHtml,
        LetsCode,
        CSSInfo,
        CSSHTMLTogether
    ]
}