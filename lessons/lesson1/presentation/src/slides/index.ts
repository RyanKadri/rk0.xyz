import { Presentation } from "../../../../../presenter/app/services/types";
import { CSSHTMLTogether } from "./css-html-together";
import { IntroSlide } from "./intro-slide";
import { OutlineToHtml } from "./outline-to-html";
import { SimpleBrowserSlide } from "./simple-browser";
import { SimpleMonitorSlide } from "./simple-monitor";
import { CSSInfo, HTMLDef, LetsCode, WhatIsBrowser, WhatIsBrowserPart2, WhatIsCourse, WhatIsWebsite } from "./simple-slides";
import { XMLSlide } from "./xml-slide";

export const lesson1: Presentation = {
    title: "Intro to Web Design",
    description: "Learn about HTML, CSS, and web history",
    slides: [
        IntroSlide,
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