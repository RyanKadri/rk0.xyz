import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("JavaScript Basics", "Ryan Kadri");

export const WhatIsAProgrammingLanguage = generateContentSlide("What is a Programming Language?", [
    "A way to precisely define a series of computer operations",
    "An abstraction layer",
    "Can be high or low level and is targeted to a specific task"
]);

export const HowDoesComputerWorkParts = generateContentSlide("How does a computer work?", [
    "The CPU processes main instructions",
    "Memory stores large amounts of information temporarily",
    "GPU speeds up certain graphics tasks",
    "The hard drive stores things long-term",
]);

export const HowDoesAComputerWorkScience = generateContentSlide("How does a computer work?", [
    "Physics!",
    "Chemistry!",
    "Love!"
]);

export const ComputerConstraints = generateContentSlide("What are the constraints?", [
    "Data has to fit in the processor for operations",
    "Data has to be expressed in binary",
    "The CPU has a fixed (small) set of operations"
]);

export const WhyConstraintsImportant = generateContentSlide("Why is this important?", [
    "Programming languages try to hide operational details",
    { text: "They sometimes don't stay hidden", children: [
        "Floating point math",
        "Overflow / underflow",
        "Data type coercion"
    ]}
]);

export const EnterJavascript = generateContentSlide("What is JavaScript?", [
    "A high-level, (mostly) single threaded language",
    "Styled similarly to Java / C++",
    "Originally built for the web but growing"
]);

export const WhyJavascript = generateContentSlide("Javascript: What is it good for?", [
    "Older websites treated every action as a complete navigation",
    "Decisions and logic had to run on the server",
    "Browsers have more information than the server"
]);

export const LetsGetStarted = generateMessageSlide("Let's Get Started");
