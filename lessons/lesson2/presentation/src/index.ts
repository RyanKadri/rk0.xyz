import { Presentation } from "../../../../presenter/app/services/types";
import { CssBox } from "./slides/css-box";
import { Agenda, CssFundamentalsDisplay, CssFundamentalsMisc, DevelopingTips, Hosting, HttpOverview, LetsCodeCSS, MainTitle, NetworkOverview, PageStructure, RecapSlide } from "./slides/simple-slides";

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