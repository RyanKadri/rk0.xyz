import React from "react";
import { generateContentSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "Async JavaScript and APIs",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review (with more code examples)",
    "Quiz",
    "Asynchronous JavaScript",
    "HTTP",
    "REST APIs"
]);

export const AsyncJavaScript = generateContentSlide("Async JavaScript", [
    <span>Java can do multiple <em>blocking</em> things at once</span>,
    "JavaScript is single-threaded so it cannot",
    <span>JavaScript uses <em>non-blocking</em> asynchronous operations to approximate concurrency</span>
]);

export const BlockingNonBlocking = generateContentSlide("Concurrency and Blocking", [
    "Which operations are slow?",
    "What happens when the computer waits?",
    "How do we keep our system responsive?"
]);