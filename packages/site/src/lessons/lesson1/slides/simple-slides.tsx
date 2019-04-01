import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../presenter-core/src";

export const TitleSlide = generateTitleSlide("Intro to Web Design", "Ryan Kadri");

export const WhatIsCourse = generateContentSlide("What is this course?", [
    "For Beginners",
    "Not an Overview",
    "Bi Weekly",
    "Interactive",
    "Flexible",
    "Project-Driven?"
]);

export const WhatIsWebsite = generateContentSlide("What is a Web Site?", [
    "News / Blogs / Recipes",
    "Search",
    "Apps (Email, Drive, iCloud)",
    "Social Network",
    "Video / Media Player",
    "Games",
    "Visualization"
]);

export const WhatIsBrowser = generateContentSlide("What is a Browser?", [
    "Tabs",
    "Bookmarks",
    "Password Manager",
    "Search",
    "History",
    "Settings",
    "Suggestions",
    "Much more..."
]);

export const WhatIsBrowserPart2 = generateContentSlide("What is a Browser?", [
    "Rendering Engine",
    "Network-aware",
    "Based on shared standards",
    "Secure",
    "Remote Client ",
]);

export const HTMLDef = generateContentSlide("HTML", [
    '“Structure” of a web site / application',
    'Hierarchical',
    'Uses publishing terminology',
    'Based on XML',
    'Not a programming language',
]);

export const LetsCode = generateMessageSlide("Let's Code!")

export const CSSInfo = generateContentSlide("CSS", [
    "Adds styles to a web app / site",
    "Identifies elements using selectors",
    "More specific rules override less specific rules",
    "Not a programming language",
]);