import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMediaAssistSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synCSS, synHTML } from "../../../../common/highlighting";
import breakpoints from "./common-breakpoints.jpg";

export const TitleSlide = generateTitleSlide("Part 1: Responsive Design", "Ryan Kadri");

export const EnterMedia = generateMessageSlide(
  "How do we make a web site that looks good on many devices?"
);

export const ResponsiveGoals = generateContentSlide("Responsiveness Goals (Small Screen)", [
  "All critical parts of the application should be usable",
  "The user should mostly not need to horizontally scroll. Vertical is fine",
  "Images should fit properly in the screen",
  {
    text: "Text should be readable",
    children: ["Fonts should not be too small", "Text should not get squished into small columns"],
  },
]);

export const ResponsiveGoalsLarge = generateContentSlide("Responsiveness Goals (Large Screen)", [
  {
    text: "Text should be readable",
    children: ["Fonts should not be too small", "Text should not be in one massive line"],
  },
  "The site should make use of the extra real-estate if possible",
  "Images should still look good. Not pixelated",
]);

export const ResponsivenessStrategies = generateContentSlide("Small-Screen Strategies", [
  {
    text: "Design for mobile first",
    children: [
      "Smartphones are really small. Don't assume things will fit",
      "Think about where important components go on a small screen",
      "It's hard to cram existing website components into a narrow screen",
    ],
  },
  "Try to use percentages where appropriate",
  <>
    <code>max-width</code> is your friend
  </>,
]);

export const Breakpoints = generateMediaAssistSlide(
  "Breakpoints",
  [
    "Breakpoints are device sizes where layouts change",
    "Often given as a width. Different per site",
    "Between the two sides, elements may appear, disappear, or get moved",
  ],
  <img src={breakpoints.src} width="1000px" />
);

export const MetaTag = generateCodeSlide(
  "Responsive <meta> tag",
  [
    <>
      The <code>{"<meta>"}</code> tag is helpful for mobile layouts
    </>,
    "Tells the browser that you are opting into building a mobile site",
    "Without this tag, smartphones may try to show a scaled version of desktop sites",
  ],
  {
    code: synHTML`
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ...
    </head>
    <body>...</body>
</html>
    `,
  }
);

export const MediaQueries = generateContentSlide("Media Queries", [
  "Media queries apply styles based on the device displaying a page",
  "Often used with device width for responsive design",
  {
    text: "Can also query...",
    children: [
      "print vs screen vs other",
      "Color quality of the media",
      "Ambient light in the environment",
      "Much more",
    ],
  },
]);

export const MediaQueryExample = generateCodeSlide(
  "Media Queries",
  [
    <>
      Media queries use an <code>@media</code> syntax
    </>,
    "Define the conditions which a block of CSS applies",
    "CSS inside a media query is NOT more specific",
  ],
  {
    code: synCSS`
.shy-div {
    display: none;
}
@media (max-width: 550px) {
    .shy-div {
        display: block;
    }
}`,
  }
);

export const CssFrameworksTitle = generateTitleSlide("Part 2: CSS Frameworks", "Ryan Kadri");

export const ReviewAttributes = generateContentSlide("HTML Attributes", [
  "HTML Attributes provide metadata about an element",
  {
    text: "Some attributes define behavior",
    children: [
      <>
        The <code>src</code> attribute in <code>{'<img src="abc.png">'}</code>
      </>,
      <>
        The <code>href</code> attribute in <code>{'<a href="my-page.html">'}</code>
      </>,
      <>
        The <code>start</code> attribute in <code>{'<ol start="5">'}</code>
      </>,
    ],
  },
  {
    text: "Others give meaning to elements",
    children: [
      <>
        The <code>id</code> attribute identifies an element to be referenced elsewhere
      </>,
      <>
        The <code>class</code> attribute marks elements as part of a special category
      </>,
    ],
  },
]);

export const ClassAttribute = generateContentSlide('The "class" attribute', [
  <>
    The <code>class</code> attribute marks elements as part of a special category
  </>,
  "Even though there are a lot of HTML elements, you can't always find what you need",
  "Classes let you organize your site using terms that you define",
  "CSS can then target those classes and apply styles",
]);

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

export const EnterCSSFrameworks = generateContentSlide("CSS Frameworks", [
  "Groups online maintain free, open-source styles for anyone to use",
  <>
    Use a <code>{"<link>"}</code> tag (or more advanced methods) to include their CSS
  </>,
  "Use your own stylesheets to override their styles or add your own as needed",
  {
    text: "Common examples include:",
    children: ["Water.css", "Bootstrap", "Materialize", "Many More"],
  },
]);

export const WaterCSS = generateContentSlide("Water.css", [
  "Water.css is a very minimal CSS framework",
  "Includes a bunch of default styles for elements",
  "Include it on your page and make things look better",
  "Just write normal (correct) HTML",
  "Not a lot of custom work needed",
  <>
    <Link href="https://watercss.kognise.dev/">Documentation Site</Link>
  </>,
]);

export const Bootstrap = generateContentSlide("Bootstrap", [
  "Bootstrap is more more customizable but more work to learn",
  'Provides a number of more complex "components"',
  "You need to opt into many styles by adding classes",
  "Bootstrap defines the styles for certain classes and you apply them",
  "Comes with a customizable layout system",
  <>
    <Link href="https://getbootstrap.com/">Documentation Site</Link>
  </>,
]);

export const MiscCSS = generateTitleSlide("Part 3: Miscellaneous CSS", "Ryan Kadri");

export const WhatArePseudoClasses = generateCodeSlide(
  "Pseudo-Classes",
  [
    "Pseudo classes are automatically applied based on certain conditions",
    <>
      <code>:hover</code> applies when an item is being hovered
    </>,
    <>
      <code>:focus</code> applies to inputs when you are using them
    </>,
    <>
      <code>:visited</code> applies to links that have been visited
    </>,
    "Pseudo classes behave like classes for specificity",
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
      https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
    </Link>,
  ],
  {
    code: synCSS`
a:visited {
    color: green; /* Visited links shall henceforth be green */
}
    `,
  }
);

export const CssTransition = generateContentSlide("CSS: Transitions", [
  "CSS transitions let you handle simple animations",
  "Animates changes from one state to another",
  "Many properties can be animated",
  <>
    <code>{"transition: <property> <duration> <timing-function> <delay>"}</code>
  </>,
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
