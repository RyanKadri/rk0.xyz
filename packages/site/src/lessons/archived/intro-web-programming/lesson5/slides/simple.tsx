import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("JavaScript and the DOM", "Ryan Kadri");

export const DataTypes = generateContentSlide("Data Types", [
    { text: `Javascript has "primitive" types` , children: [
        "Strings",
        "Numbers",
        "Booleans",
        "Functions",
        "Objects",
        "null / undefined",
        "Symbol",
        "Big Int",
    ]}
])

export const HowConnect = generateMessageSlide("So how does this connect to HTML?");

export const TheProblem = generateContentSlide("The Problem", [
    "JavaScript needs a way to change the page",
    "HTML needs a way to trigger JavaScript",
    "JavaScript needs to identify HTML elements"
]);

export const EnterDOM = generateMessageSlide("Enter the DOM");

export const DOM = generateContentSlide("The DOM", [
    "Stands for Document Object Model",
    "The browser's representation of structure of a page",
    "Stores page data in a semi-tree-shaped object",
    "Editable with JavaScript",
    "Easier to manage than HTML"
]);

export const WhatCanItDo = generateContentSlide("What can it do?", [
    "Add elements to the page",
    "Remove elements from the page",
    "Change text",
    "Set styles",
    "Add / Remove classes / attributes"
]);

export const HowRun = generateContentSlide("How do you run JavaScript?", [
    { text: "You can start JavaScript based on a script tag on the page", children: [
        "You can also source this page from another file"
    ]},
    "You can listen for DOM events"
]);
