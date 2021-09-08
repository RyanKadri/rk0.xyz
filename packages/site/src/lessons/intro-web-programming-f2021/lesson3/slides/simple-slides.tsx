import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMediaAssistSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synCSS } from "../../../../common/highlighting";
import flowDiagram from "./mdn-horizontal-flow.png";

export const TitleSlide = generateTitleSlide(`Website Layout`, "Ryan Kadri");

export const Goal = generateMessageSlide(
    "We've covered colors, border, margins, etc. How do we actually say where things go?"
);

export const WhatAboutPosition = generateContentSlide('What about "position"?', [
    <>The CSS <code>position</code> property can control where elements go</>,
    <><code>position</code> focuses on exactly where individual things go</>,
    { text: "Good for placing layout-independent components", children: [
        "Things like buttons, chat widgets, dialogs"
    ]},
    "Bad for defining an entire website -- hard to maintain",
]);

export const DisplayProp = generateContentSlide("CSS: display", [
    <>The <code>display</code> property of elements controls how they fit into the page</>,
    "It also controls how an element's children are positioned",
    <>More natural and flexible than <code>position</code></>,
    "Outer and inner display modes exist",
    "Outer display modes control where element goes in parent",
    "Inner display modes control where children go"
]);

export const Flow = generateMediaAssistSlide("Block Formatting", [
    "Simplest display mode (IMO)",
    "HTML pages naturally flow a lot like a standard written document",
    "Text progresses left to right (in English)",
    "Blocks of content progress top to bottom on separate lines"
], <img src={ flowDiagram.src } width={ 700 } />);

export const BlockVsInline = generateContentSlide("Display Block / Inline", [
    <>Elements with <code>display: inline</code> will show up in the same line</>,
    <>Elements with <code>display: block</code> get their own lines</>,
    <>HTML Paragraphs are <code>block</code> by default</>,
    <>HTML Spans are <code>line</code></>,
    <>Larger elements like lists and tables are <code>block</code></>,
    "These are only the defaults and can be overwritten"
]);

export const FlexboxOverview = generateContentSlide("Flexbox", [
    <>An inner display property. Controls the layout of <strong>children</strong></>,
    "Mostly used for one-dimensional sub-layouts",
    "Avoids need for percentages and calculations",
    "Centering, reordering, and spacing become easier",
    <><code>display: flex</code></>,
]);

export const FlexboxPractice = generateMessageSlide(
    <Link href="https://flexboxfroggy.com/" target="_blank" variant="h4">Let's practice!</Link>
);

export const FlexboxMissing = generateContentSlide("What is Flexbox Missing?", [
    "Since flexbox is 1 dimensional, overall page layout is still hard",
    "We may need to move elements around in the HTML to achieve an effect",
    "How do we drastically change the page layout based on the user's browser?",
]);

export const GridOverview = generateContentSlide("CSS Grid", [
    "Allows for creating 2 dimensional layouts",
    "Lets you name pieces of your application and position them by name",
    "Easier to rearrange components",
    "Often a but more complex and more work"
]);

export const GridPractice = generateMessageSlide(
    <Link href="https://codepip.com/games/grid-garden/" target="_blank" variant="h4">Let's practice!</Link>
);

export const CombineItAll = generateMessageSlide("Let's combine it all together!");

export const ResponsiveDesignTitle = generateTitleSlide("Website Layout - Part 2", "Responsive Design")

export const GoalsOfResponsiveDesign = generateContentSlide("Goals of Responsive Design", [
    "Make the site work on smartphones",
    "Profit?"
]);

export const GoalsOfResponsiveDesignMore = generateContentSlide("Goals of Responsive Design", [
    "Work on small screens",
    "Work on huge screens",
    "Work on a watch?",
    "Work in different browsers",
    "Add features progressively"
]);

export const AccessibilityAndResponsiveness = generateContentSlide("Responsiveness and Accessibility", [
    "Responsiveness helps with accessibility",
    "Device width is not the only consideration",
    "Some of the same techniques used in responsive design can enable accessibility improvements"
]);

export const HowToResponsive = generateMessageSlide("How do we make a site look good on multiple devices?")

export const ResponsiveIsHard = generateMessageSlide("But responsive design is hard!");

export const WhyResponsiveHard = generateContentSlide("Why?", [
    "Not all features make sense in a mobile context",
    "Not all browsers are created equal (cough. IE)",
    "Adaptive code can be more complex than special-purpose code",
    "Code needs to be tested on a broader array of devices. Bugs can creep in"
]);

export const MixMatchApproach = generateContentSlide("Approach 4: Mix and Match", [
    "Most sites combine approaches",
    "Make components adaptable if possible",
    "Send back basic code for older browsers",
    "Send back simpler UI for mobile "
]);

export const EnterMedia = generateMessageSlide("How do we react to a user's browser?");

export const MediaQueries = generateContentSlide("Media Queries", [
    "Media queries apply styles based on the media used to display a page",
    "Often used with device width/height for responsive design",
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

export const references: Reference[] = [
    { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
    { label: "Grid Garden", url: "https://codepip.com/games/grid-garden/" },
    { label: "Media Query Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" }
]