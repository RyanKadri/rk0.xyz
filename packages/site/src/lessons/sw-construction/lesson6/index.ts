import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ApisAreImportant, ApiShape, ExampleBadApi, HowDoTalk, HttpApis, PublicApisAreHard, ThatBringsUsTo, Title, WhereApis } from "./slides/simple";

export const lesson6: Presentation = {
    title: 'APIs',
    description: "Thinking about software APIs",
    slug: "thinking-apis",
    slides: [
        Title,
        HowDoTalk,
        WhereApis,
        ApisAreImportant,
        PublicApisAreHard,
        ExampleBadApi,
        HttpApis,
        ApiShape,
        ThatBringsUsTo
    ],
    examples: [
    ],
}