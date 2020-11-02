# Lab 5: Callbacks and Timers

## Overview

In this lab, you will be learning about callbacks. Callbacks are functions that are passed as parameters to another function and called zero or more times to help customize some aspect of the function being called. JavaScript has some built-in functions/methods that take a callback as a parameter and can help you simplify some tasks. In some other cases, callbacks can be used to allow JavaScript to do things asynchronously (wait 5 seconds before calling a function, make a request to a server and do something with the result). This lab will give you a chance to work with multiple types of callbacks to simplify and enhance your web applications.

## Part One - Synchronous Callbacks

JavaScript has a few built-in methods that accept a callback and can help simplify certain array operations:

- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - Takes a function as an input. Calls the function once on every element in the array in order. The result of each operation is returned as a new array.
  - For instance, `[1,2,3].map(doubleNumber)` returns `[2,4,6]` if `doubleNumber` is a function that accepts a single number and returns twice that input number.
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - Takes a function as an input. Calls the function once on every element in the array in order. If the function returns true for a given element, that element will be part of a new returned array.
  - For instance, `[2,3,4,5].filter(isEven)` returns `[2,4]` if `isEven` is a function that accepts a single number and returns true if it is even.
- [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) - Takes a function as an input. Calls the function once on every element in the array in order. If the function returns true for a given element, that element will immediately be returned and the method will stop running.
  - For instance, `[9,10,14,15].filter(isGreaterThan10)` returns `14` if `isGreaterThan10` is a function that accepts a single number and returns true if it is bigger than 10.

Please use these methods to write functions that do each of the following:

1. Takes in an array of numbers. Returns a new array with only the numbers that have a 7 in the final digit.
1. Takes in an array of strings. Returns a new array that contains the uppercase version of the strings
1. Takes an array of strings. Returns a new array with the lengths of strings that are palindromes (in order).
  - eg. `lengthsOfPalindromes(["a", "ab", "aba", "racecar", "cat"])` returns `[1,3,7]`
  - Hint: You probably want to reuse your old `isPalindrome` code and you may need to use two of the methods above

## Part 2: Writing your own callback-accepting functions

Occasionally, it is useful to write functions that accept a callback. Imagine if the `Array.map` function above did not exist. Nothing would stop you from writing it yourself. Please write the following functions that accept callbacks:

- A function `separate` that accepts an array and a function that returns true or false. It should run the function for every element in the array. Your `separate` function should return an array that itself contains two arrays. The first array should contain every element for which the callback function returned true. The second array should contain every element for which the callback function returned false.
  - Example: `separate([1,2,3,4,5,6], isEven)` returns `[[2,4,6], [1,2,3]]`
- A function `bestOfBothWorlds` that accepts two arrays of equal length with any kind of elements (numbers, strings, etc) as well as a function. Your function should pass corresponding elements from each array (1st element of each, 2nd element of each, etc) into the parameter function and it should decide which of the two elements is "better". Your function should return an array with the better element at each position.
  - Example: `bestOfBothWorlds([1,11,2], [15, 7, 5], biggerIsBetter)` returns `[15,11,5]` if `biggerIsBetter` is a function that takes two numbers and returns the bigger one.

## Part 3: Analog Clock

Please download the zip file at the end of this lab writeup. It contains an index.html file and a clock.css file.  When you load the HTML page in your browser, you should see a picture of an analog clock. Your job is to make the hands tick. There is a grey hour hand, a green minute hand, and a blue second hand. You should create a time.js file that will be linked to the index.html file. You should not need to update the HTML file.

In your time.js file, you should use one of JavaScript's timer functions (setInterval or setTimeout) to update the position of the clock hands every second. Some of the CSS included in clock.css helps makes this decently straightforward. You can apply a style to the clock hands like this:

hand.style.transform = "rotate(30deg)"

Where hand is a reference to the hand you are interested in rotating. Note that this rotation is an *absolute* rotation from the original position. This style does not "keep track" of how many times you have applied it.

Your clock should accurately show the current time. Check out the following link to figure out how to get the current time in JS: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object>.

## Submitting

As usual, to submit this lab, please create a single zip file and upload it to Canvas under the appropriate assignment. The zip file should contain separate folders for each part. You can define your one-off functions all in the same file or in separate files as you prefer.

## Grading

For parts 1 and 2, I am mostly concerned with the correctness of your functions and whether or not you used callbacks correctly. For part 3, please make sure your clock starts at the right time and runs accurately (more or less). Your minute hand and hour hand should work.

## Assets