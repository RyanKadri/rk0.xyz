import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ConditionalsExample } from "../lesson5/slides/conditionals";
import { ForLoops } from "../lesson5/slides/for-loops";
import { FunctionsExample } from "../lesson5/slides/functions";
import { WhileLoops } from "../lesson5/slides/while-loops";
import { ArraysExample } from "./slides/arrays";
import { Methods } from "./slides/methods";
import { Objects } from "./slides/objects";
import { OperatorsTable } from "./slides/operators";
import * as simple from "./slides/simple";
import { UpdatingArrays } from "./slides/updating-arrays";
import { VariablesRedux } from "./slides/variables";
import { VariablesAsLabels } from "./slides/variables-as-labels";

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
        UpdatingArrays,
        Objects,
        Methods,
        VariablesAsLabels,
        simple.MapArray,
        simple.MapArrayImmutable,
        simple.FizzBuzz,
        simple.HowConnect,
        simple.TheProblem,
        simple.DOM,
        simple.WhatCanItDo,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    recording: {
        link: "https://youtu.be/wtHDF-N9Y7E"
    },
    lab: {
        title: "String Manipulation and Forms",
        slug: "strings-and-forms",
        path: "./packages/site/src/lessons/intro-web-programming/lesson6/lab/lab-writeup.md"
    },
    references: simple.references
}