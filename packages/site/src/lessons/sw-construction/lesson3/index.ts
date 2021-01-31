import { RequestTemplate } from "./slides/request-example";
import { ResponseTemplate } from "./slides/response-example";
import { BookstoreBadModel, BookstoreModel, DependencyInjection, HowDoNetworking, HttpApis, HttpBasics, HttpDesigns, InstanceMethodApproach, InstanceMethodProsCons, LoggerProblemStatement, MultiFileProjects, NetworkingBasics, NetworkingPart2, SpringApproach, SpringPart, StaticMethodApproach, StaticMethodApproachProsCons, Title } from "./slides/simple";

export const lesson3 = {
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
        HttpApis,
        HttpDesigns,
        BookstoreModel,
        BookstoreBadModel,
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
    ]
}