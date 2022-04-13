import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide, generateMessageSlide, generateTitleSlide
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Cloud Functions and Pipelines", "Ryan Kadri");

export const AbstractionJourney = generateContentSlide("Our Abstraction Journey", [
  "Running applications on physical servers",
  "Running applications on VMs on physical servers",
  "Running apps on VMs on physical servers in somebody else's datacenter",
  "Running apps on containers on VMs on physical servers in somebody else's DC",
  "Simple right??"
]);

export const AbstractionGeneralizations = generateContentSlide("Abstraction Layers", [
  "Each layer of abstraction takes away some flexibility",
  "Each layer of abstraction also takes away complexity",
  'For "common" applications, you may not need the flexibility',
  "Application developers just want to write code... Right?",
  "Learning about server hardware and operating systems is a lot of work",
  "Each company needs to re-solve the same problems. And that's not their main job!",
]);

export const ServerlessServices = generateContentSlide("Managed Services", [
  'AWS provides a bunch of "Managed Services" where you don\'t need to think about servers',
  "S3 and Dynamo are examples of this kind of thing",
  "These services are very simple but you don't get a ton of control",
  "You don't need to make updates, handle operating system config, etc",
  "You get charged for API usage -- not uptime",
  "Services where you don't need to think about servers and that charge by usage are called \"serverless\"",
]);

export const Serverless = generateContentSlide("Serverless Compute", [
  "When you write code, you may not want to think about where it'll run",
  "It'd be nice if you could just deploy code and have it run as needed",
  "Your code probably doesn't care about all the internal Linux details",
  "You don't really want to think about how many servers are running your app",
]);

export const Lambdas = generateContentSlide("AWS Lambdas", [
  "AWS Lambda is AWS' service to try to make this a reality",
  "You give AWS a chunk of code",
  {
    text: "Your code is called in response to certain events like...",
    children: ["A file is uploaded to an S3 bucket", "An item is stored in DynamoDB", "Somebody calls a REST API"],
  },
  "AWS will run as many instances of your code in parallel as needed",
  <>
    You are <Link href="https://aws.amazon.com/lambda/pricing/">charged</Link> per ms of execution
  </>,
]);

export const LambdasNotServers = generateContentSlide("Lambdas vs Servers", [
  "Lambdas are deceptively close to mental model we have of normal servers",
  "They both wait for some event (a request) and handle it when it happens",
  "Servers run continuously. Lambdas don't",
  "AWS will create and shut down Lambdas when it wants. Lambdas can't be too stateful",
  "Even with scaling, servers may live for hours or days",
  "Lambdas may live for minutes (or less)"
]);

export const FunctionInSpace = generateContentSlide("AWS Lambdas", [
  "Lambdas are like a function floating around in space",
  <>AWS <em>could</em> run your code from scratch every execution</>,
  "Technically your function gets deployed on a server (that you can't control)",
  "A function may get re-used if AWS wants to reuse it",
  "No strong guarantee of when this happens though",
  "There is a noticeable performance hit when AWS does not reuse your code",
  'This is a "cold start"'
]);

export const WriteALambda = generateMessageSlide("Let's make a Lambda!");

export const LambdaDependencies = generateCodeSlide("Lambda Dependencies", [
  "Lambdas have some small dependencies to get started"
], {
  code: synHTML`
<dependencies>
  <dependency>
    <groupId>com.amazonaws</groupId>
    <artifactId>aws-lambda-java-core</artifactId>
    <version>1.2.1</version>
  </dependency>
  <dependency>
    <groupId>com.amazonaws</groupId>
    <artifactId>aws-lambda-java-events</artifactId>
    <version>3.11.0</version>
  </dependency>
</dependencies>  
  `
})

export const PackagingPlugin = generateCodeSlide("Packaging Plugin", [
  "AWS recomends a plugin to package your Lambda as a JAR",
  "You will upload this JAR to AWS"
], {
  code: synHTML`
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-shade-plugin</artifactId>
  <version>3.2.2</version>
  <configuration>
    <createDependencyReducedPom>false</createDependencyReducedPom>
  </configuration>
  <executions>
    <execution>
      <phase>package</phase>
      <goals>
        <goal>shade</goal>
      </goals>
    </execution>
  </executions>
</plugin>
  `
});

export const WhyNotSpring = generateContentSlide("Why don't we use Spring?", [
  "Spring is a heavy framework (compared to a pure Java program)",
  "Even small servers take a few seconds to start",
  "Because of cold-starts, that would mean some users get a 4+ second penalty on startup",
  "Also Lambdas expect specific events. Spring expects an HTTP request"
]);

export const PipelinesSubtitle = generateTitleSlide("CI / CD Pipelines", "Ryan Kadri");

export const WhenToRunTests = generateContentSlide("When do we run automated tests?", [
  "Automated tests remove the need to manually test all code before each release",
  "They can check edge-cases and hard-to-test error scenarios",
  "Do you always run them before pushing code though?",
  "Can you guarantee that your coworkers do as well?",
  "For long-running tests, this can really slow you down!"
]);

export const TestingPRs = generateContentSlide("Running Tests on PRs", [
  "Running tests after code is pushed to master might be a bit too late",
  "Other people could pull your bad code",
  "What happens if the test fails? Who sees it?",
  "Running tests during PRs might be more convenient",
  "Can we automate this?"
]);

export const DeployingOnMerge = generateContentSlide("How do we deploy code?", [
  "You can potentially copy a JAR file to a server",
  "At midnight, stop the old server and start a new one",
  "Hopefully only a few seconds of downtime right?",
  "... Or you can have a more complicated process",
  "But will a human always do that process right?",
  "Can we automate this?"
]);

export const WhenToDeploy = generateContentSlide("When to deploy code", [
  "You can potentially create automation scripts that handle deployments",
  "...and then deploy whenever you want",
  "Maybe you only deploy after lots of testing?",
  'Maybe you have special "release days" when a lot of code is released at once?',
  "That can be dangerous though. What if something breaks?"
])

export const ReleaseOnMerge = generateContentSlide("Deploying on Merge to Main", [
  "What if we deploy much more often?",
  "Potentially deploy every time code is merged to the main",
  "PR checks hopefully show that code is working",
  "A good enough automated process can hopefully deploy without downtime",
  "Changes are released in much smaller chunks. If things break, it should be easier to track down",
  "Also, you get customer feedback faster"
])

export const HowDo = generateMessageSlide("So how do we do this?")

export const GithubActions = generateContentSlide("GitHub Actions", [
  "GitHub Actions is a pipeline product from GitHub",
  "Free to use for open source projects",
  "Can run builds in response to events (like a PR or a merge to main)",
  "Has a lot of support for Docker, AWS, Java, etc",
  "Easily extensible"
])

export const LetsGoGHA = generateMessageSlide("Let's give it a shot!")

export const references: Reference[] = [
];
