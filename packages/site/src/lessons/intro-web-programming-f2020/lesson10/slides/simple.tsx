import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Promises and the Network", "Ryan Kadri");

export const PromiseErrorQuestion = generateMessageSlide(
    "You mentioned that Promises can fail. How does that work?"
);

export const Networking = generateMessageSlide(
    "Talking to Servers"
)

export const AsyncFunctions = generateCodeSlide("Async Functions", [
    "Recently, JavaScript added support for async functions",
    "async functions simplify promises even further",
    <>Allow you to <code>await</code> a Promise and write more synchronous code</>,
    "Remains non-blocking. Always returns a Promise",
    <>Other code can run while async function is <code>await</code>ing</>
], {
    code: synJS`
async function printSomeStuff() {
    await delay(1000);
    console.log("Hi");
    await delay(1000);
    console.log("I'm");
    await delay(1000);
    console.log("Ryan")
}
    `
})

export const AsyncErrors = generateCodeSlide("Async Error Handling", [
    "async functions allow you to use normal try / catch with Promises",
    "If something throws in a try / catch while awaiting, you can handle it"
], {
    code: synJS`
async function serverCall() {
    try {
        const resp = await fetch("https://some-server.com")
        const data = await resp.json();
        console.log(data);
    } catch(e) {
        console.log("Something went wrong with your request!")
    }
}    
    `
})

export const RequestMethod = generateContentSlide("Request Method", [
    'Requests have a "method" to define how you want to interact with a resource',
    "Common methods include GET, POST, PUT, DELETE",
    "They correspond (usually) to Read, Create, Update, Delete, respectively",
    "Server can interpret how it wants",
    "Browser uses GET by default when you browse to a page",
    "May also see OPTIONS, PATCH, HEAD and others less frequently",
]);

export const HttpHeaders = generateContentSlide("HTTP Headers", [
    "Contain metadata about the request / response",
    "Uppercase words separated by dashes",
    { text: "Examples include", children: [
        "Authorization",
        "Expires / Age / Cache-Control",
        "Cookie",
        "Accept / Content-Type"
    ]}
]);

export const HttpBody = generateContentSlide("HTTP Request / Response Body", [
    "Main request / response data",
    "In a request, this usually pairs with POST / PUT requests and some user-initiated interaction",
    "Most (but not all) responses have a body",
    "Can be HTML, JSON, XML, Text, etc depending on the URL requested (and some headers)"
]);

export const ResponseCodes = generateContentSlide("HTTP Response Codes", [
    "A 3 digit numerical value that describes succinctly how the request went",
    "Somewhat standardized and agreed upon",
    { text: "200-299 means the request was successful", children: [
        "200: OK - This is the most common response. Means everything went ok",
        "201: Created - Something was created on the server"
    ]},
    { text: "300-399 means the request is being redirected", children: [
        "301: Moved Permanently",
        "302: Found (Moved Temporarily)",
        "304: Not Modified"
    ]}
]);

export const ResponseCodesContinued = generateContentSlide("Response Codes Continued", [
    { text: "400-499 means the client did something wrong", children: [
        "400: Bad Request - The server can't understand the request",
        "404: Not Found - The requested resource does not exist",
        "418: I'm a teapot - The server refuses the attempt to brew coffee with a teapot."
    ]},
    { text: "500-599 means there was an error on the server", children: [
        "500: Internal Server Error - Something went wrong",
        "503: The server is not ready to handle the request",
        "504: Another server behind the one you are talking to timed out"
    ]}
]);

export const ApiQuestion = generateMessageSlide('You keep saying "API". What is that?')

export const WhatIsApi = generateContentSlide("What is an API?", [
    "API stands for Application Programming Interface",
    "How two pieces of software communicate",
    'What different "entrypoints" does the software have? How do you call them?',
    "In the case of servers, the API is defined in terms of URLs, request bodies, response code, etc",
    "The instructions for how to interact with the server define the API"
]);

