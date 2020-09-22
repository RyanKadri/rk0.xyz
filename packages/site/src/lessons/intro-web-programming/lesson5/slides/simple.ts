import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("Introduction to JavaScript", "Ryan Kadri");

export const JavascriptVsCSS = generateContentSlide("HTML and CSS vs JavaScript", [
    "We're moving onto JavaScript from HTML and CSS",
    "HTML and CSS are tricky because you have tons of tools",
    "JavaScript has a much smaller set of tools but you have to combine them right",
    'JavaScript is a "real" programming language'
]);

export const WhatIsAProgrammingLanguage = generateContentSlide("What is a Programming Language?", [
    "A way to precisely define a series of computer operations in text",
    "Gives you control and flexibility over execution",
    "Should be able to solve a wide range of problems",
    "Usually has logic for making decisions and repeating operations"
]);

export const JavaScriptProgrammingType = generateContentSlide("What is JavaScript?", [
    "JavaScript is a very flexible language",
    { text: "JavaScript is (often):", children: [
        "Imperative: Normal lines of code run in order and loops / conditions give control flow",
        "High Level: You don't need to know that much about computer internals",
        "Dynamically Typed: You don't need to think about variable types as much as some other languages",
    ]}
]);

export const DataTypes = generateContentSlide("Thinking about Data", [
    { text: "JavaScript work with different types of data", children: [
        "Numbers",
        "Strings",
        '"Booleans"',
        "null / undefined",
        'Objects - Collections of related fields',
        "Arrays (a list for 0+ pieces of data)",
        "A few others"
    ] }
]);

export const LetsGetStarted = generateMessageSlide("Let's Get Started");
