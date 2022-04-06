import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { RequestTemplate } from "./slides/request-example";
import { ResponseTemplate } from "./slides/response-example";
import * as simple from "./slides/simple";
import { UrlParts } from "./slides/url-parts";

export const lesson10: Presentation = {
  title: `Asynchronous JavaScript - Part 2`,
  description: "Promises, async functions, and servers",
  slug: "more-async",
  slides: [
    simple.Title,
    simple.Promises,
    simple.PromisesFromScratch,
    simple.PromiseChaining,
    simple.PromiseErrorQuestion,
    simple.TryCatch,
    simple.TryCatchNoHandling,
    simple.TryCatchWithHandling,
    simple.PromiseErrorHandling,
    simple.AsyncFunctions,
    simple.AsyncErrors,
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
    generateReferencesSlide(simple.references),
  ],
  examples: [],
  recording: {
    link: "https://youtu.be/uZddhTaGH4Y",
  },
  lab: {
    slug: "network-actions",
    title: "Interacting with the Network",
  },
  references: simple.references,
};
