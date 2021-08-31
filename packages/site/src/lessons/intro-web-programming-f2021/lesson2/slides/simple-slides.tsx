import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synCSS, synHTML } from "../../../../common/highlighting";

export const MainTitle = generateTitleSlide(`Styling HTML with CSS`, "Ryan Kadri");

export const RecapSlide = generateContentSlide("Recap", [
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
            "HTML is for structure not style"
        ]
    },
    "Developer Tools"
]);

export const GoalSlide = generateMessageSlide("Goal: Making our websites pretty");

export const StyleConcepts = generateContentSlide("CSS Concepts", [
    "CSS connects styles to HTML",
    "Styles are applied at the HTML element level",
    'Styles can be "targeted" to multiple elements',
    { text: "Remember:", children: [
        "Styles can make (almost) any element look like (almost) any other",
        'Use the right HTML elements and style how you want'
    ]}
]);

export const ExampleTargeting = generateCodeSlide("Example CSS", [
    "To give all paragraphs green text"
], {
    code: synCSS`
p {
    color: green;
}`
})

export const HowCSS = generateContentSlide("How does CSS work?", [
    "CSS lives separately from the HTML elements",
    `It uses "selectors" to target elements and apply styles`,
    `Allows for theming, branding, "skinning"`,
    { text: "CSS can conflict with itself", children: [
        'The most "specific" CSS wins',
        "The last evaluated CSS breaks ties",
    ]}
]);

export const LinksAndLoading = generateContentSlide("Where does CSS live?", [
    <>CSS can live in a special <code>{ "<style>"}</code> element in your HTML file</>,
    "Nice for small, simple pages",
    "CSS can also live in a separate file",
    <><code>{"<link>"}</code> tags let you reference external CSS files and fonts</>,
    "This is nice for reusing styles and organizing code",
]);

export const Selectors = generateContentSlide("Selectors", [
    { text: "CSS can target elements based on: ", children: [
        "tag",
        "class",
        "id",
        "Other attribute(s)",
        `"Position" in the HTML`,
        "Pseudo-elements"
    ]}
]);

export const ColorStyles = generateContentSlide("Styles: Color", [
    "Colors show up everywhere (fonts, borders, backgrounds, outlines, etc)",
    "color, background-color, border-color",
    "Colors can be described as named colors, hex colors, rgb(a), and hsl(a), etc",
    `Uses the concept of "additive colors"`
]);

export const InlineStyles = generateCodeSlide("Inline Styles", [
    "Inline styles are another way to style elements",
    "Fast in a pinch but often a bad idea"
], {
    code: synHTML`
<p style="color: red; margin: 16px">
    This is a paragraph with inline styles
</p>`
})

export const DownsidesInline = generateContentSlide("What's wrong with inline styles?", [
    { text: "Inline styles are hard to...", children: [
        "Maintain - How many places do I need to change this?!",
        "Compose - Where are these styles coming from?!",
        "Read - My HTML is so messy!",
    ]},
]);

export const LetsPractice = generateMessageSlide("Let's practice!");

export const references: Reference[] = [
    { label: "CSS Selector Target Practice", url: "https://flukeout.github.io/" },
    { label: "CSS Selector Cheat Sheet", url: "https://adam-marsden.co.uk/css-cheat-sheet" },
    { label: "Palette Builder", url: "https://material-ui.com/customization/color/#color-tool" },
    { label: "Weird CSS Named Colors", url: "https://www.impressivewebs.com/weird-css-color-names/" }
];