export const ApiContinued = generateContentSlide("What do server APIs look like?", [
    "Servers can define their own APIs. No hard and fast rules",
    "REST is a popular design paradigm these days",
    "URLs should refer to resources (nouns) and request methods refer to actions (verbs)",
    'Favors calls like "POST /users/abc-123/notes"',
    'As opposed to calls like "POST /create-note?userId=abc-123"',
    "REST is a topic for another day"
]);

export const PromiseChaining = generateCodeSlide("Chaining Promises", [
    <><code>.then</code> callbacks can be synchronous or return another Promise</>,
    <>If the <code>.then</code> callback returns a Promise, the next <code>.then</code> will wait until the <em>returned promise</em> finishes</>,
    "This collapsing helps make asynchronous code much easier to follow",
    "You don't need nested callbacks. Can orchestrate everything in one place"
], {
    code: synJS`
delay(1000)
    .then(() => console.log("Hi"))
    .then(() => delay(1000))
    .then(() => console.log("I'm"))
    .then(() => delay(1000))
    .then(() => console.log("Ryan"))
`
});

export const PromiseErrorHandling = generateCodeSlide("Promise Error Handling", [
    "Some asynchronous operations can fail (especially network operations)",
    <>Promises have a <code>.catch</code> method to handle errors</>,
    "This cannot be done in a normal try / catch block because the code has moved on"
], {
    code: synJS`
fetch("https://some-site.com")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(e => console.error("Oh no! There was an error!"))
`
});

export const PromisesFromScratch = generateCodeSlide("Promises from Scratch", [
    "You can define your own Promises from scratch",
    'Can "wrap" asynchronous operations with a Promise',
    'Call a "resolve" function with the result of your operation (if any)'
], {
    code: synJS`
function delay(nMillis) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, nMillis)
    })
}`
});

export const Promises = generateCodeSlide("Promises", [
    "Promises are a way to keep track of an asynchronous operation",
    'A "promise" that something will happen in the future',
    "Promises can complete or fail (resolve or reject)",
    "Promises allow callbacks to be set up for when a promise completes or fails",
], { code: synJS`
const myPromise = fetch("https://some-url.com");

myPromise
    .then(response => { return response.json() })
    .then(response => { console.log(response) })
`});

export const TryCatchNoHandling = generateCodeSlide("No Error Handling", [], {
    code: synJS`
function generateReport(data) {
    const report = processData(data);
    // ...
}

function processData(data) {
    const complexReport = calculateReport(data); // Pretend this exists
    complexReport.addtionalInfo = extractAdditionalInfo(data);
    return complexReport;
}

function extractAddtionalInfo(data) {
    return library.extractAdditionalInfo(data); // What happens if this fails?
}
    `
});

export const TryCatchWithHandling = generateCodeSlide("With Error Handling", [], {
    code: synJS`
function generateReport(data) {
    const report = processData(data);
    // ...
}

function processData(data) {
    const complexReport = calculateReport(data); // Pretend this exists
    complexReport.addtionalInfo = extractAdditionalInfo(data);
    return complexReport;
}

function extractAddtionalInfo(data) {
    try {
        return library.extractAdditionalInfo(data); // What if this fails?
    } catch(e) {
        return "<unknown>"
    }
};`
});

export const TryCatch = generateCodeSlide("try / catch", [
    "Sometimes operations fail",
    "It would be nice to be able to handle errors gracefully",
    <>Errors immediately exit the current function and keep bubbling up until something <code>catch</code>es them</>,
    "try / catch in JavaScript lets you do this",
    <>You can <code>catch</code> an error and handle it</>
], { 
    code: synJS`
try {
    someSketchyFunction(); // This function might fail
} catch (e) {
    console.error(e.message) // What to do with the failure
}
`
});

export const references: Reference[] = [
    { 
        label: "Promises",
        url: "https://www.macadamian.com/learn/javascript-promises-explained/"
    },
    { 
        label: "HTTP Response Codes",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
        note: "Definitely don't need to memorize these"
    },
    { 
        label: "HTTP Headers",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
        note: "Don't memorize these either"
    }
]