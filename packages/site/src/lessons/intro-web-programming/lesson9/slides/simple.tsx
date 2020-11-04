import { Link } from "@material-ui/core";
import React from "react";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Lesson 9: Asynchonous JavaScript", "Ryan Kadri");

export const WhatIsAsynchronous = generateContentSlide("Asynchronous (async) JavaScript", [
    "An asynchronous action is one where you kick a process off and don't wait around for a result",
    'Also called "non-blocking" sometimes',
    "Talking on the phone is synchronous (other than actually )",
    "Text messages are asynchronous",
    "Everything you write in pure JavaScript is synchronous",
    "The environment takes care of background (async) work"
]);

export const AsyncCallback = generateContentSlide("Async Callbacks", [
    "Async callbacks are called when another operation finishes",
    "The first operation decides what parameters (if any) to pass",
    { text: "The JavaScript runtime manages waiting for certain operations", children: [
        "Reading files",
        "Calling the network",
        "Waiting for the user to do something",
        "Timers"
    ]}
]);

export const WhatIsBlocking = generateMessageSlide("So if that's non-blocking, what's non-non-blocking code?");

export const BlockingCodeCharacteristics = generateContentSlide("Blocking Code", [
    "Blocking code waits for each operation to finish before running the next",
    "Slow operations will hold up your code",
    "Hopefully you can do multiple things at the same time."
]);

export const ConcurrencyModel = generateContentSlide("Concurrency", [
    "Concurrency == Doing two things at the same time",
    "JavaScript can't do that",
    `It is "single-threaded"`,
    "Long computations will freeze the page",
]);

export const NotAHugeProblem = generateContentSlide("No Concurrency? No problem!", [
    "Most web pages aren't doing computations all that often",
    "JavaScript spends a lot of time waiting around",
    "When there's something to do, JavaScript works until that task is done",
    "JavaScript can kick back some tasks to the browser and request to be notified when they're done"
]);

export const EventLoop = generateContentSlide("Event Loop", [
    "Sometimes JavaScript can delegate tasks to the browser",
    "When they are done, the browser pushes them into a pile (queue) of new work",
    "If nothing is going on, JavaScript will pull things out of the callback queue",
    <Link href="http://latentflip.com/loupe/" target="_blank">http://latentflip.com/loupe/</Link>
]);

export const RequestsResponses = generateContentSlide("Interacting with Servers", [
    { text: "The Road So Far:", children: [
        "Load an HTML file from a server",
        "Parse the HTML and load any linked CSS and JS files",
        "Clicking links repeats the process with new links"
    ]},
    { text: "What else can we use servers for?", children: [
        "Storing user data",
        "Running computations",
        "Providing a centralized trusted party"
    ]}
]);

export const WhatIsAServer = generateContentSlide("What is a Server?", [
    "Partially hardware: The actual computer(s) that run some software remotely",
    "Partially software: The software that allows a server to respond to requests",
    'Servers handle "request" from clients',
    "You can run multiple servers (software) on your computer at once",
]);

export const HowDoUseServers = generateContentSlide("Interacting with a server (abbreviated)", [
    "You interact with a server by making an HTTP request",
    'You identify a "resource" on a server with a URL',
    "You can send the server some data (the main content of your request)",
    'You can also send metadata "headers" (how to handle the request)',
    'Requests to servers are associated with a request "method"',
    "The server will send back some data"
]);

export const ShowExample = generateMessageSlide("Let's see some examples!");

export const WhatArePromises = generateContentSlide(".then?", [
    "fetch returns a Promise",
    "Promises collapse a callback into a .then method",
    "Instead of calling like setTimeout, you put your callback in a .then method",
    ".then returns another Promise so you can chain .then calls",
    "If the callback in .then returns a promise, it gets absorbed into the first Promise"
]);

export const HttpRequest = generateContentSlide("HTTP Request", [
    "The client makes a request to a URL",
    "The request has a method (GET / POST / PUT / DELETE)",
    "Some requests have bodies",
    "Most requests have headers",
]);

export const HttpResponse = generateContentSlide("HTTP Response", [
    "The server returns a response",
    "The response has a numerical status code",
    "Most responses have bodies (text, html, xml, json)",
    "Most responses have headers",
]);

export const HttpHeaders = generateContentSlide("HTTP Headers", [
    "Contain metadata about the request",
    "Uppercase words separated by dashes",
    { text: "Examples include", children: [
        "Authorization",
        "Expires / Age / Cache-Control",
        "Cookie",
        "Accept / Content-Type",
        "Many more"
    ]}
]);
