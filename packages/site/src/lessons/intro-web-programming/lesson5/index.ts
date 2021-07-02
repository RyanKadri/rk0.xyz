import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ArraysExample } from "./slides/arrays";
import { OperatorsTable } from "./slides/operators-table";
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
        simple.DataTypes,
        simple.VariablesExamples,
        simple.Operators,
        OperatorsTable,
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
    recording: {
        link: "https://youtu.be/_pUkwWgkgoA"
    },
    lab: {
        title: "Exploring Javascript",
        slug: "exploring-javascript",
        // LabView: ExploringJSLab // TODO - Fix this
    },
    references: simple.references
}