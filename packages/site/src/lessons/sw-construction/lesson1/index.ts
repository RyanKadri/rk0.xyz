import { Presentation } from "../../../../../presenter-core/src/services/types";
import { EnterGit } from "../../archived/intro-web-programming/lesson9/slides/simple";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AboutMe, AboutMePicture, BasicCommands, FairUse, FreeSoftware, GitHub, ImagineAlmostDone, ImagineATeam, ImagineChangingProjects, ItWouldBeNice, Licensing, OpenSourceP1, OpenSourceP2, OpenSourceP3, PlayingWithHistory, references, Syllabus, Terms, Title, VersionControlDef, WhyVersionControl, WorkingWithOthers } from "./slides/simple";

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
        BasicCommands,
        PlayingWithHistory,
        WorkingWithOthers,
        GitHub,
        OpenSourceP1,
        OpenSourceP2,
        OpenSourceP3,
        FreeSoftware,
        Licensing,
        FairUse,
        generateReferencesSlide(references),
    ],
    examples: [
    ],
    references: references
}