import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("JavaScript and the DOM", "Ryan Kadri");

export const DataTypes = generateContentSlide("Data Types", [
    { text: `Javascript Data Types` , children: [
        "Strings",
        "Numbers",
        "Booleans",
        "null / undefined",
        "Objects",
        "Arrays",
    ]}
]);

export const MapArray = generateMessageSlide(
    "Write a function that takes in an array and doubles each item"
);

export const MapArrayImmutable = generateMessageSlide(
    "Write a function that takes in an array and returns a new array with each item doubled"
);

export const FizzBuzz = generateMessageSlide(
    "Write a function that prints every number from 1 to 100 but replace every number divisible " +
    "by 3 with Fizz, every number divisible by 5 with Buzz and every number divisible by both with FizzBuzz"
);

export const HowConnect = generateMessageSlide("So how does JavaScript connect to HTML?");

export const TheProblem = generateContentSlide("JavaScript / Web Page Interactions", [
    "JavaScript needs a way to affect the page",
    "User interactions should be able to trigger JavaScript",
    "JavaScript should be able to identify HTML elements"
]);

export const DOM = generateContentSlide("The DOM", [
    "Stands for Document Object Model",
    "A data structure that represents the content of the document",
    'Browsers give JavaScript "host objects" to access the DOM',
    "JavaScript can read page content from the DOM and create/modify the existing page"
]);

export const WhatCanItDo = generateContentSlide("What can it do?", [
    "Add elements to the page",
    "Remove elements from the page",
    "Change text",
    "Set styles",
    "Add / Remove classes / attributes"
]);

