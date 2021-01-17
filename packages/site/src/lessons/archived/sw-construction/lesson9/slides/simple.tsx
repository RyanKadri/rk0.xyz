import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "Deploying Websites / Analytics",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review Last Quiz",
    "Class Updates (Participation and Final Project)",
    "Web App Classifications",
    "Web Deployment Theory",
    { text: "Deploying Static Sites", children: [
        "With AWS",
        "With Netlify"
    ] },
    "Continuous Deployment",
    "Using Google Analytics",
]);

export const HowDoDynamicApp = generateMessageSlide(
    "How do we build a web application?"
);

export const StaticSite = generateContentSlide("Static Web Sites", [
    "The earliest web sites were almost entirely static",
    "A web server's job was to serve files from the filesystem",
    "Allowed owner to fine-tune many aspects of the site (caching, permissions, rewrites)",
    "Admin generally did not write code that touched Apache",
    "Apache, Nginx, IIS, etc. excelled in this space",
]);

export const DynamicSite = generateContentSlide("Server-Side Dynamic Pages", [
    "As web sites became more complex/dynamic, this kind of app became more popular",
    "A web server would dynamically create pages when requested",
    "Often create pages from a template file",
    "PHP, JSPs, Struts, etc. all made this approach easier"
]);

export const StaticWithApis = generateContentSlide("Static Sites with APIs", [
    'Serves static "instructions" for the page and fetch data',
    "Usually interacts with server APIs that return data in a standard format",
    'API server does not "know" about the client',
    "Client makes presentation decisions"
]);

export const DeployingStaticAssets = generateContentSlide("Deploying Static Assets", [
    "Static sites can be heavily optimized",
    "You can cache / (pre)compress assets (in server memory and on client)",
    'Assets can be distributed between geographically diverse "edge" servers',
    "You can minify code for the smallest bundle size"
]);

export const LetsDeploy = generateMessageSlide("Let's Deploy!");

export const CanITest = generateMessageSlide("Can I test my code?");

export const EnterJest = generateContentSlide("Enter Jest", [
    "Developed by Facebook",
    "Works mostly out of the box",
    "Behavior driven development testing style",
    "Good for unit tests and integration tests"
]);

export const ContinuousDeployment = generateContentSlide("Continuous Delivery", [
    "How do you make it simple to test and deploy code?",
    "How often should I deploy code?",
    "What should my branching strategy be?"
]);

export const GoogleAnalytics = generateContentSlide("Google Analytics", [
    "Google Analytics helps you understand who is visiting your site",
    "Helps track views over time "
])