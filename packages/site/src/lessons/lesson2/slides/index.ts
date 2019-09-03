import { Presentation } from "../../../../../presenter-core/src/services/types";
import { bodyExample } from "../../../common/functional-utils";
import borders from "../examples/borders.html";
import colors from "../examples/colors.html";
import display1 from "../examples/display1.html";
import flexChildren from "../examples/flex-children.html";
import flexDirections from "../examples/flex-directions.html";
import fonts from "../examples/fonts.html";
import spacing from "../examples/spacing.html";
import { CssBox } from "./css-box";
import { NamedColors } from "./named-colors";
import { Agenda, ColorStyles, CssFundamentalsDisplay, LetsCodeCSS, MainTitle, RecapSlide } from "./simple-slides";

export const lesson2: Presentation = {
    title: `Keeping it "classy"`,
    description: "Deeper dive into HTML. Introducing CSS and styles",
    slug: "css-and-html",
    slides: [
        MainTitle,
        Agenda,
        RecapSlide,
        ColorStyles,
        NamedColors,
        CssBox,
        CssFundamentalsDisplay,
        LetsCodeCSS,
    ],
    examples: [
        { code: colors, title: "Colors" },
        { code: fonts, title: "Fonts" },
        bodyExample("Borders", borders, `<style>div { padding: 8px; margin: 16px; }</style>`),
        bodyExample("Spacing", spacing, `<style> div { display: inline-block; border: solid 1px; } </style>`),
        { code: display1, title: "Display (Part One)" },
        bodyExample("Flex Directions", flexDirections, `<style>div { border: solid 1px; margin: 8px } </style>`),
        bodyExample("Flex Children", flexChildren, `<style>div { border: solid 1px; margin: 8px } </style>`)
    ]
}