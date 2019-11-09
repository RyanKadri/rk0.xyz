import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Node.JS and Scripting", "Ryan Kadri");
export const IsJavaScriptUseful = generateMessageSlide(
    "Is JavaScript a useful general purpose programming language?"
);
export const WhatIsProgrammingLanguage = generateContentSlide("Programming Languages", [
    "Can it process varied data?",
    "Can it model a broad range of concepts?",
    "Can it make use of most of your computer's resources?",
    "Can it interact with the outside world?",
    "Can it express results in flexible ways?"
]);

export const BrowserLimitations = generateContentSlide("Browser Limitations", [
    "Web pages cannot read and write files",
    "It is hard to string programs together",
    'Programs "must" be graphically oriented',
    "Optimized for distrust and security",
]);

export const HowDoCommandLine = generateMessageSlide("How do non-graphical programs work?");
export const CommandLinePrograms = generateContentSlide("Command-Line Programs", [
    "Some programming problems don't need a GUI",
    "GUIs weren't always a thing",
    "You can run programs through the OS shell",
    "Inputs are text and outputs are text",
    "Faster to develop text-based tools than GUIs"
]);

export const WorkingWithShell = generateContentSlide("Working with the Shell", [
    "The OS shell runs in the context of a folder",
    "The cd command changes the folder",
    'Call programs like "myProgram --option1 arg1 arg2"',
    "Path determines where to find programs"
]);

export const HowDoCommandLineJs = generateMessageSlide(
    "How do I write these kinds of programs in JavaScript?"
);

export const EnterNode = generateContentSlide("Enter NodeJS", [
    "NodeJS is a JavaScript runtime",
    'node myfile.js',
    "Same language, different libraries"
]);

export const NodeTools = generateContentSlide("NPM in Node", [
    "NPM was originally made for Node - Not browsers",
    "More natural to use in local code"
]);
