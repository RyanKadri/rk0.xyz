import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../presenter/app/slides/generate-slide";

export const MainTitle = generateTitleSlide("Web Design: Deeper Dive", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Recap",
    "Internet / Networking Concepts",
    "HTML / CSS Deeper Dive",
    "Set Up Laptops",
    "Set Up GitHub",
    "Publish a Website!"
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
            "Basic Elements"
        ]
    },
    {
        text: "CSS",
        children: [
            "Selectors",
            "Syntax"
        ]
    }
]);

export const HttpOverview = generateContentSlide("How do Browsers and Servers Talk?", [
    "Requests and Responses",
    "Initiated by Browser",
    "Named Resources",
    "Mostly Text-Based",
    "HTTP"
]);

export const NetworkOverview = generateContentSlide("How do Browsers and Servers Talk?", [
    "Names and Numbers",
    "Ports",
    "Standardized",
    "Controlled by International Groups"
]);

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

export const CssFundamentalsMisc = generateContentSlide("CSS Fundamentals: Assorted", [
    "color, background-color, border-color",
    "font-family, font-size, font-weight",
    "width, height, max-width, max-height",
    "border, border-radius"
]);

export const LetsCodeCSS = generateMessageSlide("Let's Code!");

export const DevelopingTips = generateContentSlide("Developing", [
    "Fast feedback cycle",
    "Test locally",
    "Constantly reorganize (refactor)",
    "Learn the developer tools"
]);

export const Hosting = generateContentSlide("Hosting", [
    "Static Hosting vs Dynamic App",
    "What level of control do we want?",
    "Are we secure?",
    "How much does this cost?"
]);