import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML, synJS } from "../../../../common/highlighting";

export const TitleSlide = generateTitleSlide("JavaScript and the DOM", "Ryan Kadri");

export const Recap = generateMessageSlide("Let's Recap...")

export const MapArrayImmutable = generateMessageSlide(
    "Write a function that takes in an array and returns a new array with each item doubled"
);

export const FirstNameAlphabetically = generateMessageSlide(
    "Write a function that finds the object with the first name, alphabetically"
);

export const LogVsReturn = generateContentSlide("return vs console.log", [
    <>New developers often get confused between <code>return</code> and <code>console.log</code></>,
    { text: <><code>return</code> tells the caller function the result of a function</>, children: [
        "Useful when you want to use the result of a calculation"
    ]},
    { text: <><code>console.log</code> makes a logging record of a message</>, children: [
        "Useful for debugging and seeing if something happened",
        "Only useful to a developer. Not visible to a normal user"
    ]}
])

export const LogVsReturnPart2 = generateCodeSlide("return vs console.log",
    [],
    { code: synJS`
function doMath(a, b) {
    return a + b;
}

function logMath(a,b) {
    console.log(a + b);
}

let a = doMath(1,2); // a is now 3
let b = logMath(1,2); // b is undefined (no value)
    ` }
)

export const HowConnect = generateMessageSlide("So how does JavaScript connect to HTML and CSS?");

export const TheProblem = generateContentSlide("JavaScript / Web Page Interactions", [
    { text: "JavaScript needs to be able to change things on a page", children: [
        "Change element text",
        "Add new content",
        "Change class, attributes, etc"
    ]},
    "JavaScript should be able to identify HTML elements",
    "User interactions should be able to trigger JavaScript",
]);

export const DOM = generateContentSlide("The DOM", [
    "Stands for Document Object Model",
    "A bunch of related JavaScript objects that represent the HTML content of the page",
    { text: "HTML elements each have a bunch of related properties", children: [
        "Text Content",
        "Attributes (class, id, styles, other)",
    ] },
    "These objects are kept in sync with the page",
    "You can read values from these objects to get user input",
    "You can write values for certain properties to change the page"
]); 

export const DocumentObject = generateCodeSlide("The document Object", [
    <>The <code>document</code> object is your door into accessing DOM objects</>,
    "Has a number of useful properties and methods for accessing elements",
    <><code>document.getElementById()</code> - Gets an element with a particular id attribute</>,
    <><code>document.getElementsByClassName()</code> - Gets all elements with a particular class attribute</>,
    <><code>document.querySelector()</code> - Gets the first element with a CSS selector</>
], {
    code: synJS`
// <h1 id="my-heading">This is a heading</h1>
const heading = document.getElementById("my-heading");
heading.textContent = "New heading text";
    `
});

export const ScriptTag = generateCodeSlide("The <script> tag", [
    <>The <code>{ "<script>" }</code> tag lets you put JavaScript on your HTML page</>,
    "Lets you either write JavaScript right in HTML or in another file",
    "Variables and functions become global on the page"
], {
    code: synHTML`
<html>
    <body>
        <h1>My page</h1>
        <script>
            const a = 1;
            console.log(a + 2);
        </script>
    </body>
</html>
    `
});

export const WaitWhyBodyTag = generateCodeSlide("Wait. Why is that script tag in the body?", [
    "Browsers read HTML in order",
    "If scripts show up before elements, they can't read/update the elements",
    <>The order of multiple <code>{"<script>"}</code> tags matters a lot too</>
], {
    code: synHTML`
<html>
    <head>
        <script>
            const a = document.getElementById("heading");
            // a is null
        </script>
    </head>
    <body>
        <h1 id="heading">My Page</h1>
    </body>
</html>
    `
});

export const UserInputIntro = generateCodeSlide("Reacting to User Input", [
    "To react to user inputs, HTML elements should trigger JavaScript functions",
    "One way to do this is to create a function and reference it in an HTML attribute",
    "Remember that JavaScript has two separate steps - Defining a function and calling it"
], { code: synHTML`
<html>
    <body>
        <button onclick="handleClick()">Click Me</button>
        <script>
            function handleClick() {
                console.log("Button was clicked")
            }
        </script>
    </body>
</html>
`
})

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