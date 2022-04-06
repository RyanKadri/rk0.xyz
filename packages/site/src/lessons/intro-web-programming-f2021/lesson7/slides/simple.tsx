import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML, synJS } from "../../../../common/highlighting";

export const TitleSlide = generateTitleSlide("Handling User Input", "Ryan Kadri");

export const LetsRecap = generateMessageSlide("Let's recap...");

export const DomRecap = generateContentSlide("The DOM", [
  "JavaScript interacts with HTML and CSS through the DOM",
  "DOM = Document Object Model",
  "JavaScript represents HTML elements as JS objects",
  "Update the page by changing object properties",
  <>
    The <code>document</code> object is the door into the page
  </>,
]);

export const FindingElements = generateContentSlide("Finding Elements", [
  "Before JS can update an element, it needs to say which element to change",
  <>
    The <code>document</code> global object has a bunch of methods for finding things
  </>,
  <>
    <code>document.getElementById("abc")</code> - Gets a reference to an element with id "abc"
  </>,
  <>
    <code>document.getElementsByClassName("c")</code> - Gets all elements with class "c"
  </>,
  <>
    <code>document.querySelector("#a")</code> - Finds a single element using a CSS selector
  </>,
  <>
    <code>document.querySelectorAll("header div")</code> - Finds all elements matching a CSS
    selector
  </>,
]);

export const CommonProperties = generateContentSlide("Common DOM Properties", [
  <>
    <code>element.innerText</code> - The text of an element. Readable or writeable
  </>,
  {
    text: (
      <>
        <code>element.innerHTML</code> - The HTML contents of an element
      </>
    ),
    children: [
      "Can change to add / remove elements",
      "This can be a bit tricky to get right",
      "Great power / great responsibility",
    ],
  },
  <>
    <code>element.id</code> - The id of the element. Readable or writeable
  </>,
  {
    text: (
      <>
        <code>element.classList</code> - Lets you see all the classes of an element
      </>
    ),
    children: [
      <>
        <code>element.classList.add("test")</code> - Adds a new class of "test". Powerful with CSS
      </>,
    ],
  },
]);

export const CreatingElements = generateContentSlide("Creating Elements with JS", [
  "We covered creating elements with innerHTML",
  "innerHTML is powerful but unwieldy",
  "Need to format your elements in HTML",
  "If these elements need event listeners, you end up needing JS in HTML in JS (in an HTML page)",
  "When building complex element structures, there is a potentially better way",
]);

export const DocumentCreateElement = generateContentSlide("document.createElement", [
  <>
    <code>document.createElement("div")</code> - Creates a DOM div
  </>,
  "Add text / classes / etc with normal DOM properties",
  "Starts out unattached to the page. Need to tell JS where to put it",
  <>
    <code>element.appendChild(child)</code> - Attach the child as the last child of another element
  </>,
  <>
    <code>element.insertAdjacentElement('afterend', sibling)</code> - Attach the sibling element
    next to the element
  </>,
]);

export const HowDoMakeInteractive = generateMessageSlide(
  "How do you make a web page respond to user input?"
);

export const Events = generateContentSlide("Events", [
  'Browsers represent user inputs as "events"',
  'You can "listen" for events and run JavaScript functions when they happen',
  "Events are represented as objects in JavaScript and can be passed to your function",
  "Event objects have some information about what happened",
  "Events are either associated with an element or are global",
]);

export const WhatCanTheUserDo = generateContentSlide("What kinds of events can we listen for?", [
  'Web pages can respond to a lot of different "events"',
  "Mouse/Pointer Inputs - click, mousedown, mouseup, mouseenter, mouseleave, mousemove, etc",
  "Keyboard Inputs - keypress, keydown, keyup",
  "Form Inputs - change, submit, input",
  "Viewport Events - resize, scroll, offline, online",
  "... and many more",
]);

export const MostCommonEvents = generateContentSlide("Common Events", [
  <>
    <code>click</code> - Fired when the user clicks on an element. Does not need to be a button
  </>,
  <>
    <code>change</code> - Fired after a user changes an input field and moves to something else
  </>,
  <>
    <code>input</code> - Fired each time a user updates an input. Fires immediately
  </>,
  <>
    <code>submit</code> - Fired when a user submits a form. Dependent on HTML structure but gives
    nice UI
  </>,
]);

export const AttachingEvents = generateCodeSlide(
  "Attaching Events to Elements",
  [
    'Event "listeners" are attached to either an HTML element or the document / window',
    {
      text: "One way to listen for events is adding an onEVENT attribute",
      children: ["(Swap out EVENT with the name of the event you want to watch)"],
    },
    "As the attribute value, call a JavaScript function",
  ],
  {
    code: synHTML`
<button onclick="doSomething()">
<script>
    function doSomething() {
        // ...
    }
</script>
    `,
  }
);

export const EventBubbling = generateCodeSlide(
  "Event Bubbling",
  [
    "Events in JavaScript may trigger event listeners on multiple elements",
    "Events will usually trigger appropriate listeners on all parent elements",
    "Interacting with an element often implies interacting with the parent element",
    "This is not based on physical page layout",
    <>
      This can be cancelled with <code>event.stopPropagation()</code>
    </>,
  ],
  {
    code: synHTML`
<div onclick="console.log('div')">
    <button onclick="console.log('button')">Click me</button>
</div>
    `,
  }
);

export const EventDefaults = generateContentSlide("Event Defaults", [
  {
    text: "Some HTML elements come with baked in behaviors",
    children: [
      "Links will navigate the browser to another page",
      "Submitting forms will sometimes make pages refresh",
    ],
  },
  "Sometimes it is helpful to turn those off with event.preventDefault",
  "Forms are the most common case for this IMO",
]);

export const AddEventListener = generateCodeSlide(
  "addEventListener",
  [
    "Sometimes it's helpful to add event listeners in JavaScript",
    "This keeps the HTML a bit cleaner",
    "Less awkward for creating listeners for elements that were created in JS",
    "Provide the event to watch for and the function to call",
    'Don\'t put "on" in the event name',
  ],
  {
    code: synJS`
const myButton = document.getElementById("some-button");
myButton.addEventListener("click", doSomething);
function doSomething() {
    console.log("clicked")
}`,
  }
);

export const CreateTodoList = generateMessageSlide("Let's create a To-Do list");

export const references: Reference[] = [
  {
    label: "DOM Tutorial",
    url: "https://www.javascripttutorial.net/javascript-dom/",
    note: "This is a good reference but covers more than what we've learned in class so far",
  },
  {
    label: "MDN DOM Reference",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
    note: "This guide is a bit long-winded but try to power through it. If you're getting confused, don't worry too much",
  },
];
