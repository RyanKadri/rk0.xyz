import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { MathCodeFunctions } from "./slides/math-code-functions";
import { CarefulWithReferences, CaseStudyGetters, CaseStudySetters, ConstructorsAreBetter, DataIsDangerous, FunctionalJava, FunctionalJava2, HowNonPure, IsAPureFunction, JavaAsFunctionalLanguage, MathFunctions, NotAPureFunction, PureFunctionBenefits, PureFunctions, ReducingState, references, Title, UnsafeSharing, UseDataRightAway, UseDataRightAway2, UseLocals } from "./slides/simple";
import { VariablesAsLabels } from "./slides/variables-as-labels";

export const lesson6: Presentation = {
    description: "Programming Practices",
    slug: "programming-practices",
    slides: [
        Title,
        MathFunctions,
        MathCodeFunctions,
        PureFunctions,
        PureFunctionBenefits,
        IsAPureFunction,
        NotAPureFunction,
        JavaAsFunctionalLanguage,
        FunctionalJava,
        FunctionalJava2,
        HowNonPure,
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
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}