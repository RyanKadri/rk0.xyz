import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { CodeReview, CodingEnvironments, DiffChanges, EnterTerraform, ImmutableInfrastructure, InfrastructureVsCode, IsThereABetterWay, references, ScriptableActions, TerraformExample, Title } from "../lesson11/slides/simple";

export const lesson11: Presentation = {
    title: 'Infrastructure as Code',
    description: "Automating your Cloud Deployments",
    slug: "infrastructure-as-code",
    slides: [
        Title,
        ScriptableActions,
        InfrastructureVsCode,
        CodingEnvironments,
        CodeReview,
        DiffChanges,
        ImmutableInfrastructure,
        IsThereABetterWay,
        EnterTerraform,
        TerraformExample,
        generateReferencesSlide(references)
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/V71cTBYukP6DtX89vH8xgEPrarSSoLt_iFKLL7x38JEA1JPvzN-7XA-vAYMFiLu90qORsMuWuKqpcs4v.gxJO2Ck-qtR6g316?autoplay=true&startTime=1617830714000"
    },
    examples: [
    ],
    references
}