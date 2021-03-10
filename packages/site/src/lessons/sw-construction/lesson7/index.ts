import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AndYetSoFar, CloudHosting, CommandLineIntro, CommonCommands, DataCenterImage, DataCenters, DataCentersDownside, HowDoPublish, JavaCommands, MavenCommands, NowHowDeploy, references, RunningOutsideIde, SecurityGroups, SetupCommands, SoCloseSoFar, StartingVM, Title, VirtualMachines } from "./slides/simple";

export const lesson7: Presentation = {
    title: 'Deploying Code',
    description: "Going from the IDE to the internet",
    slug: "deploying-code",
    slides: [
        Title,
        HowDoPublish,
        SoCloseSoFar,
        AndYetSoFar,
        RunningOutsideIde,
        CommandLineIntro,
        CommonCommands,
        MavenCommands,
        JavaCommands,
        NowHowDeploy,
        DataCenters,
        DataCenterImage,
        DataCentersDownside,
        CloudHosting,
        VirtualMachines,
        StartingVM,
        SetupCommands,
        SecurityGroups,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}