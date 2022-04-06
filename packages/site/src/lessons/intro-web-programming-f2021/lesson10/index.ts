import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as review from "../lesson9/slides/simple";
import { RequestTemplate } from "./slides/request-example";
import { ResponseTemplate } from "./slides/response-example";
import * as simple from "./slides/simple";

export const lesson10: Presentation = {
  title: `Kitchen Async`,
  description: "JavaScript and the Network",
  slug: "the-network",
  slides: [
    simple.Title,
    review.InReview,
    review.FetchExample,
    review.WhatArePromises,
    review.WhatIsAServer,
    review.HowDoUseServers,
    simple.Json,
    RequestTemplate,
    ResponseTemplate,
    simple.RequestMethod,
    simple.HttpHeaders,
    simple.HttpBody,
    simple.ResponseCodes,
    simple.ResponseCodesContinued,
    RequestTemplate,
    ResponseTemplate,
    simple.ApiQuestion,
    simple.WhatIsApi,
    simple.FetchProperties,
    simple.ObjectSyntax,
    simple.Promises,
    simple.MethodChaining,
    simple.PromisesAreSimilar,
    simple.PromiseErrorHandling,
    generateReferencesSlide(simple.references),
  ],
  examples: [],
  recording: {
    link: "https://youtu.be/tNRVu9nsi18",
  },
  lab: {
    slug: "network-actions",
    title: "Storing Data on a Server (Final Project P1)",
  },
  references: simple.references,
};
