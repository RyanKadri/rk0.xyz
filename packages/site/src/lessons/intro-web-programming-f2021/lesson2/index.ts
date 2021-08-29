import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import borders from "./examples/borders.html";
import colors from "./examples/colors.html";
import fonts from "./examples/fonts.html";
import position from "./examples/position.html";
import selectors from "./examples/selectors.html";
import spacing from "./examples/spacing.html";
import { Consistency } from "./slides/consistency-ruiner";
import { CssBox } from "./slides/css-box";
import { HexColors } from "./slides/hex-colors";
import { HslColors } from "./slides/hsl-colors";
import { NamedColors } from "./slides/named-colors";
import { RgbaColors } from "./slides/rgba-colors";
import { ColorStyles, DownsidesInline, ExampleTargeting, GoalSlide, HowCSS, InlineStyles, LetsGetStylish, LetsPractice, LinksAndLoading, MainTitle, RecapSlide, references, Selectors, StyleConcepts } from "./slides/simple-slides";
import { Sizes } from "./slides/sizes";

export const lesson2: Presentation = {
    title: `Keeping it "classy"`,
    description: "Styles and CSS",
    slug: "keeping-it-classy",
    slides: [
        MainTitle,
        RecapSlide,
        GoalSlide,
        Consistency,
        StyleConcepts,
        ExampleTargeting,
        HowCSS,
        LinksAndLoading,
        Selectors,
        LetsGetStylish,
        Sizes,
        ColorStyles,
        NamedColors,
        HexColors,
        RgbaColors,
        HslColors,
        CssBox,
        InlineStyles,
        DownsidesInline,
        LetsPractice,
        generateReferencesSlide(references)
    ],
    examples: [
        { code: selectors, title: "Simple Selectors", language: "html" },
        { code: colors, title: "Colors", language: "html" },
        { code: fonts, title: "Fonts", language: "html" },
        { code: borders, title: "Borders", language: "html" },
        { code: spacing, title: "Spacing", language: "html" },
        { code: position, title: "Position", language: "html" },
    ],
    references
}