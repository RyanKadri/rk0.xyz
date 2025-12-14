import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

export const TitleSlide = generateTitleSlide("Introduction to JavaScript", "Ryan Kadri");

export const JavascriptVsCSS = generateContentSlide("HTML and CSS vs JavaScript", [
  "We're moving onto JavaScript from HTML and CSS",
  "HTML and CSS are tricky because you have tons of tools",
  "JavaScript has a much smaller set of tools but you have to combine them right",
  'JavaScript is a "real" programming language',
]);

export const WhatIsAProgrammingLanguage = generateContentSlide("What is a Programming Language?", [
  "A way to precisely define a series of computer operations in text",
  "Gives you control and flexibility over execution",
  "Should be able to solve a wide range of problems",
  "Usually has logic for making decisions and repeating operations",
]);

export const JavaScriptProgrammingType = generateContentSlide("What is JavaScript?", [
  "JavaScript helps you make web pages interactive",
  "Lets you give the browser instructions about how to behave",
  "Allows you to respond to user input",
  "Can do complex operations and calculations",
  "Can modify your web page structure and content",
]);

export const LongestNameProblem = generateMessageSlide("Given a list of names, which name is the longest?");

export const WhatTypesOfData = generateMessageSlide('What kinds of "data" go into solving that problem?');

export const DataTypes = generateContentSlide("Managing Data in JavaScript", [
  {
    text: "JavaScript works with different types of data",
    children: ["Numbers", "Strings", '"Booleans"', "null / undefined", "A few others"],
  },
]);

export const VariablesExamples = generateCodeSlide(
  "Variables",
  [
    "Variables give a label for data",
    "Variables can be referenced in other expressions",
    'Variables are assigned with "const", "let", or "var"',
    "var is discouraged (obsolete?)",
    'The label can be re-pointed to new data if you use "let"',
  ],
  {
    code: synJS`
const myName = "Ryan";
let myAge = 28;
const isATeacher = true;
const nothing = null;
var isObsolete = true; // Try to avoid this one
`,
  },
);

export const Operators = generateCodeSlide(
  "Operators",
  [
    "Operators let you create expressions",
    "Operators take 1-3 values",
    "You can build pretty complex expressions (with order of operations)",
  ],
  {
    code: synJS`
const a = 1;
const b = a + 2;
let c = a * 3 - b;
c++;
const d = "The answer is: " + c;
const f = c > b;
`,
  },
);

export const ConditionalExample = generateCodeSlide(
  "Conditionals",
  ["Normal JavaScript runs line-by-line", "Conditionals allow you to make a decision", "Run one code block or another"],
  {
    code: synJS`
if (someNumber < 123) {
    // Do a thing
} else if (something > 200) {
    // Do something else
} else {
    // Do something else
}

const a = 123;
if (a) {
    // Do a thing
}
    `,
  },
);

export const WhileLoops = generateCodeSlide("While Loops", [`While loops run as long as something is "truthy"`], {
  code: synJS`
let counter = 0;
while(counter < 5) {
    console.log(counter);
    counter ++;
}

let test = "blahh"
while(test) {
    // Runs forever
}`,
});

export const ForLoops = generateCodeSlide(
  "For Loops",
  [
    '"For-loops" are for iterating a specific number of times',
    "There are a couple syntaxes. One is for iterating over a known set of items. The other is a bit more flexible",
  ],
  {
    codeBlock: {
      canExecuteCode: true,
    },
    code: synJS`
const myFavoriteNumbers = [1,2,3];
// Create a variable called "number" for each element in myFavoriteNumbers
for(const number of myFavoriteNumbers) {
    console.log(number);
}

// Iterate from 0 to 4
for(let i = 0; i < 5; i++) {
    console.log("Here is a number: " + i)
}`,
  },
);

export const FunctionsExample = generateCodeSlide(
  "Functions",
  [
    "Functions let us group and name a series of operations",
    "Functions take parameters and return a result",
    "Functions can be called elsewhere in your code",
    "You can call your function like myFunction(param1, param2)",
  ],
  {
    code: synJS`
function sayHello() {
    console.log("Hello");
}

function doMath(a, b) {
    return a + b;
}

function printMath(a,b) {
    console.log(doMath(a,b))
}`,
  },
);

export const ArraysExample = generateCodeSlide(
  "Arrays",
  ["Arrays hold ordered lists of values", "Adding elements to an array is easy", "Positions start at 0"],
  {
    codeBlock: {
      canExecuteCode: true,
    },
    code: synJS`
const myFavoriteNumbers = [1,2,3];
const names = ["Alice", "Bob", "Eve"];
const mixed = ["Alice", 2, false];

for(const element of mixed) {
    console.log(element);
}

console.log(mixed[0]);
mixed[3] = "something";
    `,
  },
);

export const Objects = generateCodeSlide(
  "Objects",
  [
    "Objects can store related information about a thing",
    <>
      Can later pull out subfields with <code>.something</code> syntax
    </>,
    "Properties can be added (and removed) over time",
  ],
  {
    code: synJS`
const ryan = { name: "Ryan", age: 28, job: "Developer", id: "abc123" };
person.age ++;
console.log(ryan.name) // Prints "Ryan"
`,
  },
);

export const StringsPart2 = generateCodeSlide(
  "Strings",
  ["Strings are like arrays of characters", "Cannot be modified directly", "Many built-in methods"],
  {
    codeBlock: {
      canExecuteCode: true,
    },
    code: synJS`
const myName = "Ryan Kadri";

for(const letter of myName) {
    console.log(letter);
}

console.log(myName.toLowerCase()) // "ryan kadri";
console.log(myName.repeat(2)); // "Ryan KadriRyan Kadri"
console.log(myName.substring(0,4)) // "Ryan";
console.log(myName.split(" ")) // [ "Ryan", "Kadri" ];
`,
  },
);

export const LetsGetStarted = generateMessageSlide("Let's Get Started");

export const references: Reference[] = [
  {
    label: "MDN JavaScript Reference",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { label: "Learn Programming Online", url: "https://learnprogramming.online/" },
  { label: "Learn JavaScript Online", url: "https://learnjavascript.online/" },
];
