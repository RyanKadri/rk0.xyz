import { Presentation } from "../../../../../../presenter-core/src/services/types";
import { NodeScripting } from "../lab/node-lab";
import { ConsoleLogging } from "./console-logging";
import { NodeErrorHandling } from "./node-error-cb";
import { NodeFileOps } from "./node-file-ops";
import { NodeNpm } from "./node-npm";
import { ReqireImports } from "./require-imports";
import * as simple from "./simple";

export const lesson11: Presentation = {
    title: `A 'Node to Joy`,
    description: "JavaScript Outside the Browser",
    slug: "node-starter",
    slides: [
        simple.Title,
        simple.IsJavaScriptUseful,
        simple.WhatIsProgrammingLanguage,
        simple.BrowserLimitations,
        simple.HowDoCommandLine,
        simple.CommandLinePrograms,
        simple.WorkingWithShell,
        simple.HowDoCommandLineJs,
        simple.EnterNode,
        ConsoleLogging,
        ReqireImports,
        NodeFileOps,
        NodeErrorHandling,
        NodeNpm
    ],
    examples: [
        
    ],
    recording: {
        link: "https://youtu.be/DxqsWefhAQw"
    },
    lab: {
        title: "Node.JS - Scripting and Servers",
        slug: "node-scripting",
        LabView: NodeScripting
    }
}