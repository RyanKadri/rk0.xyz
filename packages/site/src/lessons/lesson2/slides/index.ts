import { Presentation } from "../../../../../presenter-core/src/services/types";
import { CssBox } from "./css-box";
import { Agenda, CssFundamentalsDisplay, CssFundamentalsMisc, DevelopingTips, Hosting, HttpOverview, LetsCodeCSS, MainTitle, NetworkOverview, PageStructure, RecapSlide } from "./simple-slides";

export const lesson2: Presentation = {
    title: `Keeping it "classy"`,
    description: "Deeper dive into HTML. Introducing CSS and styles",
    slug: "css-and-html",
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
    ],
    examples: []
}