import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";
import { generateQuestionSlide } from "../../../../shared/formal-question-slide";
import { generateReferencesSlide } from "../../../../shared/references-slide";

export const Title = generateTitleSlide(
    "Designing APIs",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review Last Quiz",
    "Review Assignment 3",
    "Defining an API",
    "HTTP APIs",
    "REST APIs",
    "Testing APIs",
    "GraphQL (Preview)",
    "Discoverable APIs"
]);

export const WhatIsApi = generateMessageSlide(
    "What is an API?"
);

export const ApiIs = generateContentSlide("APIs", [
    "API == Application Programming Interface",
    "The gateway into a computer system from the outside",
    "Defines how other systems can interact with yours",
    "Libraries have APIs",
    "Servers have APIs",
    "Command line tools have APIs"
]);

export const APIComesWith = generateContentSlide("APIs", [
    "Function purpose / operation",
    "Parameter / return types",
    "What types of errors do you expect?",
    "Are there any side effects?",
    "How do I accomplish tasks?"
]);

export const ApiConsiderations = generateContentSlide("API Considerations", [
    "Interacting with a computer: precision is important",
    'There is no "intelligent" entity reading your response',
    "Java makes this easier with static types",
    "Methods have to speak the same language or your code will not compile",
    "Libraries can still enforce this precision",
    "JavaScript is harder. No types mean you need to communicate more",
    "Changing an API may break a consumer (semantic versioning)"
]);

export const ApiCommunication = generateContentSlide("Remote APIs", [
    "APIs get more complicated when they're not in the same code base / process",
    "You're usually working via direct message passing",
    "Most languages put a lot of effort into working with strings",
    "Need to agree on message structure / encoding / format",
    "Probably want to use a standard format like JSON (99% of the time)"
]);

export const HumanSide = generateContentSlide("APIs: The Human Side", [
    "A computer is interacting with your API but a human has to program the computer",
    "Principle of least surprise",
    "Good naming",
    '"Reasonable" behavior',
    "Small surface area",
    "Error handling"
]);

export const HowDoHttpAPI = generateQuestionSlide(
    "How do I make an HTTP API?"
);

export const EnterRest = generateMessageSlide(
    "Enter REST"
);

export const HowDoTest = generateMessageSlide(
    "How do I test a REST API?"
);

export const GraphQLPreview = generateContentSlide("GraphQL (Preview)", [
    "New standard to replace REST",
    "Client says exactly how much data they want",
    "Often requires only one round trip",
    "Versioning is way easier",
    "Better support for multiple clients",
    "Easier to inspect"
]);

export const GraphQLDownsides = generateContentSlide("GraphQL Downsides", [
    "Newer tooling (worse DX)",
    "Harder to secure (from the outside)",
    "Can be hard to write efficient code",
    "Not as middleware-friendly (yet?)",
]);

export const References = generateReferencesSlide([
    { label: "Stack Overflow REST Practices", url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/" },
    { label: "GraphQL Documentation", url: "https://graphql.org/learn/" },
    { label: "GitHub GraphQL API", url: "https://developer.github.com/v4/explorer/" },
    { label: "Tracking Snippet/Dashboard Solution", url: "https://github.com/RyanKadri/practicum-analytics-snippet" },
    { label: "Tracking Server Solution", url: "https://github.com/RyanKadri/practicum-analytics-server" }
])