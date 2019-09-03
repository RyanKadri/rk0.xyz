import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../presenter-core/src/slides/generate-slide";

export const MainTitle = generateTitleSlide(`HTML + CSS: Keeping it "Classy"`, "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Quiz",
    "Sectioning Elements",
    "Using styles",
    "Composing a web page",
    "CSS Selectors",
    "Precedence / Ordering",
    "Debugging Styles"
]);

export const RecapSlide = generateContentSlide("Recap", [
    "Browser Responsibilities",
    { 
        text: "XML",
        children: [
            "Data Serialization",
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
    }
]);

export const ColorStyles = generateContentSlide("Styles: Color", [
    "color, background-color, border-color",
    "Colors can be described as named colors, hex colors, rgb(a), and hsl(a)",
    `Uses the concept of "additive colors"`
])

export const PageStructure = generateContentSlide("Web Page Structure", [
    "Pages load resources recursively",
    "Pages are split into reusable pieces",
    "Encourages sharing",
    "Easier to maintain",
    "Faster"
]);

export const CssFundamentalsDisplay = generateContentSlide("CSS Fundamentals: Display", [
    "Controls layout of items",
    "Use in combinations to achieve desired effects",
    "inline, block, inline-block",
    "flex, grid"
]);

export const LetsCodeCSS = generateMessageSlide("Let's Code!");

export const DevelopingTips = generateContentSlide("Developing", [
    "Fast feedback cycle",
    "Test locally",
    "Constantly reorganize (refactor)",
    "Learn the developer tools"
]);
