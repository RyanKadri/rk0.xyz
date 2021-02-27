import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { JSONExample } from "./slides/json";
import { SemanticVersioning } from "./slides/semantic-versioning";
import { DependencyDive, DistributedSystems, DistributedSystemsApproaches, DistributedSystemsInClass, EnterPackageManagers, ExampleTime, InversionOfControl, Maven, MavenDependencies, NaiveDownsides, PackageManagementJava, PartTwo, PossibilitiesForOpenSource, ProjectManagement, references, Spring, SpringCode, Title, WhatIsAJavaLibrary } from "./slides/simple";

export const lesson2: Presentation = {
    title: 'The jar is a "door"',
    description: "Managing Dependencies. Introducing Spring",
    slug: "dependencies-spring",
    slides: [
        Title,
        PossibilitiesForOpenSource,
        NaiveDownsides,
        ProjectManagement,
        EnterPackageManagers,
        PackageManagementJava,
        Maven, 
        MavenDependencies,
        DependencyDive,
        SemanticVersioning,
        ExampleTime,
        WhatIsAJavaLibrary,
        PartTwo,
        DistributedSystems,
        DistributedSystemsApproaches,
        DistributedSystemsInClass,
        JSONExample,
        Spring,
        SpringCode,
        InversionOfControl,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/Eydnbvf4KcXvQrzhZrHy3NdZmR3qXRS0U0PuMleRvsW8kyANVEy1Nb8tgr5FTRwU864_m_0CB8nLCAWO.WoQlXN2kU6g4Dga3?autoplay=true&startTime=1611786459000"
    },
    references
}