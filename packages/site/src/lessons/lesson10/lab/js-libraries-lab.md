# Lab 8: The Whole Package

<article>

## Overview

In this lab, you will be learning how to better modularize and organize your code. You will also learn
a more modern way to include Open Source Javascript libraries in your projects. In Part One,
you will get a chance to write some practical JQuery. In Part Two, you will improve that code
by breaking it into more manageable pieces with ES6 imports and Parcel. Finally, in Part Three, you will
use the skills you learned in Parts 1 and 2 to adapt your Final Project site to use the Parcel bundler.
Doing so will give you the freedom to use an open source graphing / data visualization library to
add charts to your site.

</article>

<article>

## Prerequisites

To do parts 2 and 3 for this lab, you will need to install **Node.js**. Node.js is a "runtime environment"
for JavaScript. It lets you run JavaScript code outside the browser. Where JavaScript in your browser
is sandboxed (it can only interact with your browser), Node.js allows you
to write JavaScript that can edit files, act as a server, and much more. We will dig into some of these
topics in a future class but for today's lab, we want to use **NPM**, a package manger for Node.js. NPM
is a tool for including external (mostly Open Source) JavaScript libraries in your project. It also
lets you install tools that make it easier to manage and develop JavaScript projects.

To install Node.js, please go to https://nodejs.org and follow the installation instructions for your
Operating System. For the most part, you should be fine with the default options. If it asks anywhere
whether you want to include Node.js in your PATH, make sure you do that. I don't think any of the
installers have NPM as an opt-in-only feature, but if so, make sure you include it.

To test that Node.js installed properly, open a new Terminal and type `node --version`. If you see a
version that matches the version you installed, you should be good. Also try `npm --version`. You will
see a different version but something other than an error should print.

## Part One - JQuery Collatz
In 1937, a German mathematician Collatz defined the following procedure:
- Choose a whole number `n > 1`
- If `n` is even, divide it by two. If `n` is odd, multiply it by 3 and add one.
- Continue doing the above operation with the resulting number until `n` is 1.

Collatz conjectured that no matter what value you choose for `n`, if you do this process long enough, the
sequence will always get to 1. Nobody has been able to prove mathematically that this is the case but
it seems to be true. Famous mathematician Paul Erdős said about the lack of a proof: 
"Mathematics may not be ready for such problems."

For this part of the lab, you will create a website to visualize the Collatz conjecture for different
values of `n`:

The website should have a single numer input. The user can enter a number for `n`. There are two buttons
below the input. One button generates the next number in the sequence and adds it to a running list (or table)
on the page. The user can click this button multiple times to add new values one by one to
the list. There is also a second button that adds the rest of the values to the list (regardless of
what step the user is on).

Once the sequence has hit one (by either button), all of the even numbers should change color to blue and all the odd numbers
should change to red. The number one at the end should become green. Before hitting 1, all numbers should
be black. All operations that change the page should be done through JQuery. Mathematical functions
do not need to use JQuery

Please use JQuery inserted through a `<script>` tag (with an internet source).

</article>

<article>

## Part 2: Introducing Modules
Please create the exact same UI as above, but this time, use ES6 modules to keep your code better
organized. Please install JQuery using `npm install jquery` and import it using the ES6 module syntax we went over
in class. Please separate out your Collatz sequence math from your DOM manipulation and event listener
code. You should put the sequence-calculating code in a separate file from your JQuery code and import
it with an ES6 import. Please install `parcel-bundler` with `npm install parcel-bundler` and use it along with your HTML
file to generate a single bundled JavaScript file in place of the two you started with. You should be
able to run `npx parcel build collatz.html` to do this bundling step (assuming you name your HTML file
`collatz.html`).

You can decide how to split up your math functions but maybe it makes sense to have
- One function that takes a number as a parameter and returns the next number in the Collatz sequence
- Another function that takes a number as a parameter and returns an array that contains all of the
numbers in that Collatz sequence (of course making use of the first function)

</article>

<article>

## Part 3: Final Project - Data Visualization
For this part of the lab, you will be updating your Final Project site to also make use of Parcel and npm. 

### Step 1: Reorganizing your project

Before jumping into the assignment, if you have not done it already, please turn your final project into 
a git repository and host it on Github. For now, please create it as a private repository and share it
with only my GitHub user (`RyanKadri`). You can do that by going to the repo Settings -> Collaborators
and adding `RyanKadri` as a Read-Only collaborator.

