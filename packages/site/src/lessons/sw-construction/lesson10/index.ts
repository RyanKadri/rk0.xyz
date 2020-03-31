import { HttpHeaders, HttpRequest, HttpResponse, RestDownsides, RestIntro } from "../../intro-web-programming/lesson12/slides/simple";
import { BadRequest, OkayRequest, RequestTemplate, RestRequest } from "./slides/request-examples";
import { Agenda, APIComesWith, ApiCommunication, ApiConsiderations, ApiIs, EnterRest, HowDoTest, HumanSide, Title, WhatIsApi } from "./slides/simple";

export const lesson10 = {
    title: 'The Pursuit of APIness',
    description: 'API Design',
    slug: "api-design",
    slides: [
        Title,
        Agenda,
        WhatIsApi,
        ApiIs,
        APIComesWith,
        ApiConsiderations,
        ApiCommunication,
        HumanSide,
        HttpRequest,
        HttpResponse,
        HttpHeaders,
        RequestTemplate,
        BadRequest,
        OkayRequest,
        EnterRest,
        RestIntro,
        RestRequest,
        RestDownsides,
        HowDoTest,

    ],
    examples: [
    ]
}