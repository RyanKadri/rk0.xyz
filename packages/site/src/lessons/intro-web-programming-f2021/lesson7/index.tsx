import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import addEventListenerExample from "./examples/add-event-listener.html";
import createElements from "./examples/create-elements.html";
import eventBubbling from "./examples/event-bubbling.html";
import clickButton from "./examples/handle-click.html";
import usingEvents from "./examples/using-events.html";
import validateInput from "./examples/validate-input.html";
import * as simple from "./slides/simple";

export const lesson7: Presentation = {
    title: `HandlingJS`,
    description: "Handling User Inputs with JavaScript",
    slug: "handling-inputs",
    slides: [
        simple.TitleSlide,
        simple.CommonProperties,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        { title: "Simple Click Handler", language: "html", code: clickButton },
        { title: "Validate Input", language: "html", code: validateInput },
        { title: "Using Events", language: "html", code: usingEvents },
        { title: "Event Bubbling", language: "html", code: eventBubbling },
        { title: "addEventListener", language: "html", code: addEventListenerExample },
        { title: "Creating Items with JS", language: "html", code: createElements },
    ],
    // lab: {
    //     title: "String Manipulation and Forms",
    //     slug: "strings-and-forms",
    // },
    references: simple.references
}