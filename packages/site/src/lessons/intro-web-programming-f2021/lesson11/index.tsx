import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { RequestTemplate } from "../lesson10/slides/request-example";
import { ResponseTemplate } from "../lesson10/slides/response-example";
import * as review from "../lesson10/slides/simple";
import { DNSLookup } from "./slides/finding-server";
import * as simple from "./slides/simple";
import { UrlParts } from "./slides/url-parts";

export const lesson11: Presentation = {
  title: `More $ more problems`,
  description: "JS Libraries and Web Hosting",
  slug: "common-libraries",
  slides: [
    simple.TitleSlide,
    simple.InReview,
    review.Json,
    RequestTemplate,
    ResponseTemplate,
    review.RequestMethod,
    review.HttpHeaders,
    review.HttpBody,
    simple.BuiltIn,
    simple.WhatIsLibrary,
    simple.HowToImport,
    simple.HowWriteLibrary,
    simple.BrainstormingLibraries,
    simple.BunchOfFunctions,
    simple.OneObject,
    simple.JQuery,
    simple.MoProblems,
    simple.ChartJS,
    simple.HowDoesWebsiteWork,
    simple.WebsiteBasics,
    UrlParts,
    simple.DomainNames,
    DNSLookup,
    simple.IPNetworks,
    simple.Ports,
    simple.FirewallsNoReally,
    simple.RecapNecessities,
    simple.HostingIsHard,
    simple.BetterWay,
    simple.HostingProviders,
    simple.WhoHosts,
    generateReferencesSlide(simple.references),
  ],
  examples: [],
  recording: {
    link: "https://youtu.be/cbT1yjM7Fso",
  },
  lab: {
    slug: "javascript-libraries",
    title: "Using JavaScript Libraries (Final Project P2)",
  },
  references: simple.references,
};
