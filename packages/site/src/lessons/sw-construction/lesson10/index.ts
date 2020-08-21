import { Presentation } from "../../../../../presenter-core/src/services/types";
import { HttpHeaders, HttpRequest, HttpResponse, RestDownsides, RestIntro } from "../../archived/intro-web-programming/lesson12/slides/simple";
import { BadRequest, OkayRequest, RequestTemplate, RestRequest } from "./slides/request-examples";
import { Agenda, APIComesWith, ApiCommunication, ApiConsiderations, ApiIs, EnterRest, GraphQLDownsides, GraphQLPreview, HowDoTest, HumanSide, References, Title, WhatIsApi } from "./slides/simple";

export const lesson10: Presentation = {
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
        GraphQLPreview,
        GraphQLDownsides,
        References
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/share/yd0qJZ7Qq15ITYXC6XiCY64FOZ7EX6a81iFM-PRbn05ZApiz07cGTNkQzE_w19P6"
    }
}