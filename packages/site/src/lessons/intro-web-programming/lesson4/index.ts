import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import simpleJS from "./examples/simple-functions";
import { BrandingExample, ConsistentStyling, CSSPrecedence, CSSSpecificity, CSSSpecificityExceptions, CssTransition, CssVisibility, EnterCSSFrameworks, PositionStyle, references, TitleSlide, WhatArePseudoClasses, WhatIfYouWantEasyBranding } from "./slides/simple";
import { SpecificityComparison } from "./slides/specificity-calculator";

export const lesson4: Presentation = {
    title: "A little help from your friends",
    description: "Using CSS Frameworks",
    slug: "using-frameworks",
    slides: [
        TitleSlide,
        ConsistentStyling,
        BrandingExample,
        CSSPrecedence,
        CSSSpecificity,
        CSSSpecificityExceptions,
        WhatArePseudoClasses,
        SpecificityComparison,
        WhatIfYouWantEasyBranding,
        EnterCSSFrameworks,
        PositionStyle,
        CssTransition,
        CssVisibility,
        generateReferencesSlide(references)
    ],
    examples: [
        { 
            code: simpleJS, 
            title: "Some simple JS", 
             
            testCases: {
                addNumbers: [
                    { paramString: "1,2", expectedResult: "3" },
                    { paramString: "3,4", expectedResult: "7" }
                ]
            }
        }
    ],
    lab: {
        title: "Responsive Resume",
        slug: "responsive-resume",
        path: "./packages/site/src/lessons/intro-web-programming/lesson4/lab/responsive-resume.md"
    },
    recording: {
        link: "https://youtu.be/gUq_lTEMnIQ"
    },
    references
}