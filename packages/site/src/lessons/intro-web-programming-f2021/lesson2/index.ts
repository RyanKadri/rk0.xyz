import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import borders from "./examples/borders.html";
import colors from "./examples/colors.html";
import display1 from "./examples/display1.html";
import flexChildren from "./examples/flex-children.html";
import flexDirections from "./examples/flex-directions.html";
import fonts from "./examples/fonts.html";
import mediaQuery from "./examples/media-query.html";
import position from "./examples/position.html";
import spacing from "./examples/spacing.html";
import { CssBox } from "./slides/css-box";
import { HexColors } from "./slides/hex-colors";
import { HslColors } from "./slides/hsl-colors";
import { NamedColors } from "./slides/named-colors";
import { RgbaColors } from "./slides/rgba-colors";
import { Agenda, ColorStyles, CssFundamentalsDisplay, HowCSS, LetsGetSelective, LetsGetStylish, LinksAndLoading, MainTitle, RecapSlide, references, Selectors, StyleConcepts, ThinkingCSS, WhyCSS } from "./slides/simple-slides";
import { Sizes } from "./slides/sizes";

export const lesson2: Presentation = {
    title: `Keeping it "classy"`,
    description: "Styles and CSS",
    slug: "keeping-it-classy",
    slides: [
        MainTitle,
        RecapSlide,
        Agenda,
        StyleConcepts,
        Sizes,
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
        generateReferencesSlide(references)
    ],
    examples: [
        { code: colors, title: "Colors", language: "html" },
        { code: fonts, title: "Fonts", language: "html" },
        { code: borders, title: "Borders", language: "html" },
        { code: spacing, title: "Spacing", language: "html" },
        { code: position, title: "Position", language: "html" },
        { code: display1, title: "Display (Part One)", language: "html" },
        { code: flexDirections, title: "Flex Directions", language: "html" },
        { code: flexChildren, title: "Flex Children", language: "html" },
        { code: mediaQuery, title: "Media Query", language: "html" }
    ],
    references
}