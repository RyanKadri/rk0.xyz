import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import {
  AboutMe,
  AboutMePicture,
  BasicCommands,
  EnterGit,
  GitConcepts,
  GitConcepts2,
  GitHub,
  ImagineAlmostDone,
  ImagineATeam,
  ImagineChangingProjects,
  ItWouldBeNice,
  PlayingWithHistory,
  references,
  Syllabus,
  Terms,
  Title,
  VersionControlDef,
  WhyVersionControl,
  WorkingWithOthers,
} from "./slides/simple";

export const lesson1: Presentation = {
  title: "Hello World!",
  description: "Course Expectations, Version Control and Open Source",
  slug: "hello-world",
  slides: [
    Title,
    AboutMePicture,
    AboutMe,
    Syllabus,
    VersionControlDef,
    WhyVersionControl,
    ImagineAlmostDone,
    ImagineChangingProjects,
    ImagineATeam,
    ItWouldBeNice,
    Terms,
    EnterGit,
    GitConcepts,
    GitConcepts2,
    BasicCommands,
    PlayingWithHistory,
    WorkingWithOthers,
    GitHub,
    generateReferencesSlide(references),
  ],
  examples: [],
  references: references,
  recording: {
    link: "https://youtu.be/sTpx345-MV8",
  },
};
