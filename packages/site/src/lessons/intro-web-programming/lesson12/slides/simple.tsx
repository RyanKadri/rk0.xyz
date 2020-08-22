import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Server Side Javascript", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Server Basics",
    "HTTP",
    "REST",
    "How to Test an API",
    "Example App",
    "Data Modeling",
]);

export const TypesOfServers = generateContentSlide("Servers Revisited", [
    "How do we let a user view our site?",
    "How do we make different users see different things?",
    "How do we update the page on user action?"
]);

export const ServerConclusion = generateContentSlide("Server Overview", [
    "API + Static Hosting seems to be most common",
    "Easier to code. Friendlier to multi-client apps",
    "There is still need for dynamic HTML",
    "Can _potentially_ be faster"
]);

export const HowApiStructure = generateMessageSlide(
    "How do I structure my server?"
);

export const WhatTools = generateMessageSlide(
    "What tools do we have?"
);

export const HTTPDetails = generateContentSlide("HTTP", [
    "HTTP is a communication protocol for networked apps",
    "Originally used to transfer hypermedia",
    "Standardized (See https://tools.ietf.org/html/rfc6265)",
    "Stateless-ish",
    "Designed for intermediaries / scalability",
    "Request / Response Model",
]);

export const HttpRequest = generateContentSlide("HTTP Request", [
    "The client makes a request to a URL",
    "The request has a method (GET / POST / PUT / DELETE)",
    "Some requests have bodies",
    "Most requests have headers",
]);

export const HttpResponse = generateContentSlide("HTTP Response", [
    "The server returns a response",
    "The response has a numerical status code",
    "Most responses have bodies (text, html, xml, json)",
    "Most responses have headers",
]);

export const HttpHeaders = generateContentSlide("HTTP Headers", [
    "Contain metadata about the request",
    "Uppercase words separated by dashes",
    { text: "Examples include", children: [
        "Authorization",
        "Expires / Age / Cache-Control",
        "Cookie",
        "Accept / Content-Type",
        "Many more"
    ]}
]);

export const RestIntro = generateContentSlide("REST", [
    "HTTP is the toolkit. REST is the instruction manual",
    "Describes a style of making apps",
    "Cares about organization of app in terms of resources",
    "All resources have URLs",
    "Users can create, read, update, and delete resources",
]);

export const RestContinued = generateContentSlide("REST Theory", [
    "URLs represent resources (not encoding)",
    "Messages are self-descriptive",
    'Resources are "discoverable"',
    "Theoretically, clients don't need to be hardcoded"
]);

export const RestDownsides = generateContentSlide("REST in Real Life", [
    "Rest is really nice. Tons of projects use REST successfully",
    "REST gets pretty opinionated (HATEOAS). Not everyone follows every rule",
    "REST is not great when you want to fetch only some fields",
    "May need multiple round trips to collect all the data you need",
    "Some features are hard (eg batch deletion)"
]);

export const LetsCode = generateMessageSlide("Let's Code!");

export const HowDoTest = generateMessageSlide("How do I test an API?");
