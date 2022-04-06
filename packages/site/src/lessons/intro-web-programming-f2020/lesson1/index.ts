import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import controls from "./examples/controls.html";
import lists from "./examples/lists.html";
import media from "./examples/media.html";
import tables from "./examples/tables.html";
import textAndHeadings from "./examples/textAndHeadings.html";
import { OutlineToHtml } from "./slides/outline-to-html";
import { SimpleBrowserSlide } from "./slides/simple-browser";
import { SimpleMonitorSlide } from "./slides/simple-monitor";
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
  WhatIsBrowser,
  WhatIsBrowserPart2,
  WhatIsWebsite,
  XMLSlide,
} from "./slides/simple-slides";

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
    link: "https://youtu.be/nBgOvwrMpuU",
  },
  references,
};
