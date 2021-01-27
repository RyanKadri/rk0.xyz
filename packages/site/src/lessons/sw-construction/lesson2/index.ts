import { generateReferencesSlide } from "../../shared/references-slide";
import { JSONExample } from "./slides/json";
import { SemanticVersioning } from "./slides/semantic-versioning";
import { DependencyDive, DistributedSystems, DistributedSystemsApproaches, DistributedSystemsInClass, EnterPackageManagers, ExampleTime, InversionOfControl, Maven, MavenDependencies, NaiveDownsides, PackageManagementJava, PartTwo, PossibilitiesForOpenSource, ProjectManagement, references, Spring, SpringCode, Title, WhatIsAJavaLibrary } from "./slides/simple";

export const lesson2 = {
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
    ]
}