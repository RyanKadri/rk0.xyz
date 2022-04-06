import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMediaAssistSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synDocker } from "../../../../common/highlighting";
import docker from "./docker.png";

export const Title = generateTitleSlide("Containers and Cloud Functions", "Ryan Kadri");

export const StartupScriptExample = generateCodeSlide(
  "Example EC2 Startup Script",
  [
    "This was the final EC2 startup script from last class",
    "Installs Java, a JAR file, a data file, and a monitoring agent",
  ],
  {
    code: synDocker`
#!/bin/bash
cd /home/ec2-user
sudo yum install -y java-17-amazon-corretto
aws s3 cp s3://my-pocket/data.jar .
aws s3 cp s3://my-pocket/real-estate-data.csv .
aws s3 cp s3://my-pocket/newrelic.yml .
aws s3 cp s3://my-pocket/newrelic-agent.jar .
curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash \
  && sudo NEW_RELIC_API_KEY=FAKE_KEY NEW_RELIC_ACCOUNT_ID=12345 /usr/local/bin/newrelic install
`,
  }
);

export const RepeatableStartup = generateContentSlide("Repeatable Setup", [
  "The previous script helps us automatically set up new EC2 instances",
  "This is less error-prone than having a person manually set them up",
  "This build does not necessarily do the same thing every time",
  "What if a developer updates the JAR file? Or the data file?",
  "Maybe it would help to use version numbers on all of those files?",
  "...but that would be a pain",
]);

export const InstallingSoftware = generateContentSlide("Software Setup", [
  "Setting up complex software can be tricky",
  {
    text: "Among other things, you may need to:",
    children: [
      "Install the right dependencies",
      "Compile the code",
      "Copy around some files",
      "Set up users and permissions",
      "Set up environment variables",
    ],
  },
]);

export const Docker = generateMediaAssistSlide(
  "Enter Docker",
  [
    <>
      <Link href="https://www.docker.com/">Docker</Link> is a tool for OS-level virtualization
    </>,
    "Lets you define a VM-like operating environment for your software",
    'You can bundle your app up into "containers" for isolation and easy deployment',
    'You can manage "images" that act like a template for containers',
    "You can share your images with others",
    "Can be installed on Linux, Mac, and Windows",
  ],
  <img src={docker.src} />
);

export const Disclaimer = generateMessageSlide(
  "Disclaimer: Containers are a broader concept than Docker. Docker is probably the most popular approach"
);

export const Containers = generateContentSlide("Docker Containers", [
  "Containers create a well-defined environment for an application to run",
  "Containers behave a lot like a full virtual machine",
  "You can often start a shell, run code, install software, etc",
  "You can run (multiple) Containers on a single machine...",
  "... and they are mostly isolated from your host operating system",
  "... except at a few interface points",
  "Much lighter weight than Virtual Machines. Not quite as flexible",
]);

export const UsingImages = generateContentSlide("Docker Images", [
  "Docker containers can be created based off an image",
  "An image is a snapshot that you can create containers from",
  <>
    There are a lot of good public images on <Link href="https://hub.docker.com/">Docker Hub</Link>
  </>,
  "This is a great way to test out some software (although image quality varies)",
  <>
    Example: <code>docker run -t -i -p 127.0.0.1:8080:8080 zadam/trilium:0.50.3</code>
  </>,
]);

export const DockerContainerCommands = generateContentSlide("Container Commands", [
  <>
    <code>docker pull</code>: Download an image
  </>,
  {
    text: (
      <>
        <code>docker run</code>: Run a command in a new container
      </>
    ),
    children: [
      <>
        <code>-p</code> expose/forward network ports
      </>,
      <>
        <code>-it</code> (technically two options) that let you run an interactive shell in a
        container
      </>,
      <>
        <code>--rm</code> remove the container after it runs
      </>,
    ],
  },
  <>
    <code>docker exec</code>: Run a command in an already-running container
  </>,
  <>
    <code>docker ps</code>: List the running containers
  </>,
  <>
    <code>docker container stop</code>: Stop a running container
  </>,
]);

