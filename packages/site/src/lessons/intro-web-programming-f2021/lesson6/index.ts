import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import changingPage from "./examples/change-page.html";
import counter from "./examples/counter.html";
import createContent from "./examples/create-content.html";
import eventInput from "./examples/event-input.html";
import querySelector from "./examples/query-selector.html";
import cssAndJs from "./examples/text-input.html";
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
        { title: "Changing the Page with JS", language: "html", code: changingPage },
        { title: "QuerySelector", language: "html", code: querySelector },
        { title: "Creating Content", language: "html", code: createContent },
        { title: "Responding to Events", language: "html", code: eventInput },
        { title: "Counter", language: "html", code: counter },
        { title: "CSS + JS", language: "html", code: cssAndJs }
    ],
    // lab: {
    //     title: "String Manipulation and Forms",
    //     slug: "strings-and-forms",
    // },
    references: simple.references
}