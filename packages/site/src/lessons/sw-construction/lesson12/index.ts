import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { references, Title } from "./slides/simple";

export const lesson12: Presentation = {
    title: 'Containers, Functions, and Final Exam Review',
    description: "Modern application deployment",
    slug: "containers-and-functions",
    slides: [
        Title,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}