export const BuildingImages = generateCodeSlide(
  "Building Images",
  [
    "You can also define your own images pretty easily",
    'The definitions usually goes in a "Dockerfile"',
    "Define the starting point for where to build from",
    "Use sequential commands to define the desired environment state",
    <>
      Run the build with <code>docker build .</code>
    </>,
  ],
  {
    code: synDocker`FROM maven:3.8.4-openjdk-17

WORKDIR /app
COPY ./pom.xml /app
COPY src /app/src
RUN mvn package
CMD java -jar data.jar`,
  }
);

export const DockerfileExplanation = generateContentSlide("Dockerfile Commands", [
  <>
    <code>FROM</code>: The "base image" to build off of
  </>,
  <>
    <code>WORKDIR</code>: The directory in the base image to work in and start from
  </>,
  <>
    <code>COPY</code>: Copy files from the outside world to the image
  </>,
  <>
    <code>RUN</code>: Run a command inside the image
  </>,
  <>
    <code>CMD</code>: The default command that runs when the container starts
  </>,
]);

export const ImageSharing = generateContentSlide("Sharing Images", [
  "Docker makes it very easy to share images",
  <>
    Many images are hosted on <Link href="https://hub.docker.com">Docker Hub</Link>
  </>,
  <>First up, make sure you're logged in</>,
  <>
    Next, build your image with <code>docker build .</code>
  </>,
  <>
    Next up, tag your image with a version using <code>docker tag</code>
  </>,
  <>
    Finally, push your image with <code>docker push</code>
  </>,
]);

export const BuildingImages2 = generateContentSlide("Building Images", [
  "Builds run with only the information you share (via COPY)",
  'Builds should run "from scratch" and be reproducible anywhere',
  'Builds should rely only on "source code" rather than build artifacts or dependencies',
  "Images build in a default command for containers you start",
]);

export const ImageLayers = generateContentSlide("Image Layers", [
  'Each step in the Docker build creates a "layer"',
  "Docker looks for changes before starting from a specific build line",
  "Starts from the earliest line with a change",
  "You should be strategic about the order of commands",
  "Downloads will only pull updated layers",
  "This is really nice for updating a container",
]);

export const UsingDockerInProd = generateContentSlide('Using Containers "For Real"', [
  "Containers are useful for more than just local experimentation",
  "They encapsulate the software and setup you need to run software",
  "This makes it possible to run software very similarly on your machine and the real server",
  "Containers also start really fast...",
  "...and make it possible to split up a server's resources",
]);

export const ContainerOrchestration = generateContentSlide("Container Orchestration", [
  "We can run multiple containers with a load balancer",
  "Automatically create new containers when one dies",
  'Wait until containers are "healthy" before sending traffic',
  "Increase or decrease the number of containers based on scaling conditions",
  "Automatically collect logs from the container",
  "Roll out new versions of you app as new container images",
  "... sound familiar?",
]);

export const ServerlessServices = generateContentSlide("Managed Services", [
  "Managing servers can be a pain",
  "You need to make updates, handle operating system config, etc",
  "Many AWS managed services and SaaS providers manage servers for you",
  "You get charged for API usage -- not uptime",
  "S3 and Dynamo are Serverless",
  "EC2 and many other services are not",
]);

export const Serverless = generateContentSlide("Serverless Compute", [
  "When you write code, you may not want to think about where it'll run",
  "It'd be nice if you could just deploy code and have it called as needed",
  'Your application can be "down" when not handling requests',
  "This can be a lot cheaper than always-on servers",
  'Serverless is an extension of "pay as you go"',
  <>
    The code still runs on <em>a server</em>. You just don't own it
  </>,
]);

export const Lambdas = generateContentSlide("AWS Lambdas", [
  "AWS Lambda is a big AWS serverless offering",
  "You give AWS a chunk of code",
  {
    text: "Your code is called in response to certain events like...",
    children: [
      "A file is uploaded to an S3 bucket",
      "An item is stored in DynamoDB",
      "Somebody calls a REST API",
    ],
  },
  "AWS will run as many instances of your code in parallel as needed",
  <>
    You are <Link href="https://aws.amazon.com/lambda/pricing/">charged</Link> per ms of execution
  </>,
]);

export const references: Reference[] = [
  {
    label: "Terraform AWS Reference",
    url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
  },
  {
    label: "Installing Terraform",
    url: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
  },
];
