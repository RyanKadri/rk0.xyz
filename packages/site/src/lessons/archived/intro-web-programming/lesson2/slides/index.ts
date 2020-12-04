import { Presentation } from "../../../../../../../presenter-core/src/services/types";
import colors from "../examples/colors.html";
import display1 from "../examples/display1.html";
import fonts from "../examples/fonts.html";
import mediaQuery from "../examples/media-query.html";
import { HtmlCssLabView } from "../lab/html-css-lab";
import { CssBox } from "./css-box";
import { HexColors } from "./hex-colors";
import { HslColors } from "./hsl-colors";
import { NamedColors } from "./named-colors";
import { References } from "./references";
import { RgbaColors } from "./rgba-colors";
import { Agenda, ColorStyles, CssFundamentalsDisplay, HowCSS, LetsGetSelective, LetsGetStylish, LinksAndLoading, MainTitle, RecapSlide, Selectors, StyleConcepts, ThinkingCSS, WhyCSS } from "./simple-slides";

export const lesson2: Presentation = {
    title: `Keeping it "classy"`,
    description: "Deeper dive into HTML. Introducing CSS and styles",
    slug: "css-and-html",
    slides: [
        MainTitle,
        Agenda,
        RecapSlide,
        StyleConcepts,
        ColorStyles,
        NamedColors,
        HexColors,
        RgbaColors,
        HslColors,
        CssBox,
        CssFundamentalsDisplay,
        LetsGetStylish,
        WhyCSS,
        ThinkingCSS,
        HowCSS,
        Selectors,
        LetsGetSelective,
        LinksAndLoading,
        References
    ],
    examples: [
        { code: colors, title: "Colors", language: "html" },
        { code: fonts, title: "Fonts", language: "html" },
        { code: display1, title: "Display (Part One)", language: "html" },
        { code: mediaQuery, title: "Media Query", language: "html" }
    ],
    lab: {
        title: "HTML + CSS Basics",
        slug: "html-css-basics",
        LabView: HtmlCssLabView
    }
}