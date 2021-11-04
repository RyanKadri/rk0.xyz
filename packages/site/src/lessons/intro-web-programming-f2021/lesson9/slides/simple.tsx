import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Asynchronous JavaScript", "Ryan Kadri");

export const InReview = generateMessageSlide("In Review...")

export const FutureGoals = generateContentSlide("Class Goal", [
    { text: "The Road So Far:", children: [
        'Creating "static" web pages',
        "Making pages look good on many devices",
        "Use JavaScript to make those pages interactive",
    ]},
    { text: "#FutureGoals", children: [
        "Storing data over time",
        "Let users interact with each other",
        "Providing a centralized trusted party"
    ]}
]);

export const WaitYourTurn = generateContentSlide("Concurrency", [
    "Javascript can only do one thing at a time (mostly)",
    "Only one line of your code can run at time",
    "If you try to do two things at once, the one that started later has to wait",
    "This can cause a page to seem frozen",
    "Doing two things at the same time == concurrency"
]);

export const BlockingWait = generateCodeSlide("Trying to wait", [
    "This is a bad implementation of a timer",
    "Code loops until some amount of time has passed",
    "This will freeze your web page"
], {
    code: synJS`
function wait(milliseconds) {
    const end = Date.now() + (milliseconds);
    let curr = Date.now();
    while(curr < end) {
        curr = Date.now()
    }
    console.log("Done");
}`
});

export const OhNo = generateMessageSlide("Why aren't sites frozen all the time then?");

export const MostTimeIsIdle = generateContentSlide("Idle Time", [
    "Most of the time after a page is loaded, it's idle",
    "The browser waits for timers, user interactions, etc. and responds as needed",
    "Most pages are not running code all the time",
    "When sites have laggy inputs or janky animations, they might be running too much code"
]);

export const HowDoTimers = generateMessageSlide("Wait. So how do timers work?");

export const EventLoop = generateContentSlide('Browser "Events"', [
    "Only one line of JavaScript can run at a time...",
    '... but the browser can keep track of multiple events at the same time',
    "The browser can keep track of multiple timers, network requests, user interactions, etc",
    'This is why the browser "catches up" after lagging',
    "Timers, interactions, etc can cause your code to be put on a queue",
    "If nothing else is happening, your code runs immediately",
    "If other stuff is happening, the event will be added to the end of the line",
    "When the browser is idle, it will run things from the front of the queue"
]);

export const AsyncCallbacks = generateContentSlide("Asynchronous Callbacks", [
    "Some tasks in the browser take a long time to complete",
    "Some tasks involve a period of waiting",
    "For the types of tasks that could fit both criteria, JS uses callbacks",
    "Don't pause everything while tasks finish",
    'The browser is "idle" while tasks complete and other things can happen',
    'This means the browser does not need to freeze during "waiting" time'
]);

export const SetTimeoutCallback = generateCodeSlide("setTimeout Callback", [
    "setTimeout takes a callback that runs when the specified timer runs out",
], {
    code: synJS`
function printSomething() {
    console.log("Belated Hello!");
}

setTimeout(printSomething, 5000);`
})

export const AnonymousFunctions = generateCodeSlide("Anonymous Functions", [
    "For simple tasks, it is sometimes a lot of work to keep defining new functions",
    "When a function takes a callback as a parameter, you can use a function with no name",
    "Sometimes nice for readability"
], {
    code: synJS`
setTimeout(function() {
    console.log("Belated Hello")
}, 5000)
    `
});

export const BlockingCodeExample = generateCodeSlide("Blocking Code", [
    '"Blocking" code waits for a line to run before moving on to the next task',
    "JavaScript shouldn't do this because the page would constantly be frozen",
    "Easier to read but does not work in JavaScript"
], {
    code: synJS`
function processFile() {
    const fileData = readFile("budget.txt");
    const largestExpense = determineLargestExpense(fileData);
    updateNetwork(largestExpense);
    console.log("Done processing.")
}`
});

export const NonBlockingMoreExamples = generateCodeSlide("Non-Blocking Code", [
    '"Non-Blocking code starts a task and then gives instructions about what to do next"',
    "Only asynchronous tasks need this kind of thought",
    "More complicated code"
], {
    code: synJS`
function processFile() {
    readFile("budget.txt", checkExpenses);
}

function checkExpenses(fileData) {
    const largestExpense = determineLargestExpense(fileData);
    updateNetwork(largestExpense, printSuccess);
}

function printSuccess() {
    console.log("Done processing.")
}`
});

export const WorkingWithServers = generateTitleSlide("Working with Servers (Part 1)", "Ryan Kadri");

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

export const FetchExample = generateCodeSlide("fetch", [
    "fetch lets you make requests to a server",
    "Lets you specify URL, method, request body, headers, etc.",
    'Gives back the response in terms of a "Promise"',
    "It is a low-level function so you have to manually parse the request"
], {
    code: synJS`
fetch("https://meowfacts.herokuapp.com/")
    .then(function(response) { return response.json() })
    .then(function(response) { console.log(response) })
`
});

export const WhatArePromises = generateContentSlide(".then?", [
    'fetch returns a "Promise"',
    "Promises collapse a callback into a .then method",
    "Instead of calling like setTimeout, you put your callback in a .then method",
    ".then returns another Promise so you can chain .then calls",
    "If the callback in .then returns a promise, it gets absorbed into the first Promise"
]);

export const references: Reference[] = [
    { label: "A short callback summary", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function" },
    { label: "More in-depth callback explanation (sync and async)", url: "https://www.javascripttutorial.net/javascript-callback/" }
]