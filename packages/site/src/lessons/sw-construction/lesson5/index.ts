import { HTTPDetails, HttpHeaders, HttpRequest, HttpResponse, RestContinued, RestIntro } from "../../intro-web-programming/lesson12/slides/simple";
import { Timeouts } from "../../intro-web-programming/lesson6/slides/async-callback-examples";
import { FunctionsRedux } from "../../intro-web-programming/lesson6/slides/async-callbacks";
import { BlockingCode } from "../../intro-web-programming/lesson6/slides/blocking-code";
import { SyncCallbackUseCase } from "../../intro-web-programming/lesson6/slides/decision-points";
import { NonBlockingCode } from "../../intro-web-programming/lesson6/slides/nonblocking-code";
import { AsyncCallback, Callbacks, NonBlockingProsCons, WhatIsBlocking, WhatIsNonBlocking } from "../../intro-web-programming/lesson6/slides/simple";
import { TimeoutWaitWhat } from "../../intro-web-programming/lesson6/slides/timeout-problem";
import { AsyncJavaScript, Title } from "./slides/simple";

export const lesson5 = {
    title: 'Be Persistent!',
    description: "Full Stack Development - Backend",
    slug: "full-stack-1",
    slides: [
        Title,
        AsyncJavaScript,
        WhatIsBlocking,
        BlockingCode,
        WhatIsNonBlocking,
        NonBlockingCode,
        NonBlockingProsCons,
        FunctionsRedux,
        Callbacks,
        SyncCallbackUseCase,
        AsyncCallback,
        Timeouts,
        TimeoutWaitWhat,
        HTTPDetails,
        HttpRequest,
        HttpResponse,
        HttpHeaders,
        RestIntro,
        RestContinued,
    ],
    examples: [
    ]
}