import React from "react";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "Software Design Patterns: Functional and Immutable Programming",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review",
    "Functional Programming Principles",
    "Functional Java and JavaScript",
    "Streams, Closures, and Method References (oh my!)",
    "Immutable Java and JavaScript",
    "Assignment 1: Code Walkthrough",
]);

export const FunctionalProgrammingIntro = generateMessageSlide(
    <div>
        Functional Programming == <br /> 
        Thinking about your program in terms of mathematical functions
    </div>
);

export const FunctionalProgramming1 = generateContentSlide("Functional Programming", [
    { text: "Mathematical Functions:", children: [
        "Always produce the same output for a given input",
        "Don't change the outside world",
        "Have strict inputs and outputs",
    ]},
    { text: "Procedures:", children: [
        "Change the outside world",
        "Can modify inputs",
        "Can produce different values on each call (or no value at all)"
    ]}
]);

export const FunctionalProgrammingLikes = generateContentSlide("Functional Programming Likes", [
    '"Pure" functions - Inputs -> Outputs',
    '"First Class" functions - Functions go anywhere!',
    '"Higher Order" functions - Functions of functions',
    "Recursion",
    "Immutability"
]);

export const FunctionalProgrammingAvoids = generateContentSlide("Functional Programming Avoids", [
    "Mutable state",
    "Assignment to variables",
    "Statements",
    "Imperative Programming"
]);

export const FunctionalProgrammingBenefits = generateContentSlide("Functional Programming Benefits", [
    "Local effects make code easier to follow",
    "Clear inputs and outputs make testing easier",
    'Lets you focus more on the "what" than the "how"',
    "Function composition can be more flexible than inheritance",
    "Pure functions are thread-safe"
]);

export const FunctionalJavaScript = generateContentSlide("Functional JavaScript", [
    "Functions in JavaScript are just like variables",
    "They can be stored in variables, passed around, and returned",
    "Closures let functions remember information about their lexical environment"
]);

export const FunctionalJava = generateContentSlide("Functional Java", [
    "Java does not have functions exactly",
    "Everything being a class makes FP harder",
    '"Functional Interfaces" get us close',
    "Java closures help with the syntax but are not perfect",
    'Method references are nice "syntax sugar"'
]);

export const FunctionalJava2 = generateContentSlide("Functional Java", [
    { text: "Java 8 introduced functional-friendly-features", children: [
        "Streams - A stateless way of processing data as it comes in",
        "Optionals - A way to reduce Null Pointer Exceptions",
        "Functional Interfaces - Interfaces with one method are special",
        "Method References - Shorthand for extracting functional bits",
        'Built-In Function Types - Most common "function" types'
    ] }
]);

export const ImmutableProgramming = generateContentSlide("Immutable Programming", [
    'A variable / object is "mutable" if it can be changed after being created',
    "Mutability should be limited when possible",
    "Functions should return new versions of objects rather than changing them",
    "Copying can be done efficiently"
]);

export const ImmutableJava = generateContentSlide("Immutable Java and JS", [
    "Opinion - Immutability is easier to enforce in Java but easier to write in JS",
    "Java has final fields and final classes",
    "JS has easy object and array copying syntax",
    "JS has built-in immutable methods for strings, arrays, etc",
    "Immutability reduces the need for defensive copying and similar approaches"
]);

