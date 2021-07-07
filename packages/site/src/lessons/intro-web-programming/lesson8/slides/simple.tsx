import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../common/highlighting";

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

export const AddEventListenerQuestions = generateCodeSlide("addEventListener", [
    "What just happened there?",
    <>Why not "<code>myPanel.addEventListener("click", <u>changeColor()</u>);</code>"?</>
], {
    code: synJS`
    const myPanelHeader = document.querySelector(".my-panel header");
    myPanel.addEventListener("click", changeColor);
    
    function changeColor() {
        myPanelHeader.style.color = "red"
    }
    `
});

export const Timeouts = generateCodeSlide("Timers", [
    "You can use the setTimeout function to do things after a certain delay",
    "Pass a function (for what to do) and a delay time (in ms)"
], { 
    code: synJS`
function printHello() {
    console.log("Hello!");
}

function annoying() {
    console.log("Is this annoying?");
}

setTimeout(printHello, 1000);
setInterval(annoying, 1000);
`
});

export const FunctionsRedux = generateCodeSlide("Functions", [
    "Functions are just like other data types",
    "They can be assigned, returned, and passed as parameters"
], {
    code: synJS`
function add(a, b) {
    return a+b;
}

function addOne() {
    return function(a) {
        return add(a,1);
    }
}

function doSomething(arg) {
    return arg(2);
}`});

export const FilterThingsImplementation = generateCodeSlide("Filter Things", [], {
    code: synJS`
function removeEvents(numbers) {
    const result = [];
    for(const num of numbers) {
        if(num % 2 !== 0) {
            result.push(num);
        }
    }
    return result;
}

function cancelJanice(people) {
    const result = [];
    for(const person of people) {
        if(person.includes("Janice")) {
            result.push(person);
        }
    }
    return result;
}`});

export const FindAThingGeneric = generateCodeSlide("Find a Thing", [], {
    code: synJS`
function findAThing(myArray, decisionPoint) {
    for(const num of numbers) {
        if(decisionPoint(num)) {
            return num;
        }
    }
}

function isLessThan10(number) {
    return number < 10;
}

function startsWithS(name) {
    return name.startsWith("S")
}

findAThing([1,2,5,7,11,14], isLessThan10);
findAThing(["Adelaide", "Nathan", "Sky", "Sarah"], startsWithS);
`});

export const FindThing = generateCodeSlide("Find a Thing", [], {
    code: synJS`
function findFirstGreaterThan10(numbers) {
    for(const num of numbers) {
        if(num > 10) {
            return num;
        }
    }
}

function findFirstStartsWithS(names) {
    for(const name of names) {
        if(name.startsWith("S")) {
            return name;
        }
    }
}

function findFirstPrime(numbers) {
    for(const num of numbers) {
        if(isPrime(num)) {
            return el;
        }
    }
}`
});

export const FunctionsAsVariablesSimple = generateCodeSlide("Functions", [
    "Functions can be labeled by variables like any other data",
    "Once assigned to a variable, the variable name can be used to call the function",
], {
    code: synJS`
function add(a, b) {
    return a + b;
}

const myRenamedFunction = add;
myRenamedFunction(1,2) // Returns 3
`
});

export const FunctionsAsVariablesPart2 = generateCodeSlide("Functions", [
    "Whole functions can even be passed as parameters to or returned from other functions",
    "This is what happens in addEventListener"
], {
    code: synJS`
function sayHello() {
    console.log("Hello")
}

function doSomethingTwice(something) {
    something();
    something();
}

doSomethingTwice(sayHello)
`
});

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
`
});

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
`
})

export const references: Reference[] = [
    { label: "A short callback summary", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function" },
    { label: "More in-depth callback explanation (sync and async)", url: "https://www.javascripttutorial.net/javascript-callback/" }
]