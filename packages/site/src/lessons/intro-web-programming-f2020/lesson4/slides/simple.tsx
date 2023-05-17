import { Link } from "@mui/material";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("CSS Frameworks and Intermediate CSS", "Ryan Kadri");

export const ConsistentStyling = generateContentSlide("Consistent Styling / Branding", [
  "CSS lets developers consistently style their site",
  "External styles make this a lot easier",
  "Break parts of your site's style into different files",
  "Some files can be shared and some might not be",
]);

export const BrandingExample = generateContentSlide("Branding Example", [
  "One possible setup includes:",
  {
    text: "Shared style sheet(s)",
    children: [
      "Default styles for all HTML elements",
      "Common classes for company shared components",
      "Choices about typography, spacing, colors, etc",
    ],
  },
  {
    text: "Application-Specific Sheets",
    children: ["Custom components", "Overriding the defaults where necessary"],
  },
]);

export const CSSPrecedence = generateContentSlide("CSS Precedence", [
  "For the most part, CSS all happens at the same time",
  "All selectors that apply to an element apply their styles",
  "What happens if two elements try to apply the same style?",
  "Need to apply specificity rules",
]);

export const CSSSpecificity = generateContentSlide("CSS Specificity", [
  "When two selectors try to apply the same style to an element, the more specific one wins",
  "Inline styles are the most specific because they are directly tied to an element",
  "IDs are next because they should only apply to one element",
  "Classes are next because they indicate a specific category of elements",
  "Tag selectors are next because they apply to all elements with a tag",
  "Count the number of each category above in a selector",
  "Sort according to the number of the most specific category and then break ties with the next",
]);

export const CSSSpecificityExceptions = generateContentSlide("CSS Specificity (Exceptions)", [
  "The specificity rules above have a couple additional notes:",
  "You can use !important on styles to immediately jump to the top of the specificty",
  "If all of the above tie, use document ordering",
  "pseudo-classes count as classes (except :not())",
]);

export const WhatArePseudoClasses = generateContentSlide("Wait. Pseudo-Classes?", [
  "Pseudo classes are like classes that are automatically applied based on certain conditions",
  <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
    https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
  </Link>,
]);

export const WhatIfYouWantEasyBranding = generateMessageSlide("What if you don't want to design your own styles?");

export const EnterCSSFrameworks = generateContentSlide("CSS Frameworks", [
  "Groups online maintain free, open-source styles for anyone to use",
  "Use a <link> tag (or more advanced methods) to include their CSS",
  "Use your own stylesheets to override their styles or add your own as needed",
  { text: "Common examples include:", children: ["Bootstrap", "MUI", "Water.css", "Many More"] },
]);

export const PositionStyle = generateContentSlide("CSS: Position", [
  "The position style property lets you detatch elements from the normal page position",
  "position: absolute - The element should be placed at a specific place on the page",
  'position: fixed - The element should "float" at a specific spot in the viewport',
  "position: relative - Position elements relative to this parent",
  "z-index - If elements overlap, which one is on top?",
]);

export const CssTransition = generateContentSlide("CSS: Transitions", [
  "CSS transitions let you handle simple animations",
  "Animates changes from one state to another",
  "Many properties can be animated",
  "transition: <property> <duration> <timing-function> <delay>",
]);

export const CssVisibility = generateContentSlide("CSS: Visibility", [
  {
    text: "There are a few common ways to make elements disappear",
    children: [
      "Remove it from the HTML",
      'display: none - "Like it was never even there"',
      'visibility: hidden - "Like it\'s still there but a ghost"',
    ],
  },
]);

export const references: Reference[] = [
  { label: "CSS Specificity", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" },
  {
    label: "Pseudo-Classes",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",
  },
  { label: "Specificity Calculator", url: "https://specificity.keegan.st/" },
  { label: "Bootstrap", url: "https://getbootstrap.com/" },
  { label: "MUI", url: "https://www.muicss.com/docs/v1/getting-started/introduction" },
  { label: "Water.css", url: "https://watercss.netlify.app/" },
  {
    label: "Code from this class",
    url: "https://github.com/RyanKadri/cis1052-fall2020-examples/tree/master/c4-css-frameworks",
  },
];
