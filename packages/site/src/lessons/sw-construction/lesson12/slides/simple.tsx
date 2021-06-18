import { Link } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMediaAssistSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import dockerMeme from "./docker-layers.jpg";
import docker from "./docker.png";

export const Title = generateTitleSlide("Containers and Cloud Functions", "Ryan Kadri");

export const InstallingSoftware = generateContentSlide("Setting up Complex Software", [
    "Setting up complex software can be tricky",
    "Some software is installed with a one-click installer",
    "Other software takes more work",
    { text: "Among other things, you may need to:", children: [
        "Install the right dependencies",
        "Compile the code",
        "Copy around some files",
        "Set up users and permissions",
        "Set up environment variables"
    ] },
]);

export const Docker = generateMediaAssistSlide("Enter Docker", [
    <><Link href="https://www.docker.com/">Docker</Link> is a tool for OS-level virtualization</>,
    "Can be installed on Linux, Mac, and Windows (with some hoops)",
    "Lets you define a full VM-like operating environment for your software",
    'You can bundle your app up into "containers" for isolation and easy deployment',
    'You can manage "images" that act like a template for containers',
    "You can share your images with others",
], <Image src={ docker } />);

export const Disclaimer = generateMessageSlide(
    "Disclaimer: Containers are a big concept. Docker is very " + 
    "popular but is not the only approach"
);

export const Containers = generateContentSlide("Docker Containers", [
    "Containers create a well-defined environment for an application to run",
    "Containers behave a lot like a full virtual machine",
    "You can often start a shell, run code, install software, etc",
    "You can run (multiple) Containers on a single machine...",
    "... but they are mostly isolated from your host operating system",
    "... except at a few interface points",
    "Much lighter weight than Virtual Machines. Not quite as flexible"
]);

export const Images = generateCodeSlide("Container Images", [
    "When building a container, you first define a Docker image",
    'The definitions usually goes in a "Dockerfile"',
    "Define the starting point for where to build from",
    "Use sequential commands to define the desired environment state"
], {
    language: "docker",
    code: `
FROM maven:3.8.1-jdk-11 as builder

WORKDIR /app
COPY ./pom.xml /app
COPY src /app/src
RUN mvn package`
});

export const BuildingImages = generateContentSlide("Building Images", [
    'Docker images will build in the context of the "FROM" environment',
    "Builds run with only the information you share (via COPY)",
    'Builds should run "from scratch" and be reproducible anywhere',
    'Builds should rely only on "source code" rather than build artifacts or dependencies',
    "Builds can be slow and images can be very large"
]);

export const ShrekMeme = generateMediaSlide(<Image src={ dockerMeme } />)

export const ImageLayers = generateContentSlide("Image Layers", [
    'Each step in the Docker build creates a "layer"',
    "Docker looks for changes before starting from a specific build line",
    "Starts from the earliest line with a change",
    "You should be strategic about the order of commands",
    "Downloads will only pull updated layers",
    "This is really nice for updating a container"
]);

export const ImageSharing = generateContentSlide("Sharing Images", [
    "Docker makes it very easy to share images",
    "Good way to play around with some development software",
    <>Many images are hosted on <Link href="https://hub.docker.com">Docker Hub</Link></>,
    <>Trying a new database is as easy as <code>docker run -e POSTGRES_PASSWORD=mysecretpassword -p "5432:5432" postgres</code></>,
    "Makes it easy to make sure the same code goes to each environment (just deploy images)"
]);

export const ServerlessServices = generateContentSlide("Managed Services", [
    "Managing servers can be a pain",
    "You need to make updates, handle operating system config, etc",
    "Many AWS managed services and SaaS providers manage servers for you",
    "You get charged for API usage -- not uptime",
    "S3 and Dynamo are Serverless",
    "EC2 and many other services are not"
])

export const Serverless = generateContentSlide("Serverless Compute", [
    "When you write code, you may not want to think about where it'll run",
    "It'd be nice if you could just deploy code and have it called as needed",
    'Your application can be "down" when not handling requests',
    "This can be a lot cheaper than always-on servers",
    'Serverless is an extension of "pay as you go"',
    <>The code still runs on <em>a server</em>. You just don't own it</>,
]);

export const Lambdas = generateContentSlide("AWS Lambdas", [
    "AWS Lambda is a big AWS serverless offering",
    "You give AWS a chunk of code",
    { text: 'Your code is called in response to certain events like...', children: [
        "A file is uploaded to an S3 bucket",
        "An item is stored in DynamoDB",
        "Somebody calls a REST API"
    ] },
    "AWS will run as many instances of your code in parallel as needed",
    <>You are <Link href="https://aws.amazon.com/lambda/pricing/">charged</Link> per ms of execution</>
]);

export const references: Reference[] = [
    { label: "Terraform AWS Reference", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs" },
    { label: "Installing Terraform", url: "https://learn.hashicorp.com/tutorials/terraform/install-cli" }
]