import { Presentation } from "../../../../../presenter-core/src/services/types";
import { PokedexLab } from "./lab/pokedex-lab";
import { ActiveWaiting2 as ActiveWaiting } from "./slides/active-waiting2";
import { BlockingCode as BlockingCodeExample } from "./slides/blocking-code";
import { JSONExample } from "./slides/json";
import { NonBlockingMoreExamples } from "./slides/nonblocking-code";
import { RequestTemplate } from "./slides/request-examples";
import * as simple from "./slides/simple";
import { NonBlockingExample } from "./slides/timeout-problem";

export const lesson9: Presentation = {
    title: `Everything but the kitchen async`,
    description: "Asynchronous JavaScript",
    slug: "async",
    slides: [
        simple.Title,
        ActiveWaiting,
        simple.WhatIsAsynchronous,
        NonBlockingExample,
        NonBlockingMoreExamples,
        simple.AsyncCallback,
        simple.WhatIsBlocking,
        simple.BlockingCodeCharacteristics,
        BlockingCodeExample,
        simple.ConcurrencyModel,
        simple.NotAHugeProblem,
        simple.EventLoop,
        simple.RequestsResponses,
        simple.WhatIsAServer,
        simple.HowDoUseServers,
        JSONExample,
        simple.ShowExample,
        simple.HttpRequest,
        simple.HttpResponse,
        simple.HttpHeaders,
        RequestTemplate
    ],
    examples: [
        
    ],
    lab: {
        LabView: PokedexLab,
        slug: "using-apis",
        title: "Building a Pokedex"
    },
    recording: {
        link: "https://temple.zoom.us/rec/play/SUyDcTEetDiC9gqb7sW7eKUo4pRYOqjmPK_Jt5C3GuZYXyWFmzj0NYTk9f8zXiW8dcjC6cCQk4h8x-4L.EWvXQpvyd65ZCAZ5?autoplay=true&startTime=1603920369000"
    }
}