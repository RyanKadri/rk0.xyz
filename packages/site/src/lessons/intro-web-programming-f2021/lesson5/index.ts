import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ArraysExample } from "./slides/arrays";
import { AssignmentOperators, ComparisonOperators, LogicalOperators, MathOperators } from "./slides/operators";
import * as simple from "./slides/simple";

export const lesson5: Presentation = {
    title: `Two "Truthy"s and a Lie`,
    description: "Introduction to Javascript",
    slug: "intro-to-js",
    slides: [
        simple.TitleSlide,
        simple.JavascriptVsCSS,
        simple.WhatIsAProgrammingLanguage,
        simple.JavaScriptProgrammingType,
        simple.LongestNameProblem,
        simple.WhatTypesOfData,
        simple.DataTypes,
        simple.VariablesExamples,
        simple.Operators,
        MathOperators,
        AssignmentOperators,
        ComparisonOperators,
        LogicalOperators,
        simple.ConditionalExample,
        simple.WhileLoops,
        simple.ForLoops,
        simple.FunctionsExample,
        ArraysExample,
        simple.Objects,
        simple.StringsPart2,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    references: simple.references,
    recording: {
        link: "https://youtu.be/YJ7uTWvlzZ8"
    }
}