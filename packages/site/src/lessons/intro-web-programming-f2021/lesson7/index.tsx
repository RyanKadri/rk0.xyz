import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import addEventListenerExample from "./examples/add-event-listener.html";
import createElements from "./examples/create-elements.html";
import eventBubbling from "./examples/event-bubbling.html";
import clickButton from "./examples/handle-click.html";
import weirdBubbling from "./examples/off-target-bubbling.html";
import usingEvents from "./examples/using-events.html";
import validateInput from "./examples/validate-input.html";
import * as simple from "./slides/simple";

export const lesson7: Presentation = {
    title: `HandlingJS`,
    description: "Handling User Inputs with JavaScript",
    slug: "handling-inputs",
    slides: [
        simple.TitleSlide,
        simple.LetsRecap,
        simple.DomRecap,
        simple.FindingElements,
        simple.CommonProperties,
        simple.CreatingElements,
        simple.DocumentCreateElement,
        simple.HowDoMakeInteractive,
        simple.Events,
        simple.WhatCanTheUserDo,
        simple.MostCommonEvents,
        simple.AttachingEvents,
        simple.EventBubbling,
        simple.EventDefaults,
        simple.AddEventListener,
        simple.CreateTodoList,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        { title: "Simple Click Handler", language: "html", code: clickButton },
        { title: "Validate Input", language: "html", code: validateInput },
        { title: "Using Events", language: "html", code: usingEvents },
        { title: "Event Bubbling", language: "html", code: eventBubbling },
        { title: "Event Bubbling Experiment", language: "html", code: weirdBubbling },
        { title: "addEventListener", language: "html", code: addEventListenerExample },
        { title: "Creating Items with JS", language: "html", code: createElements },
    ],
    recording: {
        link: "https://youtu.be/hNQwKyjfcZs"
    },
    lab: {
        slug: "callbacks",
        title: "Exploring Callbacks",
    },
    references: simple.references
}