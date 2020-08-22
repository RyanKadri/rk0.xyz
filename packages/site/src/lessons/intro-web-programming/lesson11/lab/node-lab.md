# Lab 9: This Feels Scripted

<article>

## Overview

In this lab, you will be learning to work with NodeJS. You will start the lab by doing simple
tasks with Node to get some practice on writing scripts. In the second part of the lab, you will have
a data-processing task that will give you some practice with managing data and getting information
out of a file. Finally, you will get to spend some time working on your final project by making a
server that will eventually allow users to post on your site. 

In parts two and three, you will use NPM libraries to help you on your way.

</article>

<article>

## Prerequisites

To do this lab, you will need to have NodeJS installed. You can get Node here: https://nodejs.org/en/.
Either the LTS or the new version is fine.

Please also download <a href="./real-estate-data.csv" target="_blank">this file</a>).
It contains real estate data from a 5-day period in Sacremento. You will be writing a program
to process this data in Part 2.

The data is expressed in CSV, a simple format for expressing tabular data. It stands for Comma Separated
Values. The data is expressed row by row with each value separated by a "delimiter" character (usually
commas). The first row may contain header/column names. A simple CSV file might look like this:
```
city name,state,population (millions)
Philadelphia,PA,1.581
New York,NY,8.623
Wilmington,DE,0.071
```

Programs like Excel will display this file in a nice format and let you sort / organize, but any
text editor will let you see how the data is organized. It may be helpful to open the file in excel to
get a feel for the data. If you don't have excel, it is not a huge deal. If you really want to use a
program like that, LibreOffice Calc is free and does most of the same basic things.


## Part One - Practicing with Node.JS

To get a feel for Node, please write the following simple programs and ensure that you can run
them with the `node my-file.js` command (obviously switching out the file name).

1. A file that exports a function that prints out the word "Hello" (using a node export)
1. A script that `require`s the previous file and uses its hello-printing function to print hello
1. A script that reads a file called "my-file.txt" and prints out its contents, converted to uppercase.
You can assume the file "my-file.txt" lives next to your program.

</article>

<article>

## Part 2: Extracting Data from a File

In this part of the lab, you have a file that contains data about house sales around Sacremento CA. 
Your job will be to write a program that answers the following questions:

- What was the average value of real estate transactions over this 5 day period?
- What was the difference between the minimum and maximum sale price?
- What was the highest price per square foot (excluding sales with 0 square feet listed)
- What zip code had the highest average price?

Getting data out of general CSV files is actually a bit harder than you would think in the general case.
Therefore, there are plenty of libraries that will help you out. One library that is good for this is
`csv-parse`. It converts CSV data to JavaScript objects for you. You can install it with `npm install csv-parse`.
Here is some documentation on how to use the library: https://csv.js.org/parse/api/. There are a couple
different modes you can use it in. I would recommend the "sync" mode because it is the simplest.
You just need the text of the CSV file as input and the library will do the rest.

</article>

<article>

## Part 3: Final Project - Uploading Comments
For this part of the lab, you will be writing a server that will accept user input in the form of Mark**down**
and will convert that Markdown to HTML before storing it in a file. Markdown is a simplified format for
writing and structuring documents. It is meant to be a replacement for HTML for simple documents like
blog posts. Many sites and tools let users format their posts with a form of Markdown (Reddit, Github, and Slack
among others). Fun fact, most of these labs are also written in Markdown!

Here is an example Markdown document:
```
# This is a post!
Here are some bullet points:
- List Item 1
- List Item II
- List Item C
This text is **bold!**
```

It roughly corresponds to this HTML:
```
<h1>This is a post!</h1>
<p>Here are some bullet points</p>
<ul>
    <li>List Item 1</li>
    <li>List Item II</li>
    <li>List Item C</li>
</ul>
<p>This text is <strong>bold!</strong></p>
```
Markdown can be considerably easier to read and write. Therefore, for the comment-submission portion of
your final project, I would suggest you have the dynamic content-creation part of your site be in Markdown.

Don't worry about figuring out the Markdown-to-HTML conversion yourself though. There are a bunch of great
NPM libraries that will do it for you. I suggest the aptly named `markdown` library. You can install
it with `npm install markdown`. Check out the documentation on this page: https://www.npmjs.com/package/markdown.

Your job is to make an express server that accepts a POST request (at whatever port and path you want).
The POST request should contain the text of a post in Markdown. Your express server should read the
text of the post, use the `markdown` library to convert it to HTML, and then write that HTML to a file.
Please also create a variable that tracks an incrementing post ID so that you can save each post to a
different file. For instance, your first post should be stored in the file post-1.html. The second post
should be stored in post-2.html, and so on. Your response to the POST request should be a JSON string
that looks like:
```
{ "postId": 2, "html": "<p>This is a document that your <strong>user</strong> created</p>" }
```

For now, you do not need to have a way for the user to retrieve their post after the initial request.
You can test your server by using fetch requests like this:
`fetch("/post", { method: "POST", body: "Some markdown you want to test" })`.

One other point: To read the body of the post request in express, you need to install the `body-parser`
library. For the purpose of this lab, you can use it as follows:
```
const parser = require("body-parser")

const app = express();
app.use(parser.text());
```

</article>

<article>

## Submitting

To submit this lab, please upload the following to the appropriate Canvas assignment:

A single zip file with three subdirectories for each section of the lab. In each subdirectory, please
include the JavaScript files you wrote for that section.

</article>
<article>

## Grading

For Part One, I care about the following:
- Does your code work and give the right output?
- Does your code have the desired structure (`require`ing files where asked to)

For Part Two, I care **in order** that:
1. You correctly use the recommended library (or another library if you really want).
1. You succesfully read in the CSV data from a file.
1. You have attempted to answer each question.
1. Your code makes sense.
1. You get the right answers for each section. 

For Part Three, it is important that:
- Your code starts up an express server like we did in class
- POSTing to the server creates a new "post" file
- The "post" file has been converted from Markdown to HTML
- Users of your server can post more than once (posts don't override each other)

The server does not (yet) need to:
- "survive" between restarts. If I restart the server, I do not need the file counter to resume where
it left off. It can overwrite files or behave however you want
- Have a way to retrieve posts or display them on a web site

</article>