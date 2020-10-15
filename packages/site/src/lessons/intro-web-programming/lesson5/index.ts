import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ExploringJSLab } from "./lab/exploring-js";
import { ArraysExample } from "./slides/arrays";
import { ConditionalsExample } from "./slides/conditionals";
import { ForLoops } from "./slides/for-loops";
import { FunctionsExample } from "./slides/functions";
import { Objects } from "./slides/objects";
import { Operators } from "./slides/operators";
import { OperatorsTable } from "./slides/operators-table";
import * as simple from "./slides/simple";
import { StringsPart2 as Strings } from "./slides/strings";
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
        FunctionsExample,
        ArraysExample,
        Objects,
        Strings,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    recording: {
        link: "https://temple.zoom.us/rec/share/An6vZXmFpTp8cQWJPBfdEzku2uNxEFSrnSdkwoURlnF3vlUQZ_6cLkh_qfC8TvMX.7pTgDL86_GORvSOb"
    },
    lab: {
        title: "Exploring Javascript",
        slug: "exploring-javascript",
        LabView: ExploringJSLab
    },
    references: simple.references
}