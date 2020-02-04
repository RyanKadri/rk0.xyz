import React from "react";
import { generateContentSlide, generateMediaSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import bookreads from "../../lesson1/slides/bookreads.png";

export const Title = generateTitleSlide("Full Stack Development: Frontend", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Review (with more code examples)",
    "Quiz",
    "Complex Applications - General Thoughts",
    "Web Basics",
    "HTML",
    "The DOM",
    "JavaScript",
    "Fetching Data"
]);

export const ModernApps = generateContentSlide('Complex Applications', [
    { text: "Complex Apps:", children: [
        "Have layers (a tech stack)",
        "Are worked on by team(s) of developers",
        "May have networked components",
        "Persist data",
        "May run in a cluster"
    ]}
]);

export const CrudApps = generateContentSlide("CRUD Apps", [
    "CRUD = Create, Read, Update, Delete",
    "The core of many apps is CRUD",
    "Pure CRUD apps are fairly straightforward and can be very useful",
    "Lots of data-moving, validation, and presentation",
]);

export const WebTechPurposes = generateContentSlide("Web Basics", [
    "Core web technologies are HTML, CSS, and JavaScript",
    "HTML defines the structure of your page / app",
    "CSS handles styling",
    "JS makes your page dance"
]);

export const HTML = generateContentSlide("HTML", [
    "HTML is a subset of XML",
    "Expresses structure of apps as a tree",
    "You can break apps into boxes inside of boxes",
    "Best for text-based informational content and rectangle-y apps",
    "Tag names based on publishing terminology sort of"
]);

export const Bookreads = generateMediaSlide(
    <img src={ bookreads } style={ { border: "solid 2px black", padding: 2 } }/>,
    undefined,
    "BookReads.com"
)


export const JavaScript = generateContentSlide("JavaScript", [
    "JavaScript: Not related to Java",
    "Dynamically typed",
    "Interpreted",
    "Functional Components",
    "Weird Language: Easy to do Super Weird Stuff ®"
]);

export const DOM = generateContentSlide("DOM", [
    "DOM = Document Object Model",
    "The browser's programmatic representation of document structure",
    "HTML is like having a book. The DOM is what you have after you've read it.",
    "JavaScript will manipulate the DOM to create dynamic behavior on an app"
]);