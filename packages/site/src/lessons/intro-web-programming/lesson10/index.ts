import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AsyncFunctions } from "./slides/async-functions";
import { AsyncErrorHandling } from "./slides/async-functions-error-handling";
import { PromiseChaining } from "./slides/promise-chaining";
import { PromiseErrorHandling } from "./slides/promise-error-handling";
import { PromisesFromScratch } from "./slides/promise-from-scratch";
import { Promises } from "./slides/promises";
import { RequestTemplate } from "./slides/request-example";
import { ResponseTemplate } from "./slides/response-example";
import * as simple from "./slides/simple";
import { TryCatch } from "./slides/try-catch";
import { TryCatchNoHandling } from "./slides/try-catch-no-handling";
import { TryCatchWithHandling } from "./slides/try-catch-with-handling";
import { UrlParts } from "./slides/url-parts";

export const lesson10: Presentation = {
    title: `Asynchronous JavaScript - Part 2`,
    description: "Promises, async functions, and servers",
    slug: "more-async",
    slides: [
        simple.Title,
        Promises,
        PromisesFromScratch,
        PromiseChaining,
        simple.PromiseErrorQuestion,
        TryCatch,
        TryCatchNoHandling,
        TryCatchWithHandling,
        PromiseErrorHandling,
        AsyncFunctions,
        AsyncErrorHandling,
        RequestTemplate,
        UrlParts,
        simple.RequestMethod,
        simple.HttpHeaders,
        simple.HttpBody,
        ResponseTemplate,
        simple.ResponseCodes,
        simple.ResponseCodesContinued,
        simple.ApiQuestion,
        simple.WhatIsApi,
        simple.ApiContinued,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/BV2LlKHeN9IWiPG5xm0s0JuontmHRkQ6pfpTSc8FII20g7Nt938HAcF-ds5v2AO4iv7IyqXWFskKSKon.n87Irpk8mkOF5lM5?continueMode=true"
    },
    references: simple.references
}