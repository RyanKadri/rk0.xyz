import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as simple from "./slides/simple";
import { UpdatingArrays } from "./slides/updating-arrays";
import { VariablesAsLabels } from "./slides/variables-as-labels";

export const lesson6: Presentation = {
    title: `A Quarter Mile at a Time`,
    description: "JavaScript and the DOM",
    slug: "js-and-dom",
    slides: [
        simple.TitleSlide,
        VariablesAsLabels,
        UpdatingArrays,
        simple.Objects,
        simple.Methods,
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
    lab: {
        title: "String Manipulation and Forms",
        slug: "strings-and-forms",
    },
    references: simple.references
}