import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AddEventListener } from "./slides/add-event-listener";
import * as simple from "./slides/simple";

export const lesson8: Presentation = {
  title: `Let's get func-y`,
  description: "Functions and Callbacks",
  slug: "callbacks",
  slides: [
    simple.Title,
    AddEventListener,
    simple.AddEventListenerQuestions,
    simple.AnotherExample,
    simple.FunctionOrders,
    simple.AddEventListenerExplanation,
    simple.OtherUseCases,
    simple.SetTimeoutExample,
    simple.FindThings,
    simple.FilterThings,
    simple.DecisionPoints,
    simple.Callbacks,
    simple.FunctionsAsVariablesSimple,
    simple.FunctionsAsVariablesPart2,
    simple.FindAThingGeneric,

    simple.SetTimeoutPart2,
    simple.TimeoutWaitWhat,
    simple.WhyTimeoutsWhy,

    simple.CanWeSolve,
    simple.NestedTimeouts,
    generateReferencesSlide(simple.references),
  ],
  examples: [],
  recording: {
    link: "https://youtu.be/PKDOoXkLPvs",
  },
  lab: {
    slug: "using-apis",
    title: "The Pokedex",
  },
  references: simple.references,
};
