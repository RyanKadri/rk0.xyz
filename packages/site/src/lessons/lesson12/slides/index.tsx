import { Presentation } from "../../../../../presenter-core/src/services/types";
import { ApiLab } from "../lab/api-lab";
import { DynamicServer } from "./dynamic-server";
import * as simple from "./simple";
import { StaticServer } from "./static-server-example";
import { StaticPlusApi } from "./static-with-api";

export const lesson12: Presentation = {
    title: `A Time to REST`,
    description: "Servers and APIs",
    slug: "servers-apis",
    slides: [
        simple.Title,
        simple.Agenda,
        simple.TypesOfServers,
        StaticServer,
        DynamicServer,
        StaticPlusApi,
        simple.ServerConclusion,
        simple.HowApiStructure,
        simple.WhatTools,
        simple.HTTPDetails,
        simple.HttpRequest,
        simple.HttpResponse,
        simple.HttpHeaders,
        simple.HowApiStructure,
        simple.RestIntro,
        simple.RestContinued,
        simple.RestDownsides,
        simple.LetsCode,
        simple.HowDoTest
    ],
    examples: [
        
    ],
    recording: {
        link: "https://youtu.be/dRdTwOuUF1k"
    },
    lab: {
        title: "Practicing REST",
        slug: "practice-rest",
        LabView: ApiLab
    }
}