import React from "react";
import { generateContentSlide, generateFullSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Lesson 6: Asynchronous JavaScript", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Review Regular Expressions",
    "JavaScript Concurrency Model",
    "Functions as Callbacks",
    "Setting Timers",
    "Promises",
    "Networking Basics",
    "Ajax"
]);

export const ConcurrencyModel = generateContentSlide("Concurrency", [
    "Concurrency == Doing two things at the same time",
    "JavaScript can't do that",
    `It is "single-threaded"`,
    "Long computations will freeze the page",
]);

export const MoreConcurrency = generateContentSlide("Concurrency Limitations", [
    "A computer can only do so many things at once",
    "Older computers could only really do one thing at a time",
    "Some operations are a lot slower than others",
    "How does it decide what to do?",
    "Programs can take a blocking or non-blocking approach"
]);

export const BlockingNonBlocking = generateContentSlide("Blocking and Non-Blocking", [
    "Blocking code waits for each operation to finish before running the next",
    `Non-Blocking code starts an operation and leaves a "callback" function for the next step`
])

export const WhatIsBlocking = generateMessageSlide("What does blocking code look like?")

export const WhatIsNonBlocking = generateMessageSlide("What does non-blocking code look like?")

export const NonBlockingProsCons = generateContentSlide("Non-Blocking Pros & Cons", [
    "Non-blocking code looks harder to read",
    "You can easily start multiple operations out of order",
    "It can guarantee order of operations in small units",
])

export const Callbacks = generateContentSlide("Callbacks", [
    "Callbacks are functions passed to another function as a parameter",
    "They are called at a critical decision point",
    "They can be synchronous or async",
    "Some methods (sort, find, map, etc) have a critical decision point. This can be a callback"
]);

export const WhatIsAsyncCallback = generateMessageSlide("So what is an async callback?");

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

export const EventLoop = generateContentSlide("Event Loop", [
    "The browser provides async building blocks",
    "A part of these functions runs outside of the thread",
    "When they are done, they push your callback to a queue",
    "If nothing is running, the event loop picks something off the queue"
])

export const EventLoopExample = generateFullSlide(
    <iframe width="100%" height="100%" 
            src="https://www.youtube-nocookie.com/embed/8aGhZQkoFbQ?start=766" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder={0} 
            allowFullScreen
    />
);

export const ThatsTerrible = generateMessageSlide("That's terrible!")
