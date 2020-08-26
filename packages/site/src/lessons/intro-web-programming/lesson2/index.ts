import { Presentation } from "../../../../../presenter-core/src/services/types";
import { bodyExample } from "../../../common/functional-utils";
import borders from "./examples/borders.html";
import colors from "./examples/colors.html";
import display1 from "./examples/display1.html";
import flexChildren from "./examples/flex-children.html";
import flexDirections from "./examples/flex-directions.html";
import fonts from "./examples/fonts.html";
import mediaQuery from "./examples/media-query.html";
import position from "./examples/position.html";
import spacing from "./examples/spacing.html";
import { HtmlCssLabView } from "./lab/html-css-lab";
import { CssBox } from "./slides/css-box";
import { HexColors } from "./slides/hex-colors";
import { HslColors } from "./slides/hsl-colors";
import { NamedColors } from "./slides/named-colors";
import { References } from "./slides/references";
import { RgbaColors } from "./slides/rgba-colors";
import { Agenda, ColorStyles, CssFundamentalsDisplay, HowCSS, LetsGetSelective, LetsGetStylish, LinksAndLoading, MainTitle, RecapSlide, Selectors, StyleConcepts, ThinkingCSS, WhyCSS } from "./slides/simple-slides";

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
        { code: colors, title: "Colors" },
        { code: fonts, title: "Fonts" },
        bodyExample("Borders", borders, `<style>div { padding: 8px; margin: 16px; }</style>`),
        bodyExample("Spacing", spacing, `<style> div { display: inline-block; border: solid 1px; } </style>`),
        bodyExample("Position", position,  `<style>div{ border: solid 2px green }</style>`),
        { code: display1, title: "Display (Part One)" },
        bodyExample("Flex Directions", flexDirections, `<style>div { border: solid 1px; margin: 8px } </style>`),
        bodyExample("Flex Children", flexChildren, `<style>div { border: solid 1px; margin: 8px } </style>`),
        { code: mediaQuery, title: "Media Query" }
    ],
    lab: {
        title: "HTML + CSS Basics",
        slug: "html-css-basics",
        LabView: HtmlCssLabView
    }
}