import { Presentation } from "../../../../../presenter-core/src/services/types";
import { DocumentObject } from "./slides/document";
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
        DocumentObject,
        QuerySelector,
        UserInputElements,
        simple.HowToInteract,
        ReactingToInput
    ],
    examples: [
        
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/7z6KWMNOLDI-ox_zXYMQ-IIgTdb2KWoIQqVeaVDdy9zWUg_FMMkJimtbranbeHlsirr09RXYdGLR8Nn0.-M_8PVSA8xCx275l?autoplay=true&startTime=1602105988000"
    }
}