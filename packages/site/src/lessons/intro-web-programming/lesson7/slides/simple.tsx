import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("JavaScript: User Input", "Ryan Kadri");

export const JavaScriptInHTML = generateContentSlide("JavaScript in HTML", [
    "You can include JavaScript in your HTML files via <script> tags",
    "<script> tags can reference another file",
    "Variables that you define outside functions become global",
    "You can access global variables in the console"
]);

export const DocumentParseOrder = generateContentSlide("Document Parse Order", [
    "When you navigate your browser to a URL, the server will send back HTML",
    "Browser reads the HTML from the top to the bottom",
    "When it hits <script> tags or links, it runs them right away",
    "This affects where you can put your <script> tags depending on what your page does"
])

export const HowConnect = generateMessageSlide("How does JavaScript interact with HTML?");

export const TheProblem = generateContentSlide("JavaScript / Web Page Interactions", [
    "JavaScript needs a way to modify the page",
    "User interactions should be able to trigger JavaScript",
    "There should be a way to identify elements in JavaScript",
    { text: 'JavaScript should be able to "ask questions" about the page', children: [
        '"What is the value of that text box?"',
        '"Is that checkbox checked?"',
        '"How far has the user scrolled?"'
    ] }
]);

export const DOM = generateContentSlide("The DOM", [
    "Stands for Document Object Model",
    "A data structure that represents the content of the document",
    'Browsers give JavaScript "host objects" to access the DOM',
    "JavaScript can read page content from the DOM and create/modify the existing page"
]);

export const HowToInteract = generateContentSlide("Reacting to Input", [
    "To react to input, we want to run a block of code when something happens",
    'Functions are a good way of organizing "a block of code"',
    { text: "What can happen?", children: [
        "The user clicks a button",
        "The user types something into a textbox",
        "The user moves their mouse over an element",
        "The user scrolls the page",
        "The user taps the arrow keys",
        "Much more..."
    ] }
]);

export const LetsCode = generateMessageSlide("Let's do some examples");

export const references: Reference[] = [
    { 
        label: "Class Examples", 
        url: "https://github.com/RyanKadri/cis1052-fall2020-examples/tree/master/c7-reacting-to-input" 
    },
    { 
        label: "W3Schools Examples", 
        url: "https://www.w3schools.com/js/js_htmldom_events.asp" 
    },
    { 
        label: "Another JavaScript Events Tutorial", 
        url: "https://www.javascripttutorial.net/javascript-dom/javascript-events/" ,
        note: "This page goes into some detail we haven't covered in class yet. You don't need to know addEventListener or Event Bubbling yet"
    }
]