import { Presentation } from "../../../../../presenter-core/src/services/types";
import { bodyExample } from "../../../common/functional-utils";
import { generateReferencesSlide } from "../../shared/references-slide";
import flexChildren from "../lesson2/examples/flex-children.html";
import flexDirections from "../lesson2/examples/flex-directions.html";
import mediaQuery from "../lesson2/examples/media-query.html";
import { HtmlCssLabView } from "./lab/html-css-lab";
import { DetectBrowser } from "./slides/DetectBrowser";
import { ResponsiveCSS } from "./slides/ResponsiveCss";
import * as simple from "./slides/simple-slides";
import { UseMultipleSites } from "./slides/UsingMultipleSites";

export const lesson3: Presentation = {
    title: "The Mainstream Media Queries",
    description: "Making your site work on (m)any devices",
    slug: "responsive-design",
    slides: [
        simple.TitleSlide,
        simple.Agenda,
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
        simple.FlexBox,
        simple.EnterFlexbox,
        simple.FlexboxOverview,
        simple.FlexboxMissing,
        simple.EnterGrid,
        simple.GridOverview,
        simple.CombineItAll,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        bodyExample("Flex Directions", flexDirections, `<style>div { border: solid 1px; margin: 8px } </style>`),
        bodyExample("Flex Children", flexChildren, `<style>div { border: solid 1px; margin: 8px } </style>`),
        { code: mediaQuery, title: "Media Query" }
    ],
    lab: {
        title: "HTML + CSS Basics",
        slug: "html-css-basics",
        LabView: HtmlCssLabView
    },
    recording: {
        link: "https://youtu.be/T91H_N5iuWg"
    },
    references: simple.references
}