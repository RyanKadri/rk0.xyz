import { Presentation } from "../../../../../presenter-core/src/services/types";
import * as simple from "./simple";

export const lesson9: Presentation = {
    title: `The More Things Change`,
    description: "Hosting and Version Control",
    slug: "hosting-vcs",
    slides: [
        ...Object.values(simple)
    ],
    examples: [
        
    ],
}