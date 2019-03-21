import React from "react";
import { render } from "react-dom";
import { PresentationViewer } from "../../../../presenter/app/app-root";
import { CSSHTMLTogether } from "./slides/css-html-together";
import { IntroSlide } from "./slides/intro-slide";
import { OutlineToHtml } from "./slides/outline-to-html";
import { SimpleBrowserSlide } from "./slides/simple-browser";
import { SimpleMonitorSlide } from "./slides/simple-monitor";
import { CSSInfo, HTMLDef, LetsCode, WhatIsBrowser, WhatIsBrowserPart2, WhatIsCourse, WhatIsWebsite } from "./slides/simple-slides";
import { XMLSlide } from "./slides/xml-slide";

const slides = [
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
];

render(
    <PresentationViewer slides={slides}></PresentationViewer>,
    document.getElementById("app")
)