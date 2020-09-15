import { Presentation } from "../../../../../../presenter-core/src/services/types";
import { ExploringJSLab } from "../lab/exploring-js";
import { ConditionalsExample } from "./conditionals";
import { ForLoops } from "./for-loops";
import { FunctionsExample } from "./functions";
import { Operators } from "./operators";
import * as simple from "./simple";
import { VariablesExamples } from "./variables";
import { WhileLoops } from "./while-loops";

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
    recording: {
        link: "https://youtu.be/aiNBZbZOIes"
    },
    lab: {
        title: "Exploring Javascript",
        slug: "exploring-javascript",
        LabView: ExploringJSLab
    }
}