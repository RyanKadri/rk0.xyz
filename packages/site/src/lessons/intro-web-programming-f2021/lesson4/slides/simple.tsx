import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMediaAssistSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synCSS, synHTML } from "../../../../common/highlighting";
import breakpoints from "./common-breakpoints.jpg";

export const TitleSlide = generateTitleSlide("Part 1: Responsive Design", "Ryan Kadri");

export const EnterMedia = generateMessageSlide("How do we make a web site that looks good on many devices?");

export const ResponsiveGoals = generateContentSlide("Responsiveness Goals (Small Screen)", [
    "All critical parts of the application should be usable",
    "The user should mostly not need to horizontally scroll. Vertical is fine",
    "Images should fit properly in the screen",
    { text: "Text should be readable", children: [
        "Fonts should not be too small",
        "Text should not get squished into small columns"
    ]}
]);

export const ResponsiveGoalsLarge = generateContentSlide("Responsiveness Goals (Large Screen)", [
    { text: "Text should be readable", children: [
        "Fonts should not be too small",
        "Text should not be in one massive line"
    ]},
    "The site should make use of the extra real-estate if possible",
    "Images should still look good. Not pixelated"
]);

export const ResponsivenessStrategies = generateContentSlide("Small-Screen Strategies", [
    { text: "Design for mobile first", children: [
        "Smartphones are really small. Don't assume things will fit",
        "Think about where important components go on a small screen",
        "It's hard to cram existing website components into a narrow screen",
    ] },
    "Try to use percentages where appropriate",
    <><code>max-width</code> is your friend</>,
]);

export const Breakpoints = generateMediaAssistSlide("Breakpoints", [
    "Breakpoints are device sizes where layouts change",
    "Often given as a width. Different per site",
    "Between the two sides, elements may appear, disappear, or get moved",
], <img src={ breakpoints.src } width="1000px" />);

export const MetaTag = generateCodeSlide("Responsive <meta> tag", [
    <>The <code>{"<meta>"}</code> tag is helpful for mobile layouts</>,
    "Tells the browser that you are opting into building a mobile site",
    "Without this tag, smartphones may try to show a scaled version of desktop sites",
], {
    code: synHTML`
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ...
    </head>
    <body>...</body>
</html>
    `
})

export const MediaQueries = generateContentSlide("Media Queries", [
    "Media queries apply styles based on the device displaying a page",
    "Often used with device width for responsive design",
    { text: "Can also query...", children: [
        "print vs screen vs other",
        "Color quality of the media",
        "Ambient light in the environment",
        "Much more"
    ]}
]);

export const MediaQueryExample = generateCodeSlide("Media Queries", [
    <>Media queries use an <code>@media</code> syntax</>,
    "Define the conditions which a block of CSS applies",
    "CSS inside a media query is NOT more specific"
], {
    code: synCSS`
.shy-div {
    display: none;
}
@media (max-width: 550px) {
    .shy-div {
        display: block;
    }
}
    `
})

export const ConsistentStyling = generateContentSlide("Consistent Styling / Branding", [
    "CSS lets developers consistently style their site",
    "External styles make this a lot easier",
    "Break parts of your site's style into different files",
    "Some files can be shared and some might not be",
]);

export const BrandingExample = generateContentSlide("Branding Example", [
    "One possible setup includes:",
    { text: "Shared style sheet(s)", children: [
        "Default styles for all HTML elements",
        "Common classes for company shared components",
        "Choices about typography, spacing, colors, etc"
    ]},
    { text: "Application-Specific Sheets", children: [
        "Custom components",
        "Overriding the defaults where necessary"
    ]}
]);

export const CSSPrecedence = generateContentSlide("CSS Precedence", [
    "For the most part, CSS all happens at the same time",
    'All selectors that apply to an element apply their styles',
    "What happens if two elements try to apply the same style?",
    "Need to apply specificity rules"
]);

export const CSSSpecificity = generateContentSlide("CSS Specificity", [
    "When two selectors try to apply the same style to an element, the more specific one wins",
    "Inline styles are the most specific because they are directly tied to an element",
    "IDs are next because they should only apply to one element",
    "Classes are next because they indicate a specific category of elements",
    "Tag selectors are next because they apply to all elements with a tag",
    "Count the number of each category above in a selector",
    "Sort according to the number of the most specific category and then break ties with the next"
]);

export const CSSSpecificityExceptions = generateContentSlide("CSS Specificity (Exceptions)", [
    "The specificity rules above have a couple additional notes:",
    "You can use !important on styles to immediately jump to the top of the specificty",
    'If all of the above tie, use document ordering',
    "pseudo-classes count as classes (except :not())"
]);

export const WhatArePseudoClasses = generateContentSlide("Wait. Pseudo-Classes?", [
    "Pseudo classes are like classes that are automatically applied based on certain conditions",
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes</Link>
])

export const WhatIfYouWantEasyBranding = generateMessageSlide(
    "What if you don't want to design your own styles?"
);

export const EnterCSSFrameworks = generateContentSlide("CSS Frameworks", [
    "Groups online maintain free, open-source styles for anyone to use",
    "Use a <link> tag (or more advanced methods) to include their CSS",
    "Use your own stylesheets to override their styles or add your own as needed",
    { text: "Common examples include:", children: [
        "Bootstrap",
        "MUI",
        "Water.css",
        "Many More"
    ]}
]);

export const PositionStyle = generateContentSlide("CSS: Position", [
    "The position style property lets you detatch elements from the normal page position",
    "position: absolute - The element should be placed at a specific place on the page",
    'position: fixed - The element should "float" at a specific spot in the viewport',
    "position: relative - Position elements relative to this parent",
    "z-index - If elements overlap, which one is on top?"
]);

export const CssTransition = generateContentSlide("CSS: Transitions", [
    "CSS transitions let you handle simple animations",
    "Animates changes from one state to another",
    "Many properties can be animated",
    "transition: <property> <duration> <timing-function> <delay>"
]);

export const CssVisibility = generateContentSlide("CSS: Visibility", [
    { text: "There are a few common ways to make elements disappear", children: [
        "Remove it from the HTML",
        'display: none - "Like it was never even there"',
        'visibility: hidden - "Like it\'s still there but a ghost"',
    ] }
]);

export const references: Reference[] = [
    { label: "CSS Specificity", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" },
    { label: "Pseudo-Classes", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" },
    { label: "Specificity Calculator", url: "https://specificity.keegan.st/" },
    { label: "Bootstrap", url: "https://getbootstrap.com/" },
    { label: "MUI", url: "https://www.muicss.com/docs/v1/getting-started/introduction" },
    { label: "Water.css", url: "https://watercss.netlify.app/" },
    { label: "Code from this class", url: "https://github.com/RyanKadri/cis1052-fall2020-examples/tree/master/c4-css-frameworks" }
];