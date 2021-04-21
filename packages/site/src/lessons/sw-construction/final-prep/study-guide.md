# Practicum in Software Construction - Final Study Guide

## Midterm Format

The final will be administered through Canvas on Wednesday May 5th. It will be available all day but you will have **2.5 hours** to complete the exam once you start. It is open book and open computer but all work must be completed independently. It will contain a mix of freeform concept questions, "find the bug" type problems, a couple "build this in AWS" questions and a couple short coding exercises.

## What is not on the test?

- The libraries and tools I bring up in the first 5 minutes of class. Those are just for fun. That includes Lombok, Spring-Data, etc.
- Maven libraries as a general concept are fair game but I would not expect you to study any of the specific libraries we've used so far other than Spring and JUnit
- I'm not expecting you to know any specific open source licenses. Open Source as a general concept is fair game
- Other than the general concepts, Terraform will not be on the exam
- Other than the general concepts, Containers and AWS Lambda will not be on the exam
- You do not need to know how to build a resilient app in AWS for the final but you should know
the concepts and what the specific components we covered are for (Load Balancers, ASGs, Target Groups, and Launch Configurations)
- We covered Route53 for a hot second. That will not be on the test (but it's a good thing to be aware of)

## Building in AWS

There will be at least one question that will have you set something up on AWS. This can either be:
- Building a Java Spring app and getting it running on EC2
- Build a few IAM users and give them different permissions

## General Topics

This may not be a 100% complete list of topics but it should get you most of the way to what you need. The slides are your friends.

- Git topics
    - What is a commit?
    - What are branches?
    - What does checking out a branch or a commit do?
    - What is a merge? What is a merge conflict?
- Licenses
    - What is open source code? What are the boundaries on how you can restrict use?
- Package Managers
    - What is a package manager? Why do we use them?
    - How does Maven help keep your Java project organized?
    - What is a JAR file?
    - Semantic Versioning
- HTTP
    - Parts of an HTTP Request and Response
    - General networking concepts (IP addresses, public / private / local IP)
    - General info in a URL
    - The general idea of what REST is all about
- Spring
    - What is Dependency Injection? Why is it helpful?
    - HTTP annotations for making a Spring server
        - @RestController
        - @GetMapping / @PostMapping / etc
        - @PathVariable / @RequestBody / @RequestParam
    - How to do dependency Injection
- Automated Testing
    - How to write JUnit Tests
    - What is the structure of a test?
- State Management
    - What is a pure function?
    - The state management errors we talked about in class
    - Make sure you understand the difference between pointing two variable names to the same object vs actually having different objects.
- APIs
    - What is an API?
    - What are some of the things to think about when making an API?
- EC2
    - What is an EC2 instance? How do you log on?
    - What are security groups (high-level)? Why do we add them?
    - How do we get Java apps running on EC2?
    - CLI vs GUI tools
    - Building an app from the command line
- Resiliency (concepts only)
    - Improving one machine vs running a cluster
    - Launch Templates
    - AutoScaling Groups
    - Target Groups
    - Load Balancers
- IAM
    - What is an IAM User?
    - Why create IAM users?
    - Authentication vs Authorization
    - What is an IAM policy?
    - The difference between an IAM role and a user
- Cloud Data
    - What is S3? How is it better than storing data on one hard drive?
    - How does S3 play with IAM?
    - What is DynamoDB? What is fast and slow?
    - Purpose of Dynamo Indices
- Infrastructure as Code
    - Why is it important?
    - Purpose of immutable infrastructure
- Containers
    - What are they? Why are they useful
    - Same for lambdas

## Tips

- Get good at setting up a setting up a basic Spring project in your IDE. Maybe set up one ahead of time. Don't waste time futzing with IDE settings.
- Make sure you know how to start a Spring server how to test your @GetMapping / @PostMapping / etc methods. If you haven't figured out Postman yet, now is the time.
- Make sure you know how to include a new library in your project from Maven