import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ExploringJSLab } from "./lab/exploring-js";
import { ConditionalsExample } from "./slides/conditionals";
import { ForLoops } from "./slides/for-loops";
import { FunctionsExample } from "./slides/functions";
import { Operators } from "./slides/operators";
import { OperatorsTable } from "./slides/operators-table";
import * as simple from "./slides/simple";
import { VariablesExamples } from "./slides/variables";
import { WhileLoops } from "./slides/while-loops";

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
        VariablesExamples,
        Operators,
        OperatorsTable,
        ConditionalsExample,
        WhileLoops,
        ForLoops,
        FunctionsExample
    ],
    examples: [
        
    ],
    recording: undefined,
    lab: {
        title: "Exploring Javascript",
        slug: "exploring-javascript",
        LabView: ExploringJSLab
    }
}