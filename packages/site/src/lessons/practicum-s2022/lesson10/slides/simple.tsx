import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Resiliency, Logging, and Monitoring", "Deploying Reliable Services");

export const WhatCanGoWrongQuestion = generateMessageSlide(
    "What can go wrong and how can I make it suck less?"
);

export const Downtime = generateContentSlide("Downtime", [
    "Downtime is time that your server is down (tricky right?)",
    "Downtime can be caused by many things (server is literally offline, network issues, app crashed)",
    "In this class we care about the problems outside your code",
    "An app is not always fully up or fully down. It's a rough metric",
    "Losing data is almost always way worse than just being offline"
]);

export const Nines = generateContentSlide("# of 9's", [
    'A common way to talk about availability is in a "number of nines"',
    "It refers to how many 9s are in the percent uptime",
    <code style={{ whiteSpace: "pre-wrap" }}>One   9  = 90%    uptime = ~36.5 days per year</code>,
    <code style={{ whiteSpace: "pre-wrap" }}>Two   9s = 99%    uptime = ~3.7 days per year</code>,
    <code style={{ whiteSpace: "pre-wrap" }}>Three 9s = 99.9%  uptime = ~9 hours per year</code>,
    <code style={{ whiteSpace: "pre-wrap" }}>Four  9s = 99.99% uptime = ~52 minutes per year</code>,
    "More 9s means more work"
])

export const WhatCanGoWrong = generateContentSlide("What can go wrong?", [
    "A hard drive fails",
    "A power supply burns out",
    "Memory errors crash the server",
    "The power goes out temporarily",
    "A network cable gets jostled out of place"
]);

export const HowToFix = generateContentSlide("What can we do?", [
    "RAID Arrays - Use redundant hard drives and replicate data across them",
    "Redundant power supplies",
    "Server-class RAM (higher quality and error-correcting)",
    "UPS - Some servers come with a short-term battery backup",
    '"Locking" cables are a thing',
    "Beef up the server"
]);

export const WhatCanGoWrong2 = generateContentSlide("What else can go wrong?", [
    "Power fails for an entire server cabinet",
    "A one-off software issue crashes the server",
    "Construction workers cut a fiber optic cable",
    "A capacitor blows up in the motherboard",
    "A tropical storm / lightning strike / earthquake takes out a data center",
    "Anything and everything"
]);

export const HowDoWeFixIt2 = generateContentSlide("What can we do?", [
    '"Beefing up" a single server is not good enough',
    "We need to run our service on multiple machines",
    "If one machine fails, stop sending it traffic and send to others",
    "Use machines in different locations (cabinets and even data centers)",
    "This can get pricey and complex",
    "Virtual machines and the cloud make this much more possible",
    "Everything can still break. You need to design systems so that parts can fail"
]);

export const SplittingUpAService = generateContentSlide("Splitting Up Services", [
    "How do we split traffic between two servers?",
    'You can use another component called a "Load Balancer"',
    "Maybe split traffic in a round-robin pattern?",
    "Maybe send requests to the server who has the shortest request queue?",
    "Maybe split traffic by percentage weightings if servers are different sizes?",
    "Only send traffic to healthy servers",
    "How is the load balancer not a single point of failure?"
]);

export const LetsDoLoadBalancer = generateMessageSlide("Let's make a load balancer!")

export const HowDoManage = generateContentSlide("How do I manage that?", [
    "Setting up a server is time-consuming. It's helpful to not need to do that manually",
    "If you need to set up the same server multiple times, can you automate it?",
    "If a server fails, you want to replace it as quickly as possible",
    "Servers should be simple and deterministic to set up",
    "Servers need to stay updated as well"
]);

export const OnAws = generateContentSlide("Resiliency on AWS (EC2)", [
    { text: "We are shopping for:", children: [
        "A way to automate EC2 instance setup",
        "A way to provision multiple EC2 instances",
        "A way to spread load between a number of EC2 instances",
        "A way to know when/if things break"
    ] }
]);

export const LaunchTemplates = generateContentSlide("Launch Templates", [
    "EC2 servers are not bulletproof. Expect them to fail occasionally",
    "Remaking EC2 instances should be as fast as possible (automated)",
    "This should run with no human intervention",
    "Instance setup can be bundled into a Launch Template",
    "When a replacement server is needed, stamp a new one out with a Launch Template",
    "Also just a nice way to reduce manual setup work"
]);

export const ManageScalingWithAws = generateContentSlide("Autoscaling Groups", [
    "Rather than just launching one server, you can tell AWS to launch a group of servers",
    "Use a Launch Template to easily create each server",
    "If a server dies, AWS will automatically create a new one",
    "Spin up new servers when you need more compute power or do the reverse",
    "You can do complex scaling based on metrics but don't need to",
    "Traffic can be balanced between servers in the group with the help of...",
]);

export const ManageTargetGroups = generateContentSlide("Target Groups", [
    "To load balance between servers, you need to group servers",
    "Target groups organize traffic to a service on a specific port",
    "Defines a health check to determine if a server is healthy",
    '"Healthy" might mean "finished starting up" or "not crashed"',
    "Traffic is only routed to healthy servers",
    "Why do we need another group? Isn't the Autoscaling group enough?"
]);

export const ManageLoadBalancer = generateContentSlide("Load Balancer", [
    "Doorway into your app. Actually handles requests",
    "Forwards requests to hosts that will process them",
    "Can forward to multiple target groups based on rules",
    "In simple cases, all requests go to one target group",
    "Can handle encryption for your app",
    "Can help protect against certain types of attacks"
]);

export const LetsBuildResilient = generateMessageSlide(
    "Let's build a resilient app!"
);

export const ProblemsWithDistribution = generateContentSlide("#clusterproblems", [
    "Clusters are nice but introduce some difficulties",
    "If you have 2+ instances of your application running, they have different variables",
    "Each server has its own filesystem",
    "Even with an automated fix, you still want to know when things break",
    "If you want to check logs, you might have to log into multiple machines",
]);

export const AlertingIssues = generateContentSlide("Alerting", [
    "Cloudwatch Alerts can be set up to let you know if something is wrong",
    "There are tons of metrics to watch",
    "Many ways you can deal with metrics (different stats and comparisons)",
    "Can track over different time granularity",
    "Can alert to multiple different systems",
    "Uses Amazon SNS (Simple Notification Service) to send alerts to targets"
]);

export const Logging = generateContentSlide("Logging", [
    "Good logging can help track down issues after they've already happened",
    "Ideally you can search back in old logs and see what might've caused an error",
    "This is really helpful for automated app deployments",
    "When an auto-started app fails to load, you want to know why",
    "Reading logs is harder in a cluster without knowing where the issue is",
    "Centralized logging is a nice solution (for another class)"
]);

export const JavaLogging = generateCodeSlide("Logging in Java", [
    <>The simplest way to log in Java is <code>System.out.println(...)</code></>,
    "That might not be the best for big apps - You lose context",
    "A common logging framework built into Spring is SLF4J",
    "Features include configurable log format, different log levels, and different output strategies"
],{
    
    code: synJava`public class SomeClass {

    private static final Logger logger = LoggerFactory.getLogger(SomeClass.class);

    public void doAThing() {
        logger.info("Did a thing");
    }

}`
})

export const references: Reference[] = [
    
];