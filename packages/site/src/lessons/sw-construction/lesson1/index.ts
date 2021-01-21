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
    references: references,
    recording: {
        link: "https://temple.zoom.us/rec/play/nmCzMeQFXInGhXJjBSL9kXA4z13YzybCBR79bqdb5syz-3SF-K1wHbQJt2laYOGF5MTPZhn_NUZCc44k.yCS1S-a8BCnEhtew?continueMode=true"
    }
}