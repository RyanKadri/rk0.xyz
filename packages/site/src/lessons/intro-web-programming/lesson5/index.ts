import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ExploringJSLab } from "./lab/exploring-js";
import { ConditionalsExample } from "./slides/conditionals";
import { ForLoops } from "./slides/for-loops";
import { FunctionsExample } from "./slides/functions";
import { Operators } from "./slides/operators";
import * as simple from "./slides/simple";
import { VariablesExamples } from "./slides/variables";
import { WhileLoops } from "./slides/while-loops";

export const lesson4: Presentation = {
    title: `Two "Truthy"s and a Lie`,
    description: "Introduction to Javascript",
    slug: "intro-to-js",
    slides: [
        simple.TitleSlide,
        simple.WhatIsAProgrammingLanguage,
        simple.HowDoesComputerWorkParts,
        simple.HowDoesAComputerWorkScience,
        simple.ComputerConstraints,
        simple.WhyConstraintsImportant,
        simple.EnterJavascript,
        simple.WhyJavascript,
        simple.LetsGetStarted,
        VariablesExamples,
        Operators,
        ConditionalsExample,
        ForLoops,
        WhileLoops,
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