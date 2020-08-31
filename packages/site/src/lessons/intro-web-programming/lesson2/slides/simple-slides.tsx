import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";

export const MainTitle = generateTitleSlide(`HTML + CSS: Keeping it "Classy"`, "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Exploring Styles",
    "CSS Selectors",
    "Precedence / Ordering",
    "Debugging Styles"
]);

export const RecapSlide = generateContentSlide("Recap", [
    "Browser Responsibilities",
    { 
        text: "XML",
        children: [
            "Tags",
            "Attributes"
        ]
    },
    {
        text: "HTML",
        children: [
            "Basic Elements",
            "Declarative Language - Not a programming language",
            "HTML is for structure not style"
        ]
    }
]);

export const StyleConcepts = generateContentSlide("Style Concepts", [
    "Styles are applied to individual elements",
    "Some styles can be inherited",
    "Styles are declarative (like HTML)",
    "Styles can make (almost) any element look like (almost) any other",
    'Try to make your HTML as "correct" as possible and then apply styles to achieve your look'
]);

export const ColorStyles = generateContentSlide("Styles: Color", [
    "Colors show up everywhere (fonts, borders, backgrounds, outlines, etc)",
    "color, background-color, border-color",
    "Colors can be described as named colors, hex colors, rgb(a), and hsl(a), etc",
    `Uses the concept of "additive colors"`
]);

export const CssFundamentalsDisplay = generateContentSlide("CSS Fundamentals: Display", [
    `The "display" property controls have elements interact`,
    `First display values were "block" and "inline"`,
    `They organize the page like an article`,
    `Elements are in and out of "flow"`,
    `Later versions of CSS included flex, grid, and others`
]);

export const LetsGetStylish = generateMessageSlide("Let's get stylish!");

export const WhyCSS = generateMessageSlide("What's wrong with inline styles?");

export const ThinkingCSS = generateContentSlide("Why CSS?", [
    { text: "Inline styles are hard to...", children: [
        "Maintain",
        "Compose",
        "Read",
    ]},
    "CSS can be separated from HTML",
    `Allows for theming, branding, "skinning"`
]);

export const HowCSS = generateContentSlide("How CSS?", [
    "CSS lives separately from the document",
    `It uses "selectors" to target elements and apply styles`,
    { text: "CSS can conflict with itself", children: [
        "The most specific CSS wins",
        "The last evaluated CSS breaks ties",
    ]}
]);

export const Selectors = generateContentSlide("Selectors", [
    { text: "CSS can target elements based on: ", children: [
        "Tag",
        "Attribute",
        `"Position" in the HTML`,
        "Pseudo-elements"
    ]},
    "Any style can be applied to selected elements",
    "Selectors should be stable (no infinite loops)"
]);

export const LetsGetSelective = generateMessageSlide("Let's get selective!");

export const LinksAndLoading = generateContentSlide("External Style Sheets", [
    "<link> tags let you reference external CSS files and fonts",
    "This is nice for reusing styles and organizing code",
    "Need to consider document loading order"
]);

export const References = generateReferencesSlide([
    { label: "CSS Selector Target Practice", url: "https://flukeout.github.io/" },
    { label: "CSS Selector Cheat Sheet", url: "https://adam-marsden.co.uk/css-cheat-sheet" },
    { label: "Palette Builder", url: "https://material-ui.com/customization/color/#color-tool" },
    { label: "Weird CSS Named Colors", url: "https://www.impressivewebs.com/weird-css-color-names/" }
]);