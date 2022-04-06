import React from "react";
import { InlineCode } from "../../../../../presenter-core/src/slides/components/inline-code-mdx";
import { synCSS } from "../../../common/highlighting";
import { GlossaryItem } from "../../shared/glossary-page";

export const glossaryTerms: GlossaryItem[] = [
  {
    term: "CSS Selector",
    description: (
      <>
        The CSS Selector is the term in CSS before the block of styles. Selectors are used to say
        which element those styles apply to. Selectors use a special syntax to target one or more
        HTML elements based on some of their characteristics like tag name, class, id, attributes,
        etc. In the code below, <InlineCode>a .header</InlineCode> is the css selector
      </>
    ),
    moreInfo: [
      {
        type: "code",
        code: synCSS`
a .header { /* <--- This piece is the selector */
    color: green;
    font-size: 22px;
}`,
      },
    ],
  },
  {
    term: "@media queries",
    description: (
      <>
        Media queries allow you to apply blocks of CSS <em>only if</em> certain conditions are met.
        This condition can "query" different device characteristics like:
        <ul>
          <li>Device width / height</li>
          <li>Are you trying to print?</li>
          <li>Color quality of the screen</li>
        </ul>
        If these conditions are met, all CSS contained inside the @media query block will apply
      </>
    ),
    moreInfo: [
      {
        type: "code",
        code: synCSS`
@media (max-width: 500px) { /* <--- This is the media query */
    /* All of the following style blocks will apply if the screen is <= 500px */
    .special {
        color: red;
    }
    .boring {
        color: beige;
    }
}`,
      },
    ],
  },
  {
    term: "Flexbox",
    description: (
      <>
        The name for the CSS "<strong>Flex</strong>ible <strong>Box</strong> Module". Flexbox
        encompasses a number of CSS properties and styling options that allow users to create
        powerful one-dimensional layouts
      </>
    ),
    references: [
      {
        display: "MDN - Flexbox Explanation",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
      },
    ],
  },
];
