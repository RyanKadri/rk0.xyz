import { Presentation } from "../../../../../../../presenter-core/src/services/types";
import mediaQuery from "../../lesson2/examples/media-query.html";
import { MobileDesignLabView } from "../lab/responsive-design-lab";
import * as simple from "./simple-slides";

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
        { code: mediaQuery, title: "Media Query", language: "html" }
    ],
    lab: {
        title: "A Responsive Resume",
        slug: "responsive-resume",
        LabView: MobileDesignLabView
    }
}