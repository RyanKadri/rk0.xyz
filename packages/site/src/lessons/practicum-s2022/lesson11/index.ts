import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as review from "../lesson10/slides/simple";
import { BuildingImages, BuildingImages2, ContainerOrchestration, Containers, Disclaimer, Docker, DockerContainerCommands, DockerfileExplanation, ImageLayers, ImageSharing, InstallingSoftware, Lambdas, references, RepeatableStartup, Serverless, ServerlessServices, StartupScriptExample, Title, UsingDockerInProd, UsingImages } from "./slides/simple";

export const lesson11: Presentation = {
    title: 'Containers, Functions, and Final Exam Review',
    description: "Modern application deployment",
    slug: "containers-and-functions",
    slides: [
        Title,
        review.ManageLoadBalancer,
        review.ManageTargetGroups,
        review.LaunchTemplates,
        review.ManageScalingWithAws,
        StartupScriptExample,
        RepeatableStartup,
        InstallingSoftware,
        Docker,
        Disclaimer,
        Containers,
        UsingImages,
        DockerContainerCommands,
        BuildingImages,
        DockerfileExplanation,
        ImageSharing,
        BuildingImages2,
        ImageLayers,
        UsingDockerInProd,
        ContainerOrchestration,
        ServerlessServices,
        Serverless,
        Lambdas,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}