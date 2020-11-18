import { Presentation } from "../../../../../../../presenter-core/src/services/types";
import { StaticHostingLab } from "../lab/static-hosting-lab";
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
    lab: {
        title: "Going Public",
        slug: "hosting-static",
        LabView: StaticHostingLab
    }
}