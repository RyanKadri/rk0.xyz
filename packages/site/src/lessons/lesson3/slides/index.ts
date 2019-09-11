import { Presentation } from "../../../../../presenter-core/src/services/types";
import { bodyExample } from "../../../common/functional-utils";
import flexChildren from "../../lesson2/examples/flex-children.html";
import flexDirections from "../../lesson2/examples/flex-directions.html";
import mediaQuery from "../../lesson2/examples/media-query.html";
import * as simple from "./simple-slides";

export const lesson3Tagline = "Resize Doesn't Matter"

export const lesson3: Presentation = {
    title: "The Mainstream Media Queries",
    description: "Making your site work on (m)any devices",
    slug: "responsive-design",
    slides: [
        simple.TitleSlide,
        simple.Agenda,
        simple.GoalsOfResponsiveDesign,
        simple.GoalsOfResponsiveDesignMore,
        simple.HowToResponsive,
        simple.UseDifferentSite,
        simple.UseDifferentCode,
        simple.CompletelyResponsive,
        simple.ResponsiveIsHard,
        simple.MixMatchApproach,
        simple.FlexBox,
        simple.EnterFlexbox,
        simple.FlexboxOverview,
        simple.FlexboxMissing,
        simple.EnterGrid,
        simple.GridOverview,
        simple.HowToRearrange,
        simple.EnterMedia,
        simple.MediaQueries
    ],
    examples: [
        bodyExample("Flex Directions", flexDirections, `<style>div { border: solid 1px; margin: 8px } </style>`),
        bodyExample("Flex Children", flexChildren, `<style>div { border: solid 1px; margin: 8px } </style>`),
        { code: mediaQuery, title: "Media Query" }
    ]
}