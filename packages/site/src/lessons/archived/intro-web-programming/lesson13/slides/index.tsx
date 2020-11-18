import { Presentation } from "../../../../../../../presenter-core/src/services/types";
import { ArrayMethods } from "./array-methods";
import { Classes } from "./classes";
import { ObjectDictionaries } from "./object-dictionary";
import * as simple from "./simple";
import { TryCatch } from "./try-catch";

export const lesson13: Presentation = {
    title: `hAPI to Host`,
    description: "Making your APIs Public",
    slug: "hosting-apis",
    slides: [
        simple.Title,
        simple.Agenda,
        simple.WhoWillHost,
        simple.HostingRisks,
        simple.NodeCapableOf,
        simple.HostingHistory,
        simple.CloudComputing,
        simple.FirebaseIntro,
        simple.FirebaseFunctions,
        simple.HowDoUseFunctions,
        simple.FirebaseOther,
        simple.MiscTopics,
        TryCatch,
        ObjectDictionaries,
        Classes,
        ArrayMethods,
        simple.PreppingCode
    ],
    examples: [
        
    ],
}