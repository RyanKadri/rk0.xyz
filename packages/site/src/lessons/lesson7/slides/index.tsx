import { Presentation } from "../../../../../presenter-core/src/services/types";
import { AnimationsAndDOM } from "../lab/lab";
import * as simple from "./simple";

export const lesson7: Presentation = {
    title: `Backtracking and Lookbehinds`,
    description: "Midterm Review",
    slug: "midterm-review",
    slides: [
        ...Object.values(simple)
    ],
    examples: [
        
    ],
    lab: {
        title: "Something Old, Something New",
        slug: "animations-and-dom",
        LabView: AnimationsAndDOM
    }
}