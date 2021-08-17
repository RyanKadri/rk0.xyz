import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

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

export const Methods = generateCodeSlide("Methods", [
    "Objects can have functions that operate on their data",
    "These functions are called methods",
    `Methods use the special keyword "this"`,
    "Use the dot operator to call them"
], {
    code: synJS`
    const ryan = { 
        firstName: "Ryan", lastName: "Kadri", age: 26,
        getFullName() { return this.firstName + " " + this.lastName },
        birthdayParty() { this.age ++ }
    };
    
    console.log(ryan.getFullName());
    `
});

export const Objects = generateCodeSlide("Objects", [
    "Objects can store related information about a thing",
    "Properties can be added (and removed) over time",
    "You can access properties with a dot (.)"
], {
    code: synJS`
const ryan = { name: "Ryan", age: 26, job: "Developer", id: "abc123" };
person.age ++;
delete person.name;
person.firstName = "Ryan";
person.lastName = "Kadri";
    `
});

export const RegularExpressions = generateCodeSlide("Regular Expressions", [
    "Used for validating strings, extracting values, and more",
    "Has a weird syntax",
    "Fairly consistent across languages"
], { code: synJS`
const usernameChecker = /^[a-z][a-zA-Z0-9_]*$/;
usernameChecker.test("rjk123"); // true
usernameChecker.test("rjk.xyz"); // false
usernameChecker.test("rjk_xyz"); // true
usernameChecker.test("") // false
usernameChecker.test("123") // false

const longString = "My name is Ryan Kadri. Who are you?";
const matches = longString.match(/My name is (.*?)\./);
console.log(matches[1]); // Ryan Kadri
` });

export const StringsPart2 = generateCodeSlide("Strings (Revisited)", [
    "Strings are like arrays of characters",
    "Cannot be modified directly",
    "Many built-in methods"
], {
    code: synJS`
const myName = "Ryan Kadri";

for(const letter of myName) {
    console.log(letter);
}

console.log(myName.toLowerCase()) // "ryan kadri";
console.log(myName.repeat(2)); // "Ryan KadriRyan Kadri"
console.log(myName.substring(0,4)) // "Ryan";
console.log(myName.split(" ")) // [ "Ryan", "Kadri" ];
    `
});

export const VariablesRedux = generateCodeSlide("Variables", [
    "Variables are defined with let and const",
    "They label a piece of data",
    'Variables defined with "let" can be reassigned. "const" variables cannot',
], {
    code: synJS`
let data = "Ryan";
data = 123;
data = false;
data = null;
const something = 456;
something = 123 // TypeError
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