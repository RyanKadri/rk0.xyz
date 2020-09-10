import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";

export const TitleSlide = generateTitleSlide(`Responsive Design and Component Libraries`, "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Review Quiz 1",
    "Introduce Lab 2",
    "Goals of Responsive Design",
    "Responsiveness and Accessibility",
    "Approaches to Responsiveness",
    "Writing Responsive CSS",
    "Animation",
    "Using Component Libraries (Bootstrap and Material-UI)"
]);

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

export const FlexBox = generateContentSlide("Revisiting Display", [
    "Inline and block displays are tricky",
    "What if we want items to show up next to each other but also control their height?",
    "What if we want to display items in a column?",
    "Vertical centering?"
]);

export const EnterFlexbox = generateMessageSlide("Enter Flexbox!");

export const FlexboxOverview = generateContentSlide("Flexbox", [
    "Flexbox lets us create responsive designs",
    "Avoids need for percentages and calculations",
    "Centering, reordering, and spacing become easier and more declarative",
    "Mostly one-dimensional"
]);

export const FlexboxMissing = generateContentSlide("What is Flexbox Missing?", [
    "Since flexbox is 1 dimensional, overall page layout is still hard",
    "We may need to move elements around in the HTML to achieve an effect",
    "How do we drastically change the page layout based on the user's browser?"
]);

export const EnterGrid = generateMessageSlide("Enter Grid!");

export const GridOverview = generateContentSlide("CSS Grid", [
    "Allows for creating 2 dimensional layouts",
    "Does not require nesting",
    "Easier to rearrange"
]);

export const CombineItAll = generateMessageSlide("Let's combine it all together!");

export const References = generateReferencesSlide([
    { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
    { label: "Grid Garden", url: "https://codepip.com/games/grid-garden/" },
    { label: "Media Query Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" }
])