import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ConditionalsExample } from "../lesson5/slides/conditionals";
import { ForLoops } from "../lesson5/slides/for-loops";
import { FunctionsExample } from "../lesson5/slides/functions";
import { WhileLoops } from "../lesson5/slides/while-loops";
import { FormControlLab } from "./lab/form-control-lab";
import { ArraysExample } from "./slides/arrays";
import { Methods } from "./slides/methods";
import { Objects } from "./slides/objects";
import { OperatorsTable } from "./slides/operators";
import { RegularExpressions } from "./slides/regex";
import * as simple from "./slides/simple";
import { StringsPart2 } from "./slides/strings";
import { VariablesRedux } from "./slides/variables";

export const lesson6: Presentation = {
    title: `A Quarter Mile at a Time`,
    description: "JavaScript and the DOM",
    slug: "js-and-dom",
    slides: [
        simple.TitleSlide,
        simple.DataTypes,
        VariablesRedux,
        OperatorsTable,
        ConditionalsExample,
        ForLoops,
        WhileLoops,
        FunctionsExample,
        ArraysExample,
        Objects,
        Methods,
        StringsPart2,
        RegularExpressions,
        simple.HowConnect,
        simple.TheProblem,
        simple.EnterDOM,
        simple.WhatCanItDo,
        simple.HowRun
    ],
    examples: [
        
    ],
    recording: {
        link: "https://youtu.be/yawjhPb2WxE"
    },
    lab: {
        title: "String Manipulation and Forms",
        slug: "strings-and-forms",
        LabView: FormControlLab
    }
}