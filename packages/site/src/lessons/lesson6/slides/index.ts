import { Presentation } from "../../../../../presenter-core/src/services/types";
import { RegularExpressions } from "../../lesson5/slides/regex";
import { Timeouts } from "./async-callback-examples";
import { BlockingCode } from "./blocking-code";
import { SyncCallbackUseCase } from "./decision-points";
import { FunctionsRedux } from "./functions-as-variables";
import { AwaitExample } from "./introduce-await";
import { PromisesExample } from "./introduce-promises";
import { NestedTimeouts } from "./nested-timers";
import { NonBlockingCode } from "./nonblocking-code";
import * as simple from "./simple";
import { TimeoutWaitWhat } from "./timeout-problem";

export const lesson6: Presentation = {
    title: `Async-ing Feeling`,
    description: "Asynchronous JavaScript",
    slug: "async-js",
    slides: [
        simple.Title,
        simple.Agenda,
        RegularExpressions,
        simple.ConcurrencyModel,
        simple.MoreConcurrency,
        simple.WhatIsBlocking,
        BlockingCode,
        simple.WhatIsNonBlocking,
        NonBlockingCode,
        simple.NonBlockingProsCons,
        FunctionsRedux,
        simple.Callbacks,
        SyncCallbackUseCase,
        simple.AsyncCallback,
        Timeouts,
        TimeoutWaitWhat,
        simple.EventLoop,
        simple.EventLoopExample,
        NestedTimeouts,
        simple.ThatsTerrible,
        PromisesExample,
        AwaitExample
    ],
    examples: [
        
    ],
}