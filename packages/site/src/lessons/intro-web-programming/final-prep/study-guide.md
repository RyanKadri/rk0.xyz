# Introduction to Web Programming - Final Exam Study Guide

## Exam Format

When: Wednesday December 16th -- Available all day
Time Limit: 3 hours
Open Book / Computer: Yes
Content: The exam will contain a mix of freeform concept questions, JavaScript problem solving, "find the bug" questions, and "recreate this target web page" problems similar to what you've seen on quizzes and the midterm up to this point.

## What is not on the test?

- Regular Expressions
- Specific CSS frameworks and JS libraries
    - I won't ask questions about specific libraries but you should know generally how libraries are included in your site (and maybe a bit about their structure)
- "What comes next" content from the last class
- Writing Promises from scratch
    - It may still be fair game to *read* / work with custom promises
- Async functions are not strictly required but can potentially make your code easier to write

## Topics

This may not be a 100% complete list of topics but it should get you most of the way to what you need. The slides are your friends and some of the interactive slides / code examples might be really helpful.

## HTML Topics

- Structure and Syntax. How do you write valid HTML? Know the verbiage (elements, attributes, classes, IDs, etc)
- Purpose / Goal - Structure over presentation. Using the right tags
- Know how to use the developer tools to inspect a given web page's HTML
- Some Elements - You don't need to know every single HTML element for the test. A good "toolbox" of tags includes:
    - html: parent element for your page
    - body: where the page content goes
    - head: where the page metadata (title, stylesheets, etc) goes
    - script: include JavaScript
    - link: include CSS files
    - style: include CSS in your HTML directly
    - p: paragraph
    - a: link
    - span: inline text
    - div: generic container
    - section: another container type
    - ul: unordered list
    - table: like it sounds (also includes tbody, tr, td, thead, th)
    - input: user input field (often a textbox)
    - h1-h6: headings, titles of sections

## CSS Topics

- CSS Selectors - You should know the basic selector parts (. for class, # for id, plain text for tags) as well as combinators (eg. `div #my-input` looks for an element with an id of my-input somewhere inside a div)
    - You do not need to memorize all the weird possible selector types but you should be able to look them up if needed
- Purpose of CSS - Why do we use CSS? Advantages over inline styles?
- Selector Specificity - If two selectors try to apply the same style to an element, which wins?
- How to include CSS in HTML
- Responsive Design
    - What is a breakpoint?
    - Media queries
    - Using media queries to change a grid / flexbox layout
    - Flexbox properties: parallel and perpendicular position, direction
- How to include CSS Frameworks. What kinds of things do they provide?
- Some CSS Styles - You don't need to know every single possible CSS Style. Here are a few important ones
    - color, background-color: guessing a few named colors will be fine for the exam if you're trying to match a color. You should know what the other color types are though
    - border
    - margin, padding: margin is outside the border, padding is inside
    - display: inline, block, inline-block, flex, grid
    - position: absolute, fixed, relative
    - width, height

## JavaScript Topics

- Data Types
- Variables (const vs let)
- Variables are labels and not buckets to store data. Understand the evil twin example
- if/"else if"/else Conditions
- Loops
    - Practice writing some functions that use loops. Maybe have some of those loops `return` in a conditional in the middle. Make sure you can trace, line by line, what JavaScript is doing
- Functions - Understand the difference between defining a function and calling a function
    - `return` ends your function. Returning a value too early will stop your code. Maybe you need to store something in a variable rather than just returning?
- Arrays - Know how to read elements in a loop. Know how to add to the end. Know how to look at specific positions (`myArray[0]`)
- Strings - Understand how to perform simple String tasks (Can you concatenate strings? Can you build up bigger strings that include variables?)
    - Practice validating strings. Can you loop over strings to check "are all characters uppercase"?
    - Regular expressions, while not required, may make this kind of problem a lot easier
- Know how to include JavaScript in HTML
- Know what `document.querySelector` does
    - It uses a CSS selector and returns a reference to an element from your HTML
- Know a few things you can do once you get a reference to an HTML element in JavaScript
    - Change element text: `myElement.innerText = "something"`
    - Get the value from an input: `const username = myInputElement.value`
- Know how to respond to user input:
    - Add an `onxyz` attribute to an element. A couple handlers to know for now are `onclick, onchange, oninput`
- Make sure you understand how to the website validation project works
- Know how to use the developer tools console to run and test your JS functions

## Callbacks and Promises

- Know what a callback is
- Be able to write a function that accepts a callback
    - Can you write a function that accepts a callback function and runs it 5 times?
- Be aware of the built-in array methods that accept callbacks. Think about why they are useful.
    - It probably helps to know how to call `.map` and `.filter`
- Understand the syntax of "anonymous functions". You don't necessarily need to use them yourself but you should understand what they're saying
    - They let you write callbacks quicker but aren't doing anything too crazy. The following 3 snippets are mostly the same (although you can reuse the doubleNum function in the 3rd example if you wanted)
    - `[1,2,3].map(num => 2 * num)`
    - `[1,2,3].map(function(num) { return 2 * num } )`
    - ```
       [1,2,3].map(doubleNum);
       function doubleNum(num) {
           return 2 * num;
       }
    ```
- Understand how to use "basic" Promises
    - fetch is the most obvious place you are going to need them.
- Understand how to chain Promises. Understand the `.then(AAA).then(BBB).then(CCC)` structure
- Understand how to handle errors in promises with `.catch`


## Hosting / The Network

- What is a URL? What are the parts?
    - Protocol: What language the client wants to speak (http, https, ...)
    - Domain Name: Who to talk to
    - Port: What service to talk to (often defaults to 80 or 443)
    - Path: What to ask the server for
    - Query Parameter: A few parameters for how to make the request
- What are the parts of a request and response?
    - Request: Method, URL, Headers, Body
    - Response: Code, Headers, Body
- What do you need to host a site?
    - Domain Name: Need to pay for this part
    - Server: Hardware and software
    - Public IP: A name tag for your server. Not to be mistaken for a private IP
    - Firewall Rules: Can people actually access your server? Does the OS or router block them?


## Tips

- Set up a template web page in Visual Studio Code. Make sure you can get Live Server working with your template before the final. This will help shorten setup time during the test
- Make sure you know how to run your function in your browser's developer tools. The final is open book / open computer so you should be able to try out any functions you write
- Use Visual Studio Code to write your code. It might feel easier to write code directly into Canvas but VSCode's syntax highlighting will help you know if you've made JavaScript errors
- The exam is 3 hours long. Hopefully it doesn't take that long for everyone to complete. That said, remember to skim over all the problems and make sure you're not spending a huge amount of time on hard problems if you know the answers to easy problems right off the bat.
- It is not strictly necessary but could be super beneficial to understand how to use the JavaScript debugger in the browser's developer tools (script tag). It will let you step through your code line by line and figure out what's happening if there's an error. We haven't covered this super deeply in class yet so you might need to do a little self-study for that.
- The examples on GitHub are your friend. Even if you don't 100% know how to do something, maybe the examples can help you get started.