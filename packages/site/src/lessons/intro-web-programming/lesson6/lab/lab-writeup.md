# Lab 4: String Manipulation and Forms

## Overview

If you have ever filled in a form on a website and gotten immediate feedback when you made a mistake, the website was probably running those validations with JavaScript. In pages without JavaScript validation, you can generally only see your errors after submitting the form and waiting for the next page to load. In this lab, you will be learning to write similar form validations. As a part of that work, you will also learn more broadly how to handle user input on a web page. 

You will start the lab by writing functions that accept strings and numbers as inputs and check them against a set of conditions. In part two, there are a couple validation functions that are a little bit trickier. Finally, you will create a web page sign up form that uses the techniques from the first two sections to validate user input and provide quick feedback if they typed something wrong. 

Form validation was one of the earliest use-cases for having JavaScript in the browser. Hopefully this lab will bring you closer to our shared programming ancestors. 

## Part One - Input Validation

For the first part of the lab, you will be writing a number of Javascript functions that will determine if a given input parameter is "valid". For the questions in this part, you can name your functions whatever you want, but try to pick a name that describes what they do. These functions should all return a boolean value (true if the input is "valid", false otherwise).

*Hint: Try skimming through this page: https://www.w3schools.com/js/js_string_methods.asp for an overview of the important methods that exist on strings. These will help a lot with the problems below.* 

### Age

Please write a function that takes a numeric age as an input and checks if the age is acceptable for a user of your site. An age is acceptable if:
- The user is at least 13 years old
- The user is no older than the oldest human alive today

### First/Last Name

Please write a function that takes a single string as an input and returns a boolean for whether or not the string is a valid first or last name. A name is valid if:
- It starts with a capital letter
- All other letters are lowercase
- It is only one word (no spaces)

### Password

A user must supply a strong password to the site. It cannot:
- Have less than 6 characters
- Be a single character repeated forever (eg "aaaaaaaaa")
- Include the first or last name
- Be in a list of most commonly used passwords

Please write a function that takes four parameters:
- The password (string)
- The first name (string)
- The last name (string)
- An array of commonly used passwords (array of strings)

Remember that you should not hardcode values for any of these parameters when defining your function. The person who calls your function might call it like ("toaster123", "Bob", "Jones", ["password", "test"]) and you would check that "toaster123" does not include "Bob" or "Jones" and is not "password" or "test"

## Part Two

### Phone Number

*There is feature in many programming languages called regular expressions. It can make this section a lot easier but requires a bit more upfront reading / research. <https://regexone.com/> has a quick Regular Expressions game if you want to learn. You do not need Regular Expressions to finish this part of the lab though so also feel free to solve this section with what we already know*

Please write a function that takes a single phone number (string) as an input and returns a boolean for whether or not the phone number is valid. You are expecting phone numbers in the format: "###-###-#### ext ####". The extension part is optional.

### Username

Please write a function that takes a username (string) and a list of taken usernames (array of strings) as inputs and returns a boolean for whether or not it is valid. A username is valid if it starts with a letter, contains only letters and numbers and optionally ends with a !

## Part Three

*Note: We have not yet covered how to handle user input. I plan to cover that in class on Wednesday. You can certainly try to figure it out in this lab session but if you're confused for this part, maybe just put together the HTML page and don't worry about hooking in the user inputs quite yet*

For this part of the lab, you will be creating a little HTML and CSS page that will act as a sign-up form for another website. You must collect at least the following information about the user:
- First Name
- Last Name
- Age
- Phone number
- Username
- Password

You also must make sure the data they enter is valid. Therefore, as soon as a user starts typing, you should give feedback about whether they have entered a valid value for the field. You can use either the oninput or onchange attribute of your input elements to link up to each of the functions you wrote above. You can also use the addEventListener function we talked about last class.

If the user provides an invalid value, please display red text under the matching input explaining that they have made an error. The error message should of course also go away when they fix their mistake. There should only one version of a given error message at a time. If a user makes the same mistake multiple times, the page should not show duplicate errors.

You can manage error messages with CSS or by adding/removing elements from the page. I added some sample code at the bottom of this lab to get started with the layout and style of the form. You can use or modify it as you see fit.


*Extra credit will be awarded if you can provide a more detailed error message about exactly what was wrong with the first / last name and password.*

## Submitting

To submit this lab, please create a single zip file and upload it to Canvas under the appropriate assignment. The zip file should contain a single javascript file for Parts One and Two called `validations.js`. It should also contain an HTML file called `signup.html`. 

Your HTML file should use mostly the same functions as you wrote in `validations.js`. These functions **may** need a bit of tweaking to work if called directly from the page. If you decide to tweak these functions, please maintain a separate copy of `validations.js` from part one and link a new file, `validations-html.js` in your HTML. Note that you do not necessarily need to create separate versions of these functions but you may need to be smart about how you call them if you do not.

You will also need to write up a bit of JavaScript to show error messages on the page if your validations fail. This code can be in the `validations.js` file, another file altogether, or in the `signup.html` file. Do whatever helps you organize your code best. I have opinions about this but decide for yourself what seems cleanest. Make sure to include any additional files in your final zip file!

## Grading

The main things I am looking for in this lab are:

- Correctness of validation functions
- Validation functions are linked to your sign up form and trigger when the user changes the input
- Error messages are added to the page and removed from the page in response to user input.
  - Duplicate errors are not shown. Errors are not shown once the response is correct.