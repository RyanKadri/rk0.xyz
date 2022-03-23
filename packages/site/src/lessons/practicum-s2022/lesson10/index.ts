import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AlertingIssues, Downtime, HowDoManage, HowDoWeFixIt2, HowToFix, JavaLogging, LaunchTemplates, Logging, ManageLoadBalancer, ManageScalingWithAws, ManageTargetGroups, Nines, OnAws, references, SplittingUpAService, Title, WhatCanGoWrong2, WhatCanGoWrongQuestion } from "./slides/simple";

export const lesson10: Presentation = {
    description: "Application Resiliency",
    slug: "resiliency",
    slides: [
        Title,
        WhatCanGoWrongQuestion,
        Downtime,
        Nines,
        HowToFix,
        WhatCanGoWrong2,
        HowDoWeFixIt2,
        SplittingUpAService,
        HowDoManage,
        OnAws,
        LaunchTemplates,
        ManageScalingWithAws,
        ManageTargetGroups,
        ManageLoadBalancer,
        AlertingIssues,
        Logging,
        JavaLogging,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}