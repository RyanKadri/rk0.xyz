import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Network APIs and Java Spring", "Ryan Kadri");

export const HowDoNetworking = generateMessageSlide(
  "How do programs communicate across a network?"
);

export const NetworkingBasics = generateContentSlide("Networking", [
  "For computers to communicate over networks, they need an identifier",
  "Across network segments, the standard identifier is an IP address",
  "IP addresses come in 2 varieties: IPv4 (32 bits) and IPv6 (128 bits)",
  "IPv4 addresses are often written like: 12.123.14.243",
  "IP addresses can be public, private, or local",
  "Public IP addresses should have one owner and identify one logical entity",
  "Private networks often share one of a few common ranges",
]);

export const NetworkingPart2 = generateContentSlide("Networking", [
  "Domain names on the internet point to a public IP address",
  "For instance, rk0.xyz -> 159.65.216.232",
  "This uses a system called DNS",
  'When you buy a domain name and set up servers, somebody needs to "resolve" the domain',
  "Private networks can still have their own private DNS",
  "localhost is a domain name that generally points to 127.0.0.1",
  "It is specific to your machine (loopback)",
]);

export const HttpBasics = generateContentSlide("HTTP", [
  "HTTP is a very common networking protocol",
  'Many networked APIs "speak" HTTP',
  "HTTP messages can be requests or responses. Each has a slightly different shape",
  'URLs identify what "resource" you want to interact with',
  "Requests and responses can store data in a few different places",
]);

export const RequestMethod = generateContentSlide("Request Method", [
  'Requests have a "method" to define how you want to interact with a resource',
  "Common methods include GET, POST, PUT, DELETE",
  "They correspond (usually) to Read, Create, Update, Delete, respectively",
  "Servers can interpret the method how it wants",
  "Your browser uses GET by default when you browse to a page",
  "May also see OPTIONS, PATCH, HEAD and other methods less frequently",
]);

export const HttpHeaders = generateContentSlide("HTTP Headers", [
  "Contain metadata about the request / response",
  "Headers are key-value pairs",
  "Header names are capitalized words separated by dashes",
  "Values are usually short strings",
  {
    text: "Examples include",
    children: ["Authorization", "Expires / Age / Cache-Control", "Cookie", "Accept / Content-Type"],
  },
]);

export const HttpBody = generateContentSlide("HTTP Request / Response Body", [
  "Main request / response data",
  "Only some HTTP requests have a body (usually with a POST or PUT method)",
  "Most (but not all) responses have a body",
  "Can be HTML, JSON, XML, Text, etc depending on the URL requested (and some headers)",
]);

export const ResponseCodes = generateContentSlide("HTTP Response Codes", [
  "A 3 digit numerical value that describes succinctly how the request went",
  "Somewhat standardized and agreed upon",
  {
    text: "200-299 means the request was successful",
    children: [
      "200: OK - This is the most common response. Means everything went ok",
      "201: Created - Something was created on the server",
    ],
  },
  {
    text: "300-399 means the request is being redirected",
    children: ["301: Moved Permanently", "302: Found (Moved Temporarily)", "304: Not Modified"],
  },
]);

export const ResponseCodesContinued = generateContentSlide("Response Codes Continued", [
  {
    text: "400-499 means the client did something wrong",
    children: [
      "400: Bad Request - The server can't understand the request",
      "404: Not Found - The requested resource does not exist",
      "418: I'm a teapot - The server refuses the attempt to brew coffee with a teapot.",
    ],
  },
  {
    text: "500-599 means there was an error on the server",
    children: [
      "500: Internal Server Error - Something went wrong",
      "503: The server is not ready to handle the request",
      "504: Another server behind the one you are talking to timed out",
    ],
  },
]);

export const WhatIsApi = generateMessageSlide("What is an API?");

export const Apis = generateContentSlide("APIs", [
  "API == Application Programming Interface",
  "APIs are a set of rules for how computers / programs can communicate",
  'Kind of the "public interface" for the service',
  {
    text: "APIs can apply to a lot of different things",
    children: ["Classes", "Libraries", "Networked Services"],
  },
]);

export const NetworkAPIs = generateContentSlide("Network APIs", [
  "Defining an HTTP API means defining the expected HTTP requests and responses",
  "What URLs are you using?",
  "What headers do you require / accept?",
  "What should the request body look like?",
  "What will the response look like?",
  "Needs to be agreed upon by the creator and the consumer",
]);

export const Spring = generateContentSlide("Java Spring", [
  "Java Spring is an open source framework for building Java Apps",
  "Has tons of sub-projects for different tasks",
  "Great for building HTTP APIs (with Spring Boot)",
  "Makes it easy to build and package your app",
  "One of the most popular Java Frameworks around",
  "The framework on which we will build most of our projects",
]);

export const SpringInitializer = generateContentSlide("Spring Initializr", [
  "Spring has a ton of related libraries. It can get really complicated",
  "There is a tool called Spring Initializr to build a template project",
  <>
    You can use <Link href="https://start.spring.io/">the website</Link> to generate a project
  </>,
  "Or it's built right into IntelliJ under New Project",
  "You want to add the Spring Web dependency and select a Maven Project",
]);

export const SpringCode = generateCodeSlide(
  "Spring Example",
  [
    "Spring uses a lot of annotations to define behavior",
    "Uses Reflection, proxies, and all sorts of magic to make your code work",
    "You shouldn't need to know the internals to work with Spring",
  ],
  {
    code: synJava`@RestController
public class HelloWorldRestController {

    @GetMapping("/hello/{name}")
    public HelloResponse sayHello(@PathVariable(value = "name") String name) {
        return new HelloResponse("Ryan", 28, true);
    }
}`,
  }
);

export const Postman = generateContentSlide("Postman", [
  "HTTP requests are a standard way to communicate",
  "You can make HTTP requests from most major languages",
  'Making an "ad-hoc" HTTP request is not always straightforward',
  "For simple GET requests you can use the browser",
  <>
    For other things, you might want to use a tool like{" "}
    <Link href="https://www.postman.com/downloads/">Postman</Link>
  </>,
]);

export const references: Reference[] = [
  { label: "HTTP Basics", url: "https://devqa.io/http-basics/" },
  {
    label: "Dependency Injection Approach",
    url: "https://www.codementor.io/@olotintemitope/dependency-injection-explained-in-plain-english-b24hippx7",
    note:
      "I like this explanation but one part it doesn't totally hit is that using a dependency injection like Spring " +
      "ends up meaning that another system builds your dependencies for you. They build the flashlight and pick the tires for the car",
  },
];
