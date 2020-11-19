import { Presentation } from "../../../../../presenter-core/src/services/types";
import { DNSLookup } from "./slides/finding-server";
import * as simple from "./slides/simple";

export const lesson11: Presentation = {
    title: `More $ more problems`,
    description: "Common JavaScript Libraries",
    slug: "common-libraries",
    slides: [
        simple.TitleSlide,
        simple.WhatIsLibrary,
        simple.HowToUse,
        simple.HowWriteLibrary,
        simple.BrainstormingLibraries,
        simple.BunchOfFunctions,
        simple.OneObject,
        simple.ModifyingBuiltIns,
        simple.JQuery,
        simple.MoProblems,
        simple.ChartJS,
        simple.HowDoesWebsiteWork,
        simple.WebsiteBasics,
        simple.Servers,
        DNSLookup,
        simple.IPNetworks,
        simple.Firewalls,
        simple.FirewallsNoReally,
        simple.RecapNecessities,
        simple.HostingIsHard,
        simple.BetterWay,
        simple.HostingProviders,
        simple.WhoHosts
    ],
    examples: [
        
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/sw7W4H_A4SalJwkFs5pGBLHk3BeKpdprtsqTt7xflTWHHhMAu6FG13D2FzOFraN1WA304n_Feia7BpWA.gZ9qpMfiRpy67pHe?continueMode=true"
    },
}