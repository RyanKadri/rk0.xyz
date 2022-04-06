import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ActiveWaiting } from "./slides/active-waiting2";
import { RequestTemplate } from "./slides/request-examples";
import * as simple from "./slides/simple";

export const lesson9: Presentation = {
  title: `Everything but the kitchen async`,
  description: "Asynchronous JavaScript",
  slug: "async",
  slides: [
    simple.Title,
    ActiveWaiting,
    simple.WhatIsAsynchronous,
    simple.NonBlockingExample,
    simple.NonBlockingMoreExamples,
    simple.AsyncCallback,
    simple.WhatIsBlocking,
    simple.BlockingCodeCharacteristics,
    simple.BlockingCodeExample,
    simple.ConcurrencyModel,
    simple.NotAHugeProblem,
    simple.EventLoop,
    simple.RequestsResponses,
    simple.WhatIsAServer,
    simple.HowDoUseServers,
    simple.JSONExample,
    simple.ShowExample,
    simple.FetchExample,
    simple.WhatArePromises,
    simple.NestedTimeouts,
    simple.PromisesExample,
    simple.HttpRequest,
    simple.HttpResponse,
    simple.HttpHeaders,
    RequestTemplate,
  ],
  examples: [],
  lab: {
    slug: "using-apis",
    title: "Building a Pokedex",
  },
  recording: {
    link: "https://youtu.be/TrtHIFMIL6M",
  },
};
