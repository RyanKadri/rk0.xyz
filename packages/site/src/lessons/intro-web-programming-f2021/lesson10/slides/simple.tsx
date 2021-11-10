import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Interacting with the Network", "Ryan Kadri");

export const InReview = generateMessageSlide("In Review...")

export const Json = generateCodeSlide("JSON", [
    'JSON is the most common "language" that servers use to exchange data',
    "Looks a lot like simplified JavaScript",
    "No variables, functions, operators, etc. Just data"
], {
    code: synJS`
{
    "firstName": "Ryan",
    "lastName": "Kadri",
    "age": 29,
    "isProfessor": true
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

export const FetchProperties = generateCodeSlide("Advanced Fetch", [
    <>The <code>fetch</code> function lets you provide all of the request properties mentioned...</>,
    "Method, Headers, Body, etc",
    "You can read most of the parts of the response",
    "This is important for reading from some APIs"
], { code: synJS`
fetch("https://icanhazdadjoke.com", { method: "GET", headers: { ["Accept"]: "application/json" } })
    .then(resp => resp.json())
    .then(console.log)
    `
});

export const ObjectSyntax = generateContentSlide("A Bit More Syntax", [
    "In JavaScript, object properties can have any name",
    <>ie. <code>{ `{ name: "Ryan" }` }</code> creates an object with a property called name</>,
    'You can technically have an object with a property of "Blah Blah Blah"',
    <>You can't type <code>{ `{ Blah Blah Blah: "Ryan" }` }</code> though</>,
    <>You have to use <code>{ `{ ["Blah Blah Blah"]: "Ryan" }` }</code> if you want complex properties</>,
    "This is the syntax you have to use for headers"
])

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

export const MethodChaining = generateCodeSlide(`Method Chaining`, [
    `Commonly in code, you'll see functions / methods "chained" together`,
    "This means calling a method on the result of another method",
    "Remember that methods are like functions that act on a particular piece of data"
], { code: synJS`
    const myName = "Ryan";
    console.log(
        myName.repeat(3)
            .toUpperCase()
            .substring(0,6)
    )
`});

export const PromisesAreSimilar = generateCodeSlide("Promises work similarly", [
    "A Promise is an object (can be stored in a variable)",
    <><code>.then</code> is a method</>,
    <>You can chain <code>.then</code>s to do things in order</>,
    "You don't need to understand this super deeply for now"
], {
    code: synJS`
const myPromise = fetch("https://some-url.com");

myPromise
    .then(response => { return response.json() }) // Method call
    .then(response => { console.log(response) }) // Method call
    `,
    codeFirst: true
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

export const references: Reference[] = [
    { label: "A short callback summary", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function" },
    { label: "More in-depth callback explanation (sync and async)", url: "https://www.javascripttutorial.net/javascript-callback/" }
]