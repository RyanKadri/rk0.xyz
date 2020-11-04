import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("Version Control and Hosting", "Ryan Kadri");

export const AgendaSlide = generateContentSlide("Agenda", [
    "Code Ownership and Attribution",
    "Version Control - How and Why",
    "GitHub and Open Source",
    "Internet Architecture",
    "Static Hosting Solutions"
]);

export const Attribution = generateContentSlide("Code Ownership / Attribution", [
    "How do developers share code?",
    // "What is plagiarism in code?",
    "How does Open Source fit in?",
    "What can you do?"
]);

export const Licensing = generateContentSlide("Code Licensing", [
    "Big open source projects usually have licenses",
    "There are a lot of common licenses that most projects use",
    { text: "Licenses state:", children: [
        "What you can/cannot do with code (sell it, change it, distribute it)",
        "What you must do in order to use it (give credit, include source)"
    ]},
    "Companies like some licenses (MIT, Apache 2, BSD 2-Clause)",
    "And don't like others (GPL, AGPL)",
    "Others are funny but not legally binding (WTFPL, Beerware)"
]);

// export const Plagiarism = generateContentSlide("Plagiarism in Code", [
//     "If code is given away for free, can you plagiarize it?",
//     "What if there is no license?",
//     "What if you are in class?",
//     "But learning from other people's code is important!"
// ]);

export const VersionControlIntro = generateMessageSlide("So how do I control versions?");

export const VersionControl = generateContentSlide("With Version Control!", [
    "Imagine your boss tells you to add a page to the company website",
    "As you are working on that page, the boss asks if you could take a break and add some links to the header",
    "You finish the links but then your boss wants you to wait a week to release the change",
    "You end up finishing the new page before the week is over and release it",
    "The next week comes around and you are able to release your change"
]);

export const HandleWithoutVC = generateMessageSlide("How do you manage that?");

export const PossibleVCStrats = generateContentSlide("Keeping Track", [
    "Maybe you copy the original project folder",
    "When you have to switch tasks, maybe you make a copy",
    "Maybe you make a backup if you are trying something new",
    'Maybe you make a backup for important "checkpoints"',
    "But what do you make a backup of?"
]);

export const Difficulties = generateContentSlide("Difficulties", [
    "How do you remember what each change did?",
    "How do you remember what changed between each change?",
    "Can you reverse some changes but not all?",
    "What if you want to work on multiple parts at once?"
]);

export const EnterGit = generateContentSlide("Enter Git", [
    "Git makes a graph out of your code changes",
    "Moving between nodes gives you different snapshots of your code",
    "You can experiment with a number of things safely",
    "You can work with a team and share your code easily"
]);

export const GitExamples = generateMessageSlide("Let's see some examples");

export const EnterGithub = generateContentSlide("Enter Github", [
    "Github is the largest hosting site for git-managed projects",
    "Tons of open source projects are on Github",
    "Users review each others' work, track bugs, and manage projects"
]);

export const StaticHosting = generateTitleSlide("Static Hosting", "Ryan Kadri");

export const HostingSoFar = generateContentSlide("HostingSoFar", [
    "So far, we have only created sites for our own browser",
    "We used the file protocol and an HTTP server",
    "What exactly is a Server?",
    "What exactly is HTTP?",
]);

export const Servers = generateContentSlide("What is a Server?", [
    "Depends on the context",
    "Can be hardware or software",
    "Nothing too special"
]);

export const HttpOverview = generateContentSlide("What is HTTP?", [
    "HTTP is a way to transfer web pages",
    "Makes requests to URLs",
    { text: `Has a number of request "methods"`, children: [
        "GET - Read",
        "PUT - Create or Replace",
        "POST - Create a Subresource",
        "DELETE - Like it sounds"
    ] },
    "When you go to a site, the browser does a GET",
    "Requests return responses and response codes"
]);

export const URL = generateContentSlide("URLs", [
    "URLs identify a resource on a network",
    { text: "Composed of a few parts: ", children: [
        "Protocol",
        "Host / Port",
        "Path",
        "Query"
    ]}
]);

export const ServersTalk = generateContentSlide("How Do Computers Talk?", [
    'URLs "resolve" to IP addresses using DNS',
    "There are public and private IPs",
    "We all have private IPs right now",
    "To be an internet server, you just need a public IP"
]);

export const GettingStarted = generateContentSlide("Self Hosting is Hard", [
    "No power/internet outages",
    `Need to run "real" server software`,
    "Easy to screw up security"
]);

export const WhoHosts = generateContentSlide("So who will host me?", [
    "Tons of people!",
    "AWS (Amazon)",
    "GitHub (Microsoft)",
    "Netlify",
    "Firebase (Google)"
]);