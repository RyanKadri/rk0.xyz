import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("What Comes Next?", "Ryan Kadri");

export const FutureOfWeb = generateContentSlide("Modern Web Apps", [
    "Web apps are continuing to get more powerful",
    "They can interact with lots of devices and sensors (webcam, ambient light, accelerometer, etc)",
    "They can work offline and (store data!!)",
    "They can do multiple things at once (Web Workers)",
    "Starting to look a lot more like native apps",
    "Have a much better security-by-default setup"
]);

export const ModernJavaScript = generateContentSlide("Modern JavaScript", [
    "So far, we've only seen JavaScript in the browser",
    "Recent projects like NodeJS, React Native, and Nashorn give JS a new home",
    "Electron lets you write cross-platform apps",
    "Projects like Babel, TypeScript, and CoreJS let you write better JS",
    <><code>import</code>s let you organize your project</>,
]);

export const NodeJS = generateCodeSlide("NodeJS", [
    "NodeJS lets you run JavaScript on your laptop / desktop",
    "It powers a number of real-world servers and programs",
    "NodeJS can read files, interact with other programs, and act as a server",
], 
{
    
    code: `
const fs = require("fs");
fs.readFile("/home/ryan/Documents/hello.txt", "utf-8", (err, data) => {
    console.log(data);
})`.trim()
});

export const OtherHomes = generateContentSlide("Other JavaScript Homes", [
    <>JavaScript is one of the most popular programming languages in 2020
        <sup><a href="https://www.northeastern.edu/graduate/blog/most-popular-programming-languages/">[1]</a></sup>
        <sup><a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-wanted">[2]</a></sup>
    </>,
    <><strong>React Native: </strong>Lets you build Apps in JavaScript using a framework called React</>,
    "Lets you build most parts of an app once and run on IOS / Android",
    <><strong>Electron: </strong>Lets you build Desktop applications with standard browser interfaces</>,
    "VSCode and Slack use Electron. Build once run (m)anywhere",
    <><strong>Nashorn: </strong>Run JavaScript inside Java</>,
    "But why? Who knows?!",
]);

export const ImproveJavaScript = generateContentSlide("Improving your JavaScript Game", [
    'Most JavaScript projects these days have a "build process"',
    "Lets you use the newest JavaScript syntax and still have it run on many browsers",
    "Shrink the size of your final JavaScript file by only including what you need",
    <>Write better code using <code>import</code>s</>,
    "Use libraries that re-implement functionality from newer browsers into older ones"
]);

export const TypeScript = generateCodeSlide("Typescript", [
    "Typescript is a language that compiles to JavaScript",
    'Includes "type information" in your code',
    "When it compiles, it checks that your declared types match your code",
    "Lets IDEs provide suggestions for your code"
], {
    
    code: `
function addNumbers(a: number, b: number): number {
    return a + b;
}

addNumbers(1,2) // This is allowed
addNumbers("a", { name: "bob" }) // This does not compile
`.trim()
});

export const Imports = generateCodeSlide("Imports and Modules", [
    "Imports let you break your code into files that reference each other",
    "Also let you import parts of a library (but not the whole thing!)",
    "Using imports also opts you into using modules",
    'Modules make sure that variables and functions from one file don\'t "leak"',
    'Let you write bigger projects without worrying about "collisions"'
], {
    
    code: `
// file a.js
import { addNumbers } from "./b"

console.log(addNumbers(1,2));

// -------------------------------
//file b
export function addNumbers(a,b) {
    return a + b
}`
});

export const Frameworks = generateCodeSlide("Web Frameworks", [
    "Recently web framework libraries have gotten a lot more popular",
    "They let you build apps a lot faster",
    "They often help bind JavaScript data into the DOM",
    "... and much more",
], {
    
    code: `
export function Header({ name }) {
    return (
        <header>Hello { name }. Welcome to InstaFace</header>
    )
}`
});

export const references: Reference[] = [
    { label: "This makes me feel bad at web development", url: "https://x.dustinbrett.com/" }
]