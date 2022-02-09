import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ApiDefinition, ApisAreImportant, ApiShape, BookstoreBadModel, BookstoreModel, ConstructingOthers, DependencyInjection, ErrorHandling, ExampleSpring, HttpApis, InstanceMethodApproach, InstanceMethodProsCons, InstanceMethods, InterfaceProsCons, MultiFileProjects, ProblemStatement, PublicApisAreHard, references, RestAPIs, Serialization, SpringApis, SpringApproach, StaticMethodApproach, StaticMethodApproachProsCons, Subtitle, Title, UseAnInterface, WhereApis, WhoBuilds, WhySpring } from "./slides/simple";
import { SpringAnnotations } from "./slides/spring-annotations";

export const lesson5: Presentation = {
    description: "Spring and APIs",
    slug: "thinking-apis",
    slides: [
        Title,
        ApiDefinition,
        WhereApis,
        ApisAreImportant,
        PublicApisAreHard,
        ApiShape,
        HttpApis,
        RestAPIs,
        BookstoreModel,
        BookstoreBadModel,
        SpringApis,
        ExampleSpring,
        SpringAnnotations,
        Serialization,
        ErrorHandling,
        Subtitle,
        MultiFileProjects,
        InstanceMethods,
        ProblemStatement,
        StaticMethodApproach,
        StaticMethodApproachProsCons,
        InstanceMethodApproach,
        InstanceMethodProsCons,
        UseAnInterface,
        InterfaceProsCons,
        WhySpring,
        DependencyInjection,
        WhoBuilds,
        ConstructingOthers,
        SpringApproach,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}