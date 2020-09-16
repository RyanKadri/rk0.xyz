import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ResponsiveResumeLab } from "./lab/responsive-resume-lab";
import { BrandingExample, ConsistentStyling, CSSPrecedence, CSSSpecificity, CSSSpecificityExceptions, CssTransition, CssVisibility, EnterCSSFrameworks, PositionStyle, References, TitleSlide, WhatArePseudoClasses, WhatIfYouWantEasyBranding } from "./slides/simple";
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
        References
    ],
    examples: [
        
    ],
    lab: {
        title: "Responsive Resume",
        slug: "responsive-resume",
        LabView: ResponsiveResumeLab
    },
    recording: undefined
}