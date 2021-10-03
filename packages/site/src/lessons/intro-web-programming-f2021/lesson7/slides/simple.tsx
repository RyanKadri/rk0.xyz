import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateContentSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("Handling User Input", "Ryan Kadri");

export const CommonProperties = generateContentSlide("Common DOM Properties", [
    <><code>element.innerText</code> - The text of an element. Readable or writeable</>,
    { text: <><code>element.innerHTML</code> - The HTML contents of an element. Can change to add / remove elements</>, children: [
        "This can be a bit tricky to get right",
        "Don't let this be a crutch too much"
    ]},
    <><code>element.id</code> - The id of the element. Readable or writeable</>,
    { text: <><code>element.classList</code> - Lets you see all the classes of an element</>, children: [
        <><code>element.classList.add("test")</code> - Adds a new class of "test". Powerful with CSS</>
    ]}
]);

export const references: Reference[] = [
    { 
        label: "DOM Tutorial", 
        url: "https://www.javascripttutorial.net/javascript-dom/",
        note: "This is a good reference but covers more than what we've learned in class so far"
    },
    { 
        label: "MDN DOM Reference", 
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
        note: "This guide is a bit long-winded but try to power through it. If you're getting confused, don't worry too much"
    }
];