# Lab 4: String Manipulation and Forms

<article>

## Overview

In this lab, you will be learning to validate strings and numbers in JavaScript. You will also learn
to accept user input on a web page and give visual feedback when they enter an invalid value.
You will start the lab by writing functions that accept strings / numbers as inputs and validate their correctness.
You will then get a bit of practice with Regular Expressions to learn about a faster/simpler way to work with
strings for certain tasks. Finally, you will create a web page sign up form that uses the techniques from the
last two sections to validate user input and provide quick feedback if they typed something wrong.
This was one of the earliest use cases for having JavaScript in the browser. Hopefully this lab will
bring you closer to our shared programming ancestors.
</article>

<article>

## Part One - Input Validation

For the first part of the lab, you will be writing a number of Javascript functions that will determine
if a given input is valid. 

Please skim through this page: https://www.w3schools.com/js/js_string_methods.asp
for an overview of the important methods that exist on strings. These will help a lot with the problems
below. 

You can name the functions below whatever you would like.

<section>

### Age

Please write a function that takes a numeric age as an input and determines if the age is reasonable
for a user of your site. An age is reasonable if:
- The user is at least 13 years old
- The user is no older than the oldest human alive today

### First/Last Name

Please write a function that takes a single string as an input and returns a boolean for whether or not
the string is a valid first / last name. A name is valid if:
- It starts with a capital letter
- All other letters are lowercase
- It does not contain any numbers or special characters (other than an optional single hyphen)
- It is only one word (no spaces)

### Password

A user must supply a strong password to the site. It cannot:
- Have less than 6 characters
- Have the same character repeated at every single position
- Be purely an incrementing or decrementing series of numbers (1234, 9876, etc.)
- Include the first or last name
- Be in a list of most commonly used passwords

Please write a function that takes four parameters:
- The password (string)
- The first name (string)
- The last name (string)
- The most commonly used passwords (array of strings)

You should return a boolean value that says whether or not the string is a valid password.

</section>
</article>

<article>

## Part Two

In this part of the lab, you will be using Regular Expressions. Regular expressions are a
way to work with strings without needing to write a lot of code. Regular expressions look like a series
of letters and symbols and are a way of defining a type of string. Strings can either match a regular
expression or not. For instance, this is a regular expression `/My name is [a-zA-Z]+/`, and it matches 
strings that start with "My name is " and end with one or more alphabetical character. JavaScript
lets you use regular expressions to test if strings have a certain format. To test a string against
the above regular expression, I could write the following code: 

```javascript 
const regex = /My name is [a-zA-Z]+/;
regex.test("My name is Ryan") // true
regex.test("Something something") //false
```

The forward slashes after the = and before the ; tell JavaScript that a regular expression is starting
(and ending) but do not have any meaning on their own.

The trick with Regular Expressions is just knowing what special characters you can use.
Here are the most common and what they mean:
- **`.`** (*period*) - Represents any character. For instance `/Ry.n/` matches `Ryan` or `Rybn` but not `Ryaan`
- **`*`** (*asterisk*) - The previous character repeats 0 or more times. `/a*/` matches `a` or `aaaaa` but not `b`
- **`+`** (*plus*) - The previous character repeats 1 or more times.
- **`()`** (*parens*) - Starts a group. `(abc)+` matches `abcabc` but not `ab` or `a`
- **`[]`** (*square brackets*) - Describes a group of legal characters for a position. Can use hyphens for a range. For
instance, `/[0-9]+/` matches `123` but not `1b3`.
- **`{#}`** (*curly brackets with a number inside*) - The previous character / group is repeated # times. For
instance `/a{3}/` matches `aaa` but not `aa`
- **`\`** (*backslash*) - Takes away any special meaning of the following character. For instance `/Stop\./` matches
`Stop.` but not `Stop!`. Any of the above characters must be preceeded by a backslash to be matched as themselves
- Most other characters represent only themselves. For instance, `/Test/` matches `Test`

You can combine these characters to test for pretty complicated conditions. For instance, a regular expression
that matches phone numbers might look like this: `/\([0-9]{3}\)-[0-9]{3}-[0-9]{4}/` and would 
match numbers that look like (610)-867-5309. The expression looks for
"3 numbers in parens followed by a dash and then 3 numbers, another dash, and 4 numbers". 

Please feel free to look at this site https://www.w3schools.com/jsref/jsref_obj_regexp.asp
for some additional info or for a better explanation. We will also do some regular expressions
examples in class so have no fear!  

<section>

### Phone Number

Please write a function that takes a single phone number (string) as an input and returns a boolean for whether or
not the phone number is valid. You are expecting phone numbers in the format: "###.###_#### ext ####". The extension
part is optional.

### Username

Please write a function that takes a username (string) and a list of taken usernames (array of strings)
as inputs and returns a boolean for whether or not it is valid. A username is valid if it starts with
a letter, contains only letters and numbers and optionally ends with a !

</section>
</article>

<article>

## Part Three

For this part of the lab, you will be creating a little HTML and CSS page that will act as a sign-up
form for another website. You must collect at least the following information about the user:
- First Name
- Last Name
- Age
- Phone number
- Username
- Password

You also must make sure the data they enter is valid. Therefore, as soon as a user starts typing,
you should give feedback about whether they have entered a valid value for the field. You can use
either the oninput or onchange attribute of your input elements to link up to each of the functions
you wrote above. You can also use the addEventListener function we talked about last class.


If the user provides an invalid value, please display red text under the matching input explaining
that they have made an error. The error message should of course also go away when they fix their mistake.
There should only one version of a given error message at a time. If a user makes the same mistake
multiple times, the page should not show duplicate errors.


You can manage error messages with CSS or by adding/removing elements from the page. I added some sample
code at the bottom of this lab to get started with the layout and style of the form.
You can use or modify it as you see fit.


*Extra credit will be awarded if you can provide a more detailed error message about exactly what was wrong with the first / last name and password.*
</article>
<article>

## Submitting

To submit this lab, please create a single zip file and upload it to Canvas under the appropriate assignment.
The zip file should contain a single javascript file for Parts One and Two called `validations.js`. It
should also contain an HTML file called `signup.html`. 

Your HTML file should use mostly the same functions as you wrote in `validations.js`. 
These functions **may** need a bit of tweaking to work if called directly from the page.
If you decide to tweak these functions, please maintain a separate copy of `validations.js` from part
one and link a new file, `validations-html.js` in your HTML. Note that you do not necessarily need to
create separate versions of these functions but you may need to be smart about how you call them if you
do not.

You will also need to write up a bit of JavaScript to show error messages on the page if your
validations fail. This code can be in the `validations.js` file, another file altogether,
or in the `signup.html` file. Do whatever helps you organize your code best. I have opinions
about this but decide for yourself what seems cleanest. Make sure to include any additional files
in your final zip file!

</article>
<article>

## Grading

The main things I am looking for in this lab are:
- Correctness of validation functions
- Validation functions are linked to your sign up form and trigger when the user changes the input
- Error messages are added to the page and removed from the page in response to user input.
  - Duplicate errors are not shown. Errors are not shown once the response is correct.

</article>