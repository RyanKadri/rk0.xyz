import { Presentation } from "../../../../../presenter-core/src/services/types";
import { CarefulWithReferences, CaseStudyGetters, CaseStudySetters, ConstructorsAreBetter, DataIsDangerous, FunctionalJava, FunctionalJava2, FunctionalProgramming1, FunctionalProgrammingIntro, IsAPureFunction, NotAPureFunction, PossibleLocations, PureFunctions, ReducingState, Title, UnsafeSharing, UseDataRightAway, UseDataRightAway2, UseLocals, WhereData } from "./slides/simple";
import { VariablesAsLabels } from "./slides/variables-as-labels";

export const lesson5: Presentation = {
    title: 'Putting the fun in functional',
    description: "Programming Best Practices: Functional and Immutable Programming",
    slug: "functional-immutable",
    slides: [
        Title,
        WhereData,
        PossibleLocations,
        DataIsDangerous,
        ReducingState,
        UseLocals,
        CaseStudySetters,
        ConstructorsAreBetter,
        CaseStudyGetters,
        UseDataRightAway,
        UseDataRightAway2,
        CarefulWithReferences,
        VariablesAsLabels,
        UnsafeSharing,
        FunctionalProgrammingIntro,
        FunctionalProgramming1,
        PureFunctions,
        IsAPureFunction,
        NotAPureFunction,
        FunctionalJava,
        FunctionalJava2,
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/2kaKpoF4SNS-nhl9JhKp1aBrXD7wMBW3jrAbtc9jJPMizw2rr0uoN1JGXQkwWbRNUMQuFm_J6dKrcPO5.9ieBiB1_8V0cZ8LT?continueMode=true"
    }
}