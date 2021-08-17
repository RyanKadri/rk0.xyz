import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
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
        simple.WhoHosts,
        generateReferencesSlide(simple.references)
    ],
    examples: [
        
    ],
    recording: {
        link: "https://youtu.be/zAx2rTP5T6E"
    },
    lab: {
        slug: "javascript-libraries",
        title: "Using JavaScript Libraries",
    },
    references: simple.references
}