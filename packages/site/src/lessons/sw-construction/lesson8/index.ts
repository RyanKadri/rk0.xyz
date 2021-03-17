import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AlertingIssues, Downtime, HowDoManage, HowDoWeFixIt2, HowToFix, JavaLogging, LaunchTemplates, Logging, ManageLoadBalancer, ManageScalingWithAws, ManageTargetGroups, Nines, OnAws, references, SplittingUpAService, Title, WhatCanGoWrong2, WhatCanGoWrongQuestion } from "./slides/simple";

export const lesson8: Presentation = {
    title: 'Resiliency, Logging, and Monitoring',
    description: "Deploying reliable services (and picking them up when they fall down)",
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
    recording: {
        link: "https://temple.zoom.us/rec/play/2D7vi7aFO6KItPW3ajWdV5MmD6AP872qi3Zm4zwKkwR895LMHkK33y-9RHYGrEbyW9kWRHeenHMqSik.Ca00UBvBwHALwP5-?continueMode=true",
    },
    references
}