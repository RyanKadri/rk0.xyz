import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { UserInputElements } from "./slides/inputs";
import { ReactingToInput } from "./slides/reacting-to-input";
import { QuerySelector } from "./slides/selectors";
import * as simple from "./slides/simple";

export const lesson7: Presentation = {
    title: `Feedback Loop`,
    description: "Reacting to User Input",
    slug: "reacting-to-input",
    slides: [
        simple.TitleSlide,
        simple.JavaScriptInHTML,
        simple.DocumentParseOrder,
        simple.HowConnect,
        simple.TheProblem,
        simple.DOM,
        simple.DocumentObject,
        QuerySelector,
        UserInputElements,
        simple.HowToInteract,
        ReactingToInput,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    recording: {
        link: "https://youtu.be/g7ankWykvsE"
    },
    references: simple.references
}