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
    recording: {
        link: "https://temple.zoom.us/rec/play/iwmd8Er2cufFZvhirrn2fxS8OrChelUZBu4geDBJz82Ji1_SfYnm9GOzhTnTeDdmvw-jUboIuuHau5sp.JcqHLI5h7yXnBhN5?autoplay=true&startTime=1606947921000"
    },
    references: simple.references
}