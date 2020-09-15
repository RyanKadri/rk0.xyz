import { Presentation } from "../../../../../../presenter-core/src/services/types";
import { ConditionalsExample } from "../../js-1/slides/conditionals";
import { ForLoops } from "../../js-1/slides/for-loops";
import { FunctionsExample } from "../../js-1/slides/functions";
import { WhileLoops } from "../../js-1/slides/while-loops";
import { FormControlLab } from "../lab/form-control-lab";
import { ArraysExample } from "./arrays";
import { Methods } from "./methods";
import { Objects } from "./objects";
import { OperatorsTable } from "./operators";
import { RegularExpressions } from "./regex";
import * as simple from "./simple";
import { StringsPart2 } from "./strings";
import { VariablesRedux } from "./variables";

export const lesson5: Presentation = {
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