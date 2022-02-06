import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ApiDefinition, ApisAreImportant, ApiShape, BookstoreBadModel, BookstoreModel, ErrorHandling, ExampleSpring, HttpApis, InstanceMethods, PublicApisAreHard, references, RestAPIs, Serialization, SpringApis, Subtitle, Title, WhereApis, WhoBuilds } from "./slides/simple";
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
        WhoBuilds,
        InstanceMethods,

        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}