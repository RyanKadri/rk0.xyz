import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AndYetSoFar, CloudHosting, CloudHostingProsCons, CommandLineIntro, CommonCommands, DataCenterImage, DataCenterOperations, DataCenterOperationsVMs, DataCenters, DataCentersDownside, HowDoPublish, HowGet, JavaCommands, MavenCommands, NowHowDeploy, references, RunningOutsideIde, SecurityGroups, SetupCommands, SoCloseSoFar, StartingVM, Title, VirtualMachines } from "./slides/simple";

export const lesson7: Presentation = {
    description: "Introduction to the Cloud",
    slug: "deploying-code",
    slides: [
        Title,
        HowDoPublish,
        SoCloseSoFar,
        AndYetSoFar,
        DataCenters,
        DataCenterImage,
        DataCenterOperations,
        DataCentersDownside,
        VirtualMachines,
        DataCenterOperationsVMs,
        CloudHosting,
        CloudHostingProsCons,
        HowGet,
        StartingVM,
        RunningOutsideIde,
        CommandLineIntro,
        CommonCommands,
        MavenCommands,
        JavaCommands,
        NowHowDeploy,
        SetupCommands,
        SecurityGroups,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/share/btN-H6_nCGCQTAXMD9V5xsSNhmAYKIHp-a5ZnuG8cMBAiUe2rezDSkr4LqA1A_J5.j3C3JBInsVFvm0qu"
    },
    references
}