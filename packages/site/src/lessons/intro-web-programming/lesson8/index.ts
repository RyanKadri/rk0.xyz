import { Presentation } from "../../../../../presenter-core/src/services/types";
import { CallbacksLab } from "./lab/callbacks";
import { AddEventListener } from "./slides/add-event-listener";
import { AddEventListenerQuestions } from "./slides/add-event-listener-questions";
import { Timeouts } from "./slides/async-callback-examples";
import { FilterThings } from "./slides/filter-a-thing";
import { FindThing } from "./slides/find-a-thing";
import { FindAThingGeneric } from "./slides/find-a-thing-generic";
import { FunctionsAsVariablesPart2 } from "./slides/functions-as-variables";
import { FunctionsAsVariablesSimple } from "./slides/functions-as-variables-simple";
import { NestedTimeouts } from "./slides/nested-timers";
import * as simple from "./slides/simple";
import { TimeoutWaitWhat } from "./slides/timeout-problem";

export const lesson8: Presentation = {
    title: `Let's get func-y`,
    description: "Functions and Callbacks",
    slug: "callbacks",
    slides: [
        simple.Title,
        AddEventListener,
        AddEventListenerQuestions,
        simple.AddEventListenerExplanation,
        FunctionsAsVariablesSimple,
        FunctionsAsVariablesPart2,
        simple.ThatsAwful,
        simple.FindThings,
        FindThing,
        simple.FilterThings,
        FilterThings,
        simple.DecisionPoints,
        simple.Callbacks,
        FindAThingGeneric,
        
        Timeouts,
        TimeoutWaitWhat,

        simple.ConcurrencyModel,
        simple.AsyncCallback,

        simple.CanWeSolve,
        NestedTimeouts,
    ],
    examples: [
        
    ],
    lab: {
        LabView: CallbacksLab,
        slug: "callbacks",
        title: "Exploring Callbacks"
    },
    recording: {
        link: "https://youtu.be/ySD1ynculJ4"
    }
}