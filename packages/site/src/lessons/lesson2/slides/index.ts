import { Presentation } from "../../../../../presenter-core/src";
import { CssBox } from "./css-box";
import { Agenda, CssFundamentalsDisplay, CssFundamentalsMisc, DevelopingTips, Hosting, HttpOverview, LetsCodeCSS, MainTitle, NetworkOverview, PageStructure, RecapSlide } from "./simple-slides";

export const lesson2: Presentation = {
    title: "Styling and Publishing",
    description: "Dig further into CSS and internet technologies",
    slides: [
        MainTitle,
        Agenda,
        RecapSlide,
        HttpOverview,
        NetworkOverview,
        PageStructure,
        CssBox,
        CssFundamentalsDisplay,
        CssFundamentalsMisc,
        LetsCodeCSS,
        DevelopingTips,
        Hosting
    ]
}