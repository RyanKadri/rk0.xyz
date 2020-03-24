import { Presentation } from "../../../../../presenter-core/src/services/types";
import { Agenda, AwsServices, DeployingPackages, DeploymentGoals, EnterAws, ExecutionSoFar, GoalsPart2, HowDoDeploy, ImportsHard, NatDiagram, Networking, Networking2, Networking3, NetworkingFirewalls, PackagingYourAssets, PackagingYourFrontend, ParcelImports, ParcelReview, ServersBasic, SetupAWS, Title, WhyImportsHard } from "./slides/simple";

export const lesson8: Presentation = {
    title: 'Going Public',
    description: 'Deploying your Projects "For Real"',
    slug: "deployments",
    slides: [
        Title,
        Agenda,
        ParcelReview,
        WhyImportsHard,
        ImportsHard,
        ParcelImports,
        HowDoDeploy,
        ExecutionSoFar,
        DeploymentGoals,
        PackagingYourAssets,
        PackagingYourFrontend,
        DeployingPackages,
        ServersBasic,
        Networking,
        NatDiagram,
        Networking2,
        Networking3,
        NetworkingFirewalls,
        GoalsPart2,
        EnterAws,
        AwsServices,
        SetupAWS
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/tZd-Jr36qD03G92R4QSDBKIoW9W5Lfqs0CQb__JZyE7jUHhQNFemYbsWZecJWFmrVhzlhx-kaXdGGBKL?continueMode=true&_x_zm_rtaid=JYrg2geLSPCMeKc-X8aj0A.1585006682134.bb1f9ab735a3582737dc83ac05fb6abd&_x_zm_rhtaid=209"
    }
}