Once you have converted your project to a GitHub repo, please also add a package.json file. You can
do this by running `npm init`. It will ask you a few questions and you can either accept the defaults
(hit enter) or give your own values. When you are done answering the questions, npm will create a file
called package.json. Once you have this file, you should be able to run `npm install`
and have the libraries that you install reflected in the `dependencies` section of the package.json
file. Also, while you are adding the package.json file, it might make sense to create a separate folder
next to package.json for your code files. Traditionally, this folder is called `src`. The reason you
would do this is because `npm install` installs libraries in a folder called `node_modules` and parcel
commands tend to create new files in a folder called `dist`. Other commands usually create folders
at the "root" of your project folder. Keeping a separate folder for just your source code helps keep
things clean.

**Note:** NPM installs a ton of files in the node_modules folder. These should not be committed in git.
To tell git to ignore changes in these files, create a file called .gitignore in the root folder of your
project and include the following lines:
```
node_modules
dist
package-lock.json
```

In the end, your project structure should look like:
```
package.json
.gitignore
src/
   pageA.html
   pageA.js
   ...
dist/
node_modules/
```

### Step 2: Setting up Tools and Libraries
To set your project with Parcel, please run `npm install parcel-bundler`. This will install the tool
"parcel" in your project directory. Parcel pre-processes your HTML and JS files and allows you to use
nice features like ES6 imports and npm modules while still only generating a single JS file that your
site will need to fetch over the internet. To use Parcel, you should be able to run `npx parcel build pageA.html pageB.html pageC.html`
where the list of HTML files is all of the HTML pages you are including in your final project. Running
this command will go through all of the HTML files you listed, read through the JS and CSS files
*they* included, and convert everything to a format that can be loaded in a browser. The generated files
will live in a folder named dist at the root of your project. If you load those files in a browser
(with the live server extension or just by opening the HTML file) you should be able to see your site.

At this point, you should also be able to `import` npm libraries into your project. This will be important
for step 3.

### Step 3: Graphing
On one of the pages in your final project site, please display at least two types of data graphs.
The graphs should be rendered using a JS graphing library and based on data in JavaScript. 
These graphs should fit in with the overall idea of your site. For instance, if you are creating a site about knitting, maybe you could make one of your 
pages a blog post about yarn usage in the US. It could include a line chart that shows the total usage of yarn
year over year and a pie chart that shows the most common yarn colors. For now, the data itself can be hardcoded
into the JavaScript.

The goal of this part of the lab is to include two dynamically rendered graphs on your site. It doesn't
matter too much if the graphs do not totally make sense in the context of your site but it would
be nice if they did. If all else fails, make a "statistics" page about your site and make graphs about site users over
time and types of blog posts (or something similar). 

When you make these graphs, Cartesian graphs (Line, Bar, etc) should have axis labels and units.
Radial graphs (Radar, Donut, Pie, etc) should include a legend and category labels.
All charts should have a title and use non-default colors.

The graphing library we used in class was chart.js but you are free to use any other as long as it allows
you to meet the requirements above.

</article>

<article>

## Submitting

To submit this lab, please upload the following to the appropriate Canvas assignment:

**For Parts 1 and 2**
Please include a zip file with all of the source HTML and JavaScript files you used. Please also
include your package.json file in part 2. Please separate parts 1 and 2 into sub-folders in
your zip file.

**For Part 3**
Please include a link to your private GitHub repo as well as either:
- A commit ID for the last commit you made while working on this lab.
- A zip file containing all of the source code you wrote for this lab. It should **not** contain the
`node_modules` or `dist` folder

</article>
<article>

## Grading

For Part One, I care about the following:
- Did you use JQuery to accomplish the requested effects? You should use JQuery for **all** DOM
manipulations on this part of the lab
- Does your visualization of the Collatz Conjecture properly capture the mathematical pattern?
- Do both of the requested buttons exist and do what they are supposed to?

For Part Two, I care that:
- You have used npm to install JQuery
- You have included JQuery with an ES6 import rather than a `<script>` tag
- You have broken your code into multiple JS files and linked them with ES6 imports

For Part Three, it is important that:
- I can see your site code as a project hosted on Github
- You used NPM to install a graphing library, as well as Parcel
- You correctly used the graphing library to render **two different types** of graphs on your site
- The graphs you created have all of the characteristics requested above.

</article>