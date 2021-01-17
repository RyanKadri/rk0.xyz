import { Presentation } from "../../../../../../presenter-core/src/services/types";
import { Agenda, BehavioralInterview, EnteringInterview, EvaluateCompany, GrowingWhileWorking, PracticeInterview, RolesInDevelopment, StartingWork, StartingWorkGotchas, TheoryInterview, Title, YourQuestions } from "./slides/simple";

export const lesson13: Presentation = {
    title: 'Unsolicited Advice',
    description: 'Working in Software Development',
    slug: "the-industry",
    slides: [
        Title,
        Agenda,
        RolesInDevelopment,
        EnteringInterview,
        TheoryInterview,
        PracticeInterview,
        BehavioralInterview,
        YourQuestions,
        StartingWork,
        StartingWorkGotchas,
        EvaluateCompany,
        GrowingWhileWorking
    ],
    examples: [
    ],
}