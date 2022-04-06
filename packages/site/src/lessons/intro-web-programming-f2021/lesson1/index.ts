import { AutomaticSlideRecording } from "../../../../../presenter-core/src/services/slide-recorder";
import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import controls from "./examples/controls.html";
import lists from "./examples/lists.html";
import media from "./examples/media.html";
import tables from "./examples/tables.html";
import textAndHeadings from "./examples/textAndHeadings.html";
import { BrowserServerChat1 } from "./slides/browser-server-discussion-1";
import { BrowserServerChat2 } from "./slides/browser-server-discussion-2";
import { OutlineToHtml } from "./slides/outline-to-html";
import { SimpleBrowserSlide } from "./slides/simple-browser";
import {
  AboutMe,
  AboutMePicture,
  CourseNonTopics,
  CourseTools,
  CourseTopics,
  Expectations,
  HtmlAsStructure,
  HTMLDef,
  LetsCode,
  references,
  Syllabus,
  TitleSlide,
  TradeoffsOfDirections,
  TradeoffsOfHTML,
  TradeoffsOfServerImages,
  WhatIsBrowser,
  WhatIsBrowserPart2,
  WhatIsWebsite,
  XMLSlide,
} from "./slides/simple-slides";
import timings from "./slides/timings.json";

export const lesson1: Presentation = {
  title: "Hello World!",
  description: "Intro to HTML and Web Concepts",
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
    BrowserServerChat1,
    TradeoffsOfServerImages,
    BrowserServerChat2,
    TradeoffsOfDirections,
    HTMLDef,
    TradeoffsOfHTML,
    XMLSlide,
    OutlineToHtml,
    HtmlAsStructure,
    LetsCode,
    generateReferencesSlide(references),
  ],
  examples: [
    { code: textAndHeadings, title: "Text and Headings", language: "html" },
    { code: lists, title: "Lists", language: "html" },
    { code: media, title: "Media", language: "html" },
    { code: controls, title: "Controls", language: "html" },
    { code: tables, title: "Tables", language: "html" },
  ],
  lab: {
    slug: "intro-to-html",
    title: "Intro to HTML",
  },
  recording: {
    link: "https://youtu.be/si_2R0K5XkU",
    slideTimings: timings as AutomaticSlideRecording,
  },
  references,
};
