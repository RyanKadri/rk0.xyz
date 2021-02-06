import { Presentation } from "../../../../../presenter-core/src/services/types";
import { RequestTemplate } from "./slides/request-example";
import { ResponseTemplate } from "./slides/response-example";
import { BookstoreBadModel, BookstoreModel, DependencyInjection, HowDoNetworking, HttpApis, HttpBasics, HttpBody, HttpDesigns, HttpHeaders, InstanceMethodApproach, InstanceMethodProsCons, LetsLookAtApi, LoggerProblemStatement, MultiFileProjects, NetworkingBasics, NetworkingPart2, RequestMethod, ResponseCodes, ResponseCodesContinued, SpringApproach, SpringPart, StaticMethodApproach, StaticMethodApproachProsCons, Title } from "./slides/simple";
import { UrlParts } from "./slides/url-parts";

export const lesson3: Presentation = {
    title: 'Network Services',
    description: "Using Java Spring to write HTTP Services",
    slug: "network-services",
    slides: [
        Title,
        HowDoNetworking,
        NetworkingBasics,
        NetworkingPart2,
        HttpBasics,
        UrlParts,
        RequestTemplate,
        ResponseTemplate,
        RequestMethod,
        HttpHeaders,
        HttpBody,
        ResponseCodes,
        ResponseCodesContinued,
        HttpApis,
        HttpDesigns,
        BookstoreModel,
        BookstoreBadModel,
        LetsLookAtApi,
        SpringPart,
        MultiFileProjects,
        LoggerProblemStatement,
        StaticMethodApproach,
        StaticMethodApproachProsCons,
        InstanceMethodApproach,
        InstanceMethodProsCons,
        DependencyInjection,
        SpringApproach
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/eykQgAlwkwZh48_XbPfCOm-vhWjsJtBxS9TI04-5E69oHK0ZiZVMR9YWBGuvISUcZyPEEw3WVyp4mi6d.pdcUZvjf0aQHPNTb?continueMode=true"
    }
}