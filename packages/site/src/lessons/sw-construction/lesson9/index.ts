import { Presentation } from "../../../../../presenter-core/src/services/types";
import { Agenda, CanITest, ContinuousDeployment, DeployingStaticAssets, DynamicSite, EnterJest, HowDoDynamicApp, LetsDeploy, StaticSite, StaticWithApis, Title } from "./slides/simple";
import { WebAppComparison } from "./slides/WebAppProsCons";

export const lesson9: Presentation = {
    title: 'Publishing websites',
    description: 'Deploying websites and seeing if anyone uses them',
    slug: "websites-and-analytics",
    slides: [
        Title,
        Agenda,
        HowDoDynamicApp,
        StaticSite,
        DynamicSite,
        StaticWithApis,
        WebAppComparison,
        DeployingStaticAssets,
        LetsDeploy,
        CanITest,
        EnterJest,
        ContinuousDeployment
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/share/vOtpC4ip0kNLaZXJ61HCdbJxILbjT6a823UY8qENnk9Bgr-_TBFKIR-5axoUoGLF"
    }
}