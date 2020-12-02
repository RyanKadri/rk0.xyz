import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Functions and Callbacks", "Ryan Kadri");

export const AddEventListenerExplanation = generateContentSlide("Functions as parameters", [
    "Passing the name of a variable into addEventListener tells addEventListener what function to call",
    "The name of a function is like a variable that labels the function",
    "JavaScript treats functions a lot like any other data",
    "This is different from many other programming languages"
]);

export const ThatsAwful = generateMessageSlide("That's awful and confusing! Why would you do that?!");

export const FindThings = generateContentSlide("Let's do some problems", [
    "Find the first number greater than 10 in an array",
    "Find the first name in the list that starts with S",
    "Find the first prime number in a list",
]);

export const FilterThings = generateContentSlide("Filter Things", [
    "Write a function that takes an array of numbers and returns a new array that does not contain any even numbers",
    'Write a function that takes an array of names and returns a new array that does not contain any names that have "Janice" in them',
    "Take an array and return a new array without prime numbers"
]);

export const DecisionPoints = generateContentSlide("Callbacks", [
    "Certain types of problems come up a lot in programming (sort, find, map, etc)",
    "Solutions usually look the same except for a critical decision point",
    "Can we find a way to swap out the critical decision point in a function?",
    "We could solve these problems once and only swap out the decision point",
]);

export const Callbacks = generateContentSlide("Callbacks", [
    "We can replace the critical decision point in the function with a function parameter",
    "This function parameter is often called a callback",
    'The generic function uses it to "call back" and check on how to do its critical decision point',
]);

export const AsyncCallback = generateContentSlide("Asynchronous Callbacks (Preview)", [
    "Certain operations are asynchronous",
    'These operations generally leave "JavaScript Land" and come back',
    "When the operations come back, they run a function",
    "Timeouts and network calls both follow this pattern"
]);

export const ConcurrencyModel = generateContentSlide("Can JavaScript Do Two Things at Once?", [
    "In programming, doing two things at once is called concurrency",
    "Whether JS can do two things at once depends on where JS starts and ends",
    "Technically JavaScript cannot but the browser can**",
    "Concretely, JavaScript will never run two of your functions at the same time",
    "JavaScript is Single-Threaded",
]);

export const CanWeSolve = generateMessageSlide("How do we make timeouts run in order?");

export const references: Reference[] = [
    { label: "A short callback summary", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function" },
    { label: "More in-depth callback explanation (sync and async)", url: "https://www.javascripttutorial.net/javascript-callback/" }
]