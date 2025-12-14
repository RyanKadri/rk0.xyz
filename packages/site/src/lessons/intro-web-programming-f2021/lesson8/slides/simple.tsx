import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Functions and Callbacks", "Ryan Kadri");

export const AddEventListenerQuestions = generateContentSlide("addEventListener", [
  "We just used a function in a new way there...",
  <>
    Why not{" "}
    <code>
      myButton.addEventListener("click", <u>handleClick()</u>);
    </code>
    ?
  </>,
  "Usually we want to call a function",
  "In this case, we want to say what to do when a button is clicked",
]);

export const AnotherExample = generateCodeSlide("Another Example", ["What happens in the code below?"], {
  code: synJS`
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log( multiply(2, add(1,2)) );
    `,
});

export const FunctionOrders = generateContentSlide("Resolving Unknowns", [
  "For JavaScript to run a line of code, it needs to resolve unknowns",
  "Think about arithmetic. How do you solve 2 * (1 + 2)?",
  "Before JS can run a function, it needs to know the arguments",
  "Also, when you call a function, JS can use its return value",
]);

export const AddEventListenerExplanation = generateContentSlide("addEventListener", [
  <>
    Why not{" "}
    <code>
      myButton.addEventListener("click", <u>handleClick()</u>);
    </code>
    ?
  </>,
  "Because to call addEventListener, JavaScript needs to call handleClick first",
  'That ends up essentially "clicking" the button',
  <>
    <code>
      myButton.addEventListener("click", <u>handleClick</u>);
    </code>{" "}
    does not
  </>,
  "It tells addEventListener what function to call when the button is clicked",
  "... but it does not run the function right away",
  "Known as a callback function",
]);

export const OtherUseCases = generateMessageSlide("That seems pretty specific. Does anything else work like that?");

export const SetTimeoutExample = generateCodeSlide(
  "setTimeout",
  ["How do you make something happen after a specific delay?", "Or maybe make something happen every 5 seconds?"],
  {
    code: synJS`
function logHello() {
    console.log("Hello")
}

setTimeout(logHello, 3000); // Logs "Hello" in 3000 ms (3 sec)
setInterval(logHello, 5000); // Logs "Hello" _every_ 5000 ms (5 sec)
    `,
    codeBlock: { canExecuteCode: true },
  },
);

export const FindThings = generateContentSlide("Let's do some problems", [
  "Find the first number greater than 10 in an array",
  "Find the first name in the list that starts with S",
  "Find the first prime number in a list",
]);

export const FilterThings = generateContentSlide("Filter Things", [
  "Write a function that takes an array of numbers and returns a new array that does not contain any even numbers",
  'Write a function that takes an array of names and returns a new array that does not contain any names that have "Janice" in them',
  "Take an array and return a new array without prime numbers",
]);

export const DecisionPoints = generateContentSlide("Callbacks", [
  "Certain types of problems come up a lot in programming (find, filter, map, etc)",
  'Solutions usually look the same except for a critical "decision point"',
  'Can we find a way to swap out just the "decision point" in a function?',
  "We could solve these problems once and only swap out the decision point",
]);

export const Callbacks = generateContentSlide("Callbacks", [
  "We can replace the critical decision with a function",
  "This function parameter is often called a callback",
  'The generic function uses it to "call back" and check on how to do its critical decision point',
]);

export const FunctionsAsVariablesSimple = generateCodeSlide(
  "Functions",
  [
    "Functions can be labeled by variables like any other data",
    "Once assigned to a variable, the variable name can be used to call the function",
  ],
  {
    code: synJS`
function add(a, b) {
    return a + b;
}

const myRenamedFunction = add;
myRenamedFunction(1,2) // Returns 3
`,
  },
);

export const FunctionsAsVariablesPart2 = generateCodeSlide(
  "Functions",
  [
    "Whole functions can even be passed as parameters to or returned from other functions",
    "This is what happens in addEventListener",
  ],
  {
    code: synJS`
function sayHello() {
    console.log("Hello")
}

function doSomethingTwice(something) {
    something();
    something();
}

doSomethingTwice(sayHello)
`,
  },
);

export const FindAThingGeneric = generateCodeSlide("Find a Thing", [], {
  code: synJS`
function findAThing(myArray, decisionPoint) {
    for(const element of myArray) {
        if(decisionPoint(element)) {
            return element;
        }
    }
}

function isGreaterThan10(number) {
    return number > 10;
}

function startsWithS(name) {
    return name.startsWith("S")
}

findAThing([1,2,5,7,11,14], isGreaterThan10);
findAThing(["Adelaide", "Nathan", "Sky", "Sarah"], startsWithS);
`,
});

export const SetTimeoutPart2 = generateCodeSlide(
  "setTimeout",
  [
    "setTimeout takes a function as its first parameter...",
    "...and a number of milliseconds as its second",
    "JavaScript schedules the function to run after that many milliseconds",
  ],
  {
    code: synJS`
function logHello() {
    console.log("Hello")
}

setTimeout(logHello, 3000); // Logs "Hello" in 3000 ms (3 sec)
    `,
    codeBlock: { canExecuteCode: true },
  },
);

export const TimeoutWaitWhat = generateCodeSlide("What Happens?", [], {
  code: synJS`
function sayHi() {
    console.log("Hi")
}

setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
`,
});

export const WhyTimeoutsWhy = generateContentSlide("setTimeout", [
  "Why do timeouts work this way?",
  <>
    <code>setTimeout</code> <strong>schedules</strong> something to happen
  </>,
  "JavaScript doesn't wait around until something happens",
  "Running setTimeout 5 times in a row happens almost instantly",
  "With no delay between calls, the scheduled functions trigger at almost the same time",
]);

export const CanWeSolve = generateMessageSlide("How do we make timeouts run in order?");

export const NestedTimeouts = generateCodeSlide("Nested Timers?", [], {
  code: synJS`
function part1() {
    console.log("Hi.");
    setTimeout(part2, 1000);
}

function part2() {
    console.log("My")
    setTimeout(part3, 1000);
}

function part3() {
    console.log("name")
    setTimeout(part4, 1000);
}

function part4() {
    console.log("is")
    setTimeout(function() {
        console.log("Ryan")
    }, 1000);   
}
`,
});

export const references: Reference[] = [
  {
    label: "A short callback summary",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
  },
  {
    label: "More in-depth callback explanation (sync and async)",
    url: "https://www.javascripttutorial.net/javascript-callback/",
  },
];
