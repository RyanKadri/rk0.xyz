import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { ApisAreImportant, ApiShape, ExampleBadApi, HowDoTalk, HttpApis, PublicApisAreHard, references, ThatBringsUsTo, Title, WhereApis } from "./slides/simple";

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
        ThatBringsUsTo,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording:{
        link: "https://temple.zoom.us/rec/play/cgRR1AlEg0AG79rByrdHz7P6WLDiaudUJmrk_sJi_IhZo7aZFB3uFfzcerBJ5LG9OKqLbnIMUhW4ywM.nbSBymVyhq_HE0W2?continueMode=true"
    },
    references
}