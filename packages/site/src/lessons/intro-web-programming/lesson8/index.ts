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
        simple.AddEventListenerExplanation,
        simple.FunctionsAsVariablesSimple,
        simple.FunctionsAsVariablesPart2,
        simple.ThatsAwful,
        simple.FindThings,
        simple.FindThing,
        simple.FilterThings,
        simple.FilterThingsImplementation,
        simple.DecisionPoints,
        simple.Callbacks,
        simple.FindAThingGeneric,
        
        simple.Timeouts,
        simple.TimeoutWaitWhat,

        simple.ConcurrencyModel,
        simple.AsyncCallback,

        simple.CanWeSolve,
        simple.NestedTimeouts,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    lab: {
        slug: "callbacks",
        title: "Exploring Callbacks",
        content: import("./lab/lab-writeup.md")
    },
    recording: {
        link: "https://youtu.be/ySD1ynculJ4"
    },
    references: simple.references
}