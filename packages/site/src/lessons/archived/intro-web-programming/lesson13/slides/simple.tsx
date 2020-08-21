import React from "react";
import { generateContentSlide, generateFullSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Hosting APIs", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Servers Review",
    "Hosting APIs with Firebase",
    "Hosting Data with Firebase",
    "Miscellaneous Topics",
    "Preview (Modern Frameworks)"
]);

export const WhoWillHost = generateMessageSlide("Who will host our API servers?");

export const HostingRisks = generateContentSlide("Hosting Risks", [
    "Hosting other people's code is dangerous",
    "Want to give maximum capability without room for abuse",
    { text: "Node programs can:", children: [
        "Tinker with your machine",
        "rm -rf /",
        "Attack other servers",
        "Host Malware"
    ]},
]);

export const NodeCapableOf = generateFullSlide(
    <iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/B1XqrTgRpfM?start=102" 
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
);

export const HostingHistory = generateContentSlide("History of Hosting", [
    "Servers Hosted in Data Centers",
    "Hosting Providers (Static and PHP)",
    "VM / VPS / Containers",
    '"Serverless"',
]);

export const CloudComputing = generateContentSlide("Cloud Computing", [
    "Services provisioned on-demand from provider",
    "Fast startup time (virtualization)",
    "Pay as you go",
    "Auto-scaling (changes the way you code)"
]);

export const FirebaseIntro = generateContentSlide("Firebase", [
    "Platform developed by Google",
    "Platform as a Service (PaaS)",
    "Makes it easy to host a modern site",
    { text: "Has solutions for many common tasks", children: [
        "Static Sites",
        "Code Hosting",
        "Database",
        "File Storage",
        "Authorization"
    ] },
    'Offload "hard problems" to Google'
]);


export const FirebaseFunctions = generateContentSlide("Firebase Functions", [
    "Execute code without thinking about servers",
    "Multiple instances run in parallel",
    "Can run Express servers",
    "Temporary File System",
    "Temporary Variables",
]);

export const HowDoUseFunctions = generateMessageSlide("So how do we make something useful?");

export const FirebaseOther = generateContentSlide("Cloud Computing", [
    "Need to change the way you code",
    "Assume different servers can handle any request",
    "Rely on centralized storage mechanisms",
    "Databases, File Systems, etc",
    { text: "For Firebase: ", children: [
        "Realtime Database",
        "Firestore",
        "Cloud Storage (File Storage)"
    ]}
]);

export const LetsCode = generateMessageSlide("Let's Code");

export const MiscTopics = generateTitleSlide("Miscellaneous Topics", "Ryan Kadri");

export const PreppingCode = generateContentSlide("Prepping Static Content", [
    { text: "Compression - Magically shrink assets in transit", children: [
        "The client sees the exact original code"
    ]},
    { text: "Minification - Uglify the code to make it smaller", children: [
        "The client sees ugly code"
    ]},
    "Dead Code Elimination - Remove stuff you aren't using",
    "Transpilation - Improve compatibility"
]);