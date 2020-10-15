import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ResponsiveResumeLab } from "./lab/responsive-resume-lab";
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
        
    ],
    lab: {
        title: "Responsive Resume",
        slug: "responsive-resume",
        LabView: ResponsiveResumeLab
    },
    recording: {
        link: "https://temple.zoom.us/rec/share/HKJpNfKSFFYVvgduROt0JmFJcZIdsxSiliZ6wKN9roHkbGNEsp2Hzl6UxfQjwWo0.Fj95pJBmjLUm3rkf"
    },
    references
}