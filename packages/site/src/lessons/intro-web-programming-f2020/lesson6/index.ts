import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ConditionalExample, ForLoops, FunctionsExample, WhileLoops } from "../lesson5/slides/simple";
import { ArraysExample } from "./slides/arrays";
import { AssignmentOperators, ComparisonOperators, LogicalOperators, MathOperators } from "./slides/operators";
import * as simple from "./slides/simple";
import { UpdatingArrays } from "./slides/updating-arrays";
import { VariablesAsLabels } from "./slides/variables-as-labels";

export const lesson6: Presentation = {
  title: `A Quarter Mile at a Time`,
  description: "JavaScript and the DOM",
  slug: "js-and-dom",
  slides: [
    simple.TitleSlide,
    simple.DataTypes,
    simple.VariablesRedux,
    MathOperators,
    AssignmentOperators,
    ComparisonOperators,
    LogicalOperators,
    ConditionalExample,
    ForLoops,
    WhileLoops,
    FunctionsExample,
    ArraysExample,
    UpdatingArrays,
    simple.Objects,
    simple.Methods,
    VariablesAsLabels,
    simple.MapArray,
    simple.MapArrayImmutable,
    simple.FizzBuzz,
    simple.HowConnect,
    simple.TheProblem,
    simple.DOM,
    simple.WhatCanItDo,
    generateReferencesSlide(simple.references),
  ],
  examples: [],
  recording: {
    link: "https://youtu.be/wtHDF-N9Y7E",
  },
  lab: {
    title: "String Manipulation and Forms",
    slug: "strings-and-forms",
  },
  references: simple.references,
};
