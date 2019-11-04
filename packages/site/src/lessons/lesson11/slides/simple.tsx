import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../presenter-core/src/slides/generate-slide";

export const slides = [
    generateTitleSlide("Node.JS and Scripting", "Ryan Kadri"),
    generateMessageSlide("Is JavaScript a useful general purpose programming language?"),
    generateContentSlide("Programming Languages", [
        "Can it efficiently make decisions and calculations?",
        "Can it model a broad range of concepts?",
        "Can it make use of most of your computer's resources?",
        "Can it interact with the outside world?",
        "Can it express results in flexible ways?"
    ]),
    generateContentSlide("Browser JavaScript?", [
        "Web pages cannot read and write files",
        "JavaScript is single-threaded",
        "The results of calculations are hard to consume",
        "Reliant on a server for long-term storage",
        'Programs "must" be graphically oriented'
    ]),
    generateMessageSlide("How do non-graphical programs work?"),
    generateContentSlide("Command-Line Programs", [
        "Some programming problems don't need a GUI",
        "GUIs didn't always exist",
        "You can run programs through the OS shell",
        "Inputs are text and outputs are text"
    ]),
    generateContentSlide("Testing", [
        "How do you know your code is working?",
        "Run functions with a lot of parameters?",
        "Copy and paste code around?",
        "Is there a way to do it automatically?"
    ])
]
