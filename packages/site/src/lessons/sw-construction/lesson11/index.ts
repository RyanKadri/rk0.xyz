import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AdvancedFeatures, CodeReview, CodingEnvironments, Debugger, DiffChanges, EnterTerraform, ImmutableInfrastructure, InfrastructureVsCode, IsThereABetterWay, references, ScriptableActions, TerraformData, TerraformExample, TerraformProviders, TerraformReferences, TerraformResources, TerraformState, Title } from "../lesson11/slides/simple";

export const lesson11: Presentation = {
    title: 'Infrastructure as Code',
    description: "Automating your Cloud Deployments",
    slug: "infrastructure-as-code",
    slides: [
        Title,
        Debugger,
        AdvancedFeatures,
        ScriptableActions,
        InfrastructureVsCode,
        CodingEnvironments,
        CodeReview,
        DiffChanges,
        ImmutableInfrastructure,
        IsThereABetterWay,
        EnterTerraform,
        TerraformExample,
        TerraformResources,
        TerraformReferences,
        TerraformData,
        TerraformProviders,
        TerraformState,
        generateReferencesSlide(references)
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/Gxje5TkyDLQKED3yxiRkT7JJmX7lQWUOkoGuNqhPMTKJ_rgQfiesa2B1nm4_B7rgNm4u5D2-bZZhjwnM.g5Was6aAGx3z5kcD?autoplay=true&startTime=1618435610000"
    },
    examples: [
    ],
    references
}