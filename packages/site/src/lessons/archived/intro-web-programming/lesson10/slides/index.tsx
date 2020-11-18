import { Presentation } from "../../../../../../../presenter-core/src/services/types";
import { JSLibraries } from "../lab/js-libraries-lab";
import { slides } from "./simple";

export const lesson10: Presentation = {
    title: `More $ more problems`,
    description: "Common JavaScript Libraries",
    slug: "common-libraries",
    slides,
    examples: [
        
    ],
    lab: {
        slug: "libraries-imports",
        title: "Using libraries",
        LabView: JSLibraries
    },
}