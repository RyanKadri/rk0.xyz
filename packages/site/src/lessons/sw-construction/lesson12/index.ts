import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import {
  BuildingImages,
  Containers,
  Disclaimer,
  Docker,
  ImageLayers,
  Images,
  ImageSharing,
  InstallingSoftware,
  Lambdas,
  references,
  Serverless,
  ServerlessServices,
  ShrekMeme,
  Title,
} from "./slides/simple";

export const lesson12: Presentation = {
  title: "Containers, Functions, and Final Exam Review",
  description: "Modern application deployment",
  slug: "containers-and-functions",
  slides: [
    Title,
    InstallingSoftware,
    Docker,
    Disclaimer,
    Containers,
    Images,
    BuildingImages,
    ShrekMeme,
    ImageLayers,
    ImageSharing,
    ServerlessServices,
    Serverless,
    Lambdas,
    generateReferencesSlide(references),
  ],
  examples: [],
  references,
};
