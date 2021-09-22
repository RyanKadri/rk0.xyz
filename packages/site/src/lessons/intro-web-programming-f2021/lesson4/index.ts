import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import basic from "./examples/basic.html";
import bootstrap from "./examples/bootstrap.html";
import mui from "./examples/mui.html";
import paper from "./examples/paper.html";
import transitions from "./examples/transitions.html";
import water from "./examples/water.html";
import { Bootstrap, BrandingExample, Breakpoints, ClassAttribute, ConsistentStyling, CssFrameworksTitle, CssTransition, CssVisibility, EnterCSSFrameworks, EnterMedia, MediaQueries, MediaQueryExample, MetaTag, MiscCSS, references, ResponsiveGoals, ResponsiveGoalsLarge, ResponsivenessStrategies, ReviewAttributes, TitleSlide, WaterCSS, WhatArePseudoClasses } from "./slides/simple";

export const lesson4: Presentation = {
    title: "A little help from your friends",
    description: "Using CSS Frameworks",
    slug: "using-frameworks",
    slides: [
        TitleSlide,
        EnterMedia,
        ResponsiveGoals,
        ResponsiveGoalsLarge,
        ResponsivenessStrategies,
        Breakpoints,
        MediaQueries,
        MediaQueryExample,
        MetaTag,
        CssFrameworksTitle,
        ReviewAttributes,
        ClassAttribute,
        ConsistentStyling,
        BrandingExample,
        EnterCSSFrameworks,
        WaterCSS,
        Bootstrap,
        MiscCSS,
        WhatArePseudoClasses,
        CssTransition,
        CssVisibility,
        generateReferencesSlide(references)
    ],
    examples: [
        { title: "Plain HTML Page", language: "html", code: basic },
        { title: "Plain HTML + Water.css", language: "html", code: water },
        { title: "Paper.css", language: "html", code: paper },
        { title: "Bootstrap", language: "html", code: bootstrap },
        { title: "Materialize", language: "html", code: mui },
        { title: "CSS Transitions", language: "html", code: transitions }
    ],
    lab: {
        title: "Responsive Resume",
        slug: "responsive-resume",
    },
    recording: {
        link: "https://youtu.be/tRwVbgdCurc",
    },
    references
}