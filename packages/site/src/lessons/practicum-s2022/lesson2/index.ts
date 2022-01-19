import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { SemanticVersioning } from "./slides/semantic-versioning";
import { DependencyDive, EnterPackageManagers, ExampleTime, Forks, FreeSoftware, GitHubOssFeatures, HowDoOpenSource, InTheOpen, Licensing, Maven, MavenDependencies, OpenSourcePractical, OpenSourceProfit, OsiDefP1, OsiDefP2, PackageManagementJava, Philosophy, PossibilitiesForOpenSource, ProjectManagement, references, Title, WhatIsAJavaLibrary } from "./slides/simple";

export const lesson2: Presentation = {
    description: "Using Open Source Code",
    slug: "open-source",
    slides: [
        Title,
        OpenSourcePractical,
        InTheOpen,
        GitHubOssFeatures,
        Forks,
        Philosophy,        
        OsiDefP1,
        OsiDefP2,
        FreeSoftware,
        Licensing,
        OpenSourceProfit,
        HowDoOpenSource,
        PossibilitiesForOpenSource,
        ProjectManagement,
        EnterPackageManagers,
        PackageManagementJava,
        Maven, 
        MavenDependencies,
        DependencyDive,
        SemanticVersioning,
        ExampleTime,
        WhatIsAJavaLibrary,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    lab: {
        slug: "parsing-csv",
        title: "Parsing CSV Files"
    },
    references
}