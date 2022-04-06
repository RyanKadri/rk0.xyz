import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as review from "../lesson8/slides/simple";
import catFacts from "./examples/cat-facts.html";
import dadJokes from "./examples/fetch-dad-joke.html";
import laggyInputs from "./examples/laggy-inputs.html";
import pokedex from "./examples/pokedex.html";
import timer from "./examples/timer.html";
import { AsyncTasks } from "./slides/async-tasks";
import * as simple from "./slides/simple";

export const lesson9: Presentation = {
  title: `Kitchen Async`,
  description: "Asynchronous JavaScript",
  slug: "async-javascript",
  slides: [
    simple.Title,
    simple.InReview,
    review.FunctionsAsVariablesSimple,
    review.FunctionsAsVariablesPart2,
    review.FindAThingGeneric,
    review.SetTimeoutExample,
    review.SetTimeoutPart2,
    simple.FutureGoals,
    simple.WaitYourTurn,
    simple.BlockingWait,
    simple.OhNo,
    simple.MostTimeIsIdle,
    simple.HowDoTimers,
    simple.EventLoop,
    simple.AsyncCallbacks,
    AsyncTasks,
    simple.BlockingCodeExample,
    simple.NonBlockingMoreExamples,
    simple.SetTimeoutCallback,
    simple.AnonymousFunctions,
    simple.RequestsResponses,
    simple.WhatIsAServer,
    simple.HowDoUseServers,
    simple.ShowExample,
    simple.FetchExample,
    simple.WhatArePromises,
    generateReferencesSlide(simple.references),
  ],
  examples: [
    { language: "html", title: "Page Load Timer", code: timer },
    { language: "html", title: "Laggy Inputs", code: laggyInputs },
    { language: "html", title: "Dad Joke API", code: dadJokes },
    { language: "html", title: "Cat Facts API", code: catFacts },
    { language: "html", title: "Pokedex Example", code: pokedex },
  ],
  recording: {
    link: "https://youtu.be/ouaFjaVR_Cw",
  },
  references: simple.references,
};
