import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as review from "../lesson11/slides/simple";
import * as simple from "./slides/simple";

export const lesson12: Presentation = {
  description: "Cloud Functions and Pipelines",
  slug: "cloud-functions-and-pipelines",
  slides: [
    simple.Title,
    review.Containers,
    review.UsingImages,
    review.BuildingImages,
    review.UsingDockerInProd,
    review.ContainerOrchestration,
    simple.ServerlessServices,
    simple.Serverless,
    simple.Lambdas,
    simple.LambdasNotServers,
    simple.FunctionInSpace,
    simple.WriteALambda,
    simple.LambdaDependencies,
    simple.PackagingPlugin,
    simple.WhyNotSpring,
    simple.PipelinesSubtitle,
    simple.WhenToRunTests,
    simple.TestingPRs,
    simple.DeployingOnMerge,
    simple.WhenToDeploy,
    simple.ReleaseOnMerge,
    simple.HowDo,
    simple.GithubActions,
    simple.LetsGoGHA,
    generateReferencesSlide(simple.references),
  ],
  examples: [],
  references: simple.references,
};
