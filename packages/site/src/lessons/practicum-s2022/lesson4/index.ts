import { Presentation } from "../../../../../presenter-core/src/services/types";
import { JSONExample } from "./slides/json";
import { RequestTemplate } from "./slides/request-example";
import { ResponseTemplate } from "./slides/response-example";
import { Apis, HowDoNetworking, HttpBasics, HttpBody, HttpHeaders, NetworkAPIs, NetworkingBasics, NetworkingPart2, Postman, RequestMethod, ResponseCodes, ResponseCodesContinued, Spring, SpringCode, SpringInitializer, Title, WhatIsApi } from "./slides/simple";
import { UrlParts } from "./slides/url-parts";

export const lesson4: Presentation = {
    title: 'Network Services',
    description: "Using Java Spring to write HTTP Services",
    slug: "network-services",
    slides: [
        Title,
        HowDoNetworking,
        NetworkingBasics,
        NetworkingPart2,
        HttpBasics,
        RequestTemplate,
        ResponseTemplate,
        UrlParts,
        RequestMethod,
        HttpHeaders,
        HttpBody,
        JSONExample,
        ResponseCodes,
        ResponseCodesContinued,
        WhatIsApi,
        Apis,
        NetworkAPIs,
        Spring,
        SpringInitializer,
        SpringCode,
        Postman,
    ],
    examples: [
    ],
    lab: {
        slug: "guessing-game",
        title: "Guessing Game"
    },
    externalExamples: [
        { url: "https://github.com/RyanKadri/spring-2022-practicum-examples/tree/main/4-networking/spring-example" }
    ]
}