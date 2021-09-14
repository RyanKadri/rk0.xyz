import React from "react";
import { InlineCode } from "../../../../../presenter-core/src/slides/components/inline-code-mdx";
import { synCSS } from "../../../common/highlighting";
import { GlossaryItem } from "../../shared/glossary-page";

export const glossaryTerms: GlossaryItem[] = [
    { 
        term: "CSS Selector", 
        description: 
<>The CSS Selector is the term in CSS before the block of styles. Selectors are used to say which element those styles apply to.
 Selectors use a special syntax to target one or more HTML elements based on some of their
 characteristics like tag name, class, id, attributes, etc. In the code below, <InlineCode>a .header</InlineCode> is the
 css selector</>,
        code: synCSS`
a .header { /* <--- This piece is the selector */
    color: green;
    font-size: 22px;
}`
    }
]