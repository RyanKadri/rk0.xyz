import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as simple from "./slides/simple";

export const lesson12: Presentation = {
    title: `What Comes Next?`,
    description: "Modern JavaScript",
    slug: "up-next",
    slides: [
        simple.TitleSlide,
        simple.FutureOfWeb,
        simple.ModernJavaScript,
        simple.NodeJS,
        simple.OtherHomes,
        simple.ImproveJavaScript,
        simple.TypeScript,
        simple.Imports,
        simple.Frameworks,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    recording: undefined,
    references: simple.references
}