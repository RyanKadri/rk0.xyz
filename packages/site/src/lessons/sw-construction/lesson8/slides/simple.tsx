import React from "react";
import { generateContentSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import nat from "./NAT.png";

export const Title = generateTitleSlide(
    "Deploying Your Projects",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review Assignment 3",
    "Review Parcel",
    "Deployment Goals",
    "Packaging Your App: Backend",
    "Packaging Your App: Frontend",
    "Networking",
    "Cloud Hosting Overview",
    "VMs",
    "Serverless"
]);

export const ParcelReview = generateContentSlide("Parcel", [
    "Parcel makes it easier to build frontend apps",
    "Optimizes final code bundle for you",
    'Enables features like JS "imports"',
    "Runs a server for you"
]);

export const WhyImportsHard = generateMessageSlide(
    "Java can easily import code from other files. Why can't JavaScript?"
);

export const ImportsHard = generateContentSlide("JS Imports are Hard", [
    "The file might not exist",
    "It takes a while to load",
    "Files can come from a bunch of different sources"
]);

export const ParcelImports = generateContentSlide("Imports with Parcel", [
    "Parcel makes imports easier",
    "Collects all imported code and drops it in a couple files",
    "Browser only makes one round trip",
    "Don't need to think about the network much",
    "Lets you import libraries!"
]);

export const HowDoDeploy = generateMessageSlide(
    "How do you deploy applications so that others can use them?"
);

export const ExecutionSoFar = generateContentSlide("Code Execution So Far", [
    "Running server code in an IDE",
    "Running browser code through the LiveServer extension",
    "Emailing zip files or GitHub Repos"
]);

export const DeploymentGoals = generateContentSlide("Deployment Goals", [
    "We want to run Java code without an IDE",
    "Run code on a remote server instead of a personal computer",
    "Package up code for distribution",
    "Open up remote server to handle requests",
    "(Eventually) get a domain name"
]);

export const PackagingYourAssets = generateContentSlide("Packaging Backend Code", [
    "JAR files are a good way to package Java projects",
    "Spring Boot makes it easy to build a deployable JAR file",
    <span>You can run your code with a simple <code>java -jar app.jar</code></span>,
    "Other kinds of Java deployments are also possible (deploying to an already-existing server)"
]);

export const PackagingYourFrontend = generateContentSlide("Packaging Frontend Code", [
    "Frontend code can sometimes be easy. Just directly upload and deploy source",
    "Often, there is a build step involved",
    "Usually end up uploading/deploying generated files",
    "Some hosts will have you upload a single zip file"
]);

export const DeployingPackages = generateMessageSlide(
    "Now that we have something to deploy, how do we make it publicly available?"
);

export const ServersBasic = generateContentSlide("Server Basics", [
    'How do "real" servers behave?',
    "Servers are really nothing too special",
    "The hardware behind a server may just look like regular old computers",
    "Servers often run the server version of common Linux OSes",
    "Networking restrictions are the hurdle to get over"
]);

export const Networking = generateContentSlide("Networking Basics: IP Addresses", [
    "Computers on the internet are identified by an IP address",
    "Not all IP addresses are internet-connectable",
    "Most private networks have a bunch of private internal IPs",
    "A process called NAT lets devices share a public IP"
]);

export const NatDiagram = generateMediaSlide(<img src={ nat } alt="NAT Diagram" />)

export const Networking2 = generateContentSlide("Networking Basics: Public IPs", [
    "Your ISP probably gives you a single public IP",
    "You often can expose that public IP address to the outside world",
    "Routers won't just forward traffic to your computer though",
    "Port forwarding is a trick that lets you run servers behind a home router"
]);

export const Networking3 = generateContentSlide("Networking Basics: DNS", [
    "DNS lets you associate an IP address with a friendly URL",
    "You need to control a domain for that",
    "DNS has different record types for different purposes",
    "A records are the simplest. They map from URL to IP directly"
]);

export const NetworkingFirewalls = generateContentSlide("Networking Basics: Firewalls", [
    "A firewall lets you set up restrictions about how traffic flows to resources behind it",
    "Can set up input and output rules",
    "You often configure which ports to allow traffic to and which IPs to accept traffic from",
]);

export const GoalsPart2 = generateContentSlide("Goals: Part 2", [
    { text: "We need:", children: [
        "A server with a public IP address",
        "A way to login and copy our assets",
        "Firewall rules to allow traffic"
    ]}
]);

export const EnterAws = generateContentSlide("Enter AWS", [
    "AWS is a Cloud Computing platform from Amazon",
    "Has a ton of computing features and lets you manage everything you need in one place",
    "Broken down into services that accomplish different tasks",
    "The whole platform is a super complex topic",
    "But you take break off little pieces and use what you need"
]);

export const AwsServices = generateContentSlide("AWS Services", [
    "EC2 == A server to run your project",
    "Security Groups == Firewall Config",
    "S3 == A place to store your code",
    "IAM == Account Security"
]);

export const SetupAWS = generateMediaSlide(
    <iframe width="1580" height="100%" src="https://www.youtube.com/embed/WviHsoz8yHk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen />,
    undefined,
    "Setting up AWS"
)