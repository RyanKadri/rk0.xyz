import { HTTPDetails, HttpHeaders, HttpRequest, HttpResponse } from "../../archived/intro-web-programming/lesson12/slides/simple";
import { Timeouts } from "../../archived/intro-web-programming/lesson6/slides/async-callback-examples";
import { FunctionsRedux } from "../../archived/intro-web-programming/lesson6/slides/async-callbacks";
import { BlockingCode } from "../../archived/intro-web-programming/lesson6/slides/blocking-code";
import { SyncCallbackUseCase } from "../../archived/intro-web-programming/lesson6/slides/decision-points";
import { PromisesExample } from "../../archived/intro-web-programming/lesson6/slides/introduce-promises";
import { NonBlockingCode } from "../../archived/intro-web-programming/lesson6/slides/nonblocking-code";
import { AsyncCallback, Callbacks, NonBlockingProsCons, WhatIsBlocking, WhatIsNonBlocking } from "../../archived/intro-web-programming/lesson6/slides/simple";
import { TimeoutWaitWhat } from "../../archived/intro-web-programming/lesson6/slides/timeout-problem";
import { Agenda, AsyncJavaScript, BlockingNonBlocking, Title } from "./slides/simple";

export const lesson5 = {
    title: 'The kitchen async',
    description: "Full Stack Development - Asynchronous Frontend Code",
    slug: "full-stack-2",
    slides: [
        Title,
        Agenda,
        AsyncJavaScript,
        BlockingNonBlocking,
        WhatIsBlocking,
        BlockingCode,
        WhatIsNonBlocking,
        NonBlockingCode,
        FunctionsRedux,
        Callbacks,
        SyncCallbackUseCase,
        AsyncCallback,
        Timeouts,
        NonBlockingProsCons,
        TimeoutWaitWhat,
        PromisesExample,
        HTTPDetails,
        HttpRequest,
        HttpResponse,
        HttpHeaders,
    ],
    examples: [
    ]
}