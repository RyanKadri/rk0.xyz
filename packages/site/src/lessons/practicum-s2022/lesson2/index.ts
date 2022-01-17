import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { JSONExample } from "./slides/json";
import { SemanticVersioning } from "./slides/semantic-versioning";
import { DependencyDive, EnterPackageManagers, ExampleTime, FairUse, FreeSoftware, HowDoOpenSource, Licensing, Maven, MavenDependencies, NaiveDownsides, OpenSourceP1, OpenSourceP2, OpenSourceP3, OpenSourceProfit, PackageManagementJava, PossibilitiesForOpenSource, ProjectManagement, references, Title, WhatIsAJavaLibrary } from "./slides/simple";

export const lesson2: Presentation = {
    description: "Using Open Source Code",
    slug: "open-source",
    slides: [
        Title,
        OpenSourceP1,
        OpenSourceP2,
        OpenSourceP3,
        OpenSourceProfit,
        FreeSoftware,
        Licensing,
        FairUse,
        HowDoOpenSource,
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
        JSONExample,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}