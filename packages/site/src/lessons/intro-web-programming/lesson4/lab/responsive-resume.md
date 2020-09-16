# Lab 1: Introduction to HTML

## Overview
In this lab, you will practice creating responsive websites using some of the techniques we learned in class. For the first section of the lab, you will look for responsive design features in real web sites / applications. For second and third parts, you will work on creating a responsive resume with HTML and CSS. This should give you some practice with creating interesting page layouts in HTML and CSS.

**Side Note:** Depending on how much you like the end result of this lab, you may be able to use it on your own job search. HTML and CSS can create some cool layouts that are pretty hard to make in a word processor.  The resume I used to get my current job is written in HTML and CSS. If you decide you would like to use this resume "for real", please reach out for some help with finishing touches.

## Part One - Mobile Site Breakpoints

Please find 3 sites that each have at least 3 major visual breakpoints in their layout. Please get screenshots of the pages in each of their different layouts. After you have done that, use the developer tools to figure out exactly what screen sizes (in pixels), the breakpoints occur at. Please write up a small document (nothing pretty or fancy) that includes the screenshots for each site and the breakpoints you found. I recommend a simple HTML page but I'm also fine with a word processor doc.

Please don't use sites that I would have to pay to get into

## Part Two - Desktop Resume

In this part of the lab, you will be creating a personal resume in HTML and CSS. I don't care if your resume contains real details (I won't fact-check you) but it should contain at least the following:

- Your name
- Your major
- Contact info (Don't dox yourself. An email address and LinkedIn are plenty)
- Objective or "About Me"
- Recent work experience (along with):
  - Job Title
  - Responsibilities
  - Location / Duration
- Education details
  - School (Location / Duration / Degree)
  - Coursework and relevant skills
  - GPA (optional)
  - Accomplishments / Research
- Extracurriculars / side projects (with relevant details)

Visually, your resume should have an easily identifiable horizontal header with your name, contact info, and any other details you think a recruiter would want to find at a glance. The body should be organized into sections (ie. education, job history, etc.) that are visually separated. The sections should have headers that stand out and are visually distinct. Please include a subtle icon or nice looking underline (not just a text-decoration underline) to help them stand out.

Please use 2 or more vertical columns (either with a sidebar or in the body of your resume) to improve information density without decreasing readability. It would also be nice to have color in your resume. Please use a consistent color scheme throughout your resume and make at least one section of the resume (header, sidebar, etc) use a color in that scheme as its background.

## Part Three - Responsive Resume

Since recruiters will view your resume on a number of different types of devices, it should be responsive. You should consider at least 3 viewing possibilities: 
- A printed page
- A small screen (width between 400 and 700 px)
- A large screen.

There are a few things you should consider for these different media:

**Printed Page:** For a printed page, users will not want to print out a ton of color. Anything with a color background should switch to have a white background (and maybe a border to remain distinct?). Also, the resume **must** fit on one page.

**Small Screens:** For a small screen, users do not want to scroll horizontally. All content should fit horizontally on the screen. That means parts of the layout that have two columns should merge together to only have one.

**Large Screens:** The view users see in a large screen should match up with what they get when they print (minus color potentially). For this project, make your resume look like an 8.5 x 11 sheet of paper centered in the page. It should look exactly the same as it would when printed.

Please use media queries to include styles that apply specifically to the different media above. CSS grid is your friend here. Think about how you laid out the BookReads site from the last lab and try to combine that approach with how we used media queries in lesson 3 to include both a 2-column and 1-column view in one site.

## Submitting this Lab

To submit this assignment, please create a single zip file and upload it to Canvas under the appropriate assignment. Your zip file should contain your part one report html file (and linked screenshots) as well as all files related to your resume (CSS, images, etc). Remember that you should only create one HTML file for your resume. Layout / display changes for different viewing media should be done entirely in HTML and CSS. Please title the html file from part one "breakpoints-report.html" and your resume "resume.html". It does not matter what the linked files are named as long as they are properly linked in the HTML files. Finally, please print your page as a PDF and include it in the zip file.

## Grading

I am not grading this assignment as a work of art. The aesthetics of your resume are less important than whether you were able to create a resume that displays properly on the different media described above. Please make sure to include all the content described above and make sure your app handles the required size/media transitions. The most important parts for grading are related to the responsiveness of the page. Please make sure your page does not have a horizontal scrollbar on small screens. Please also make sure your page, when printed, takes up only one page. Also, please only create a single HTML file for your resume. This assignment is about making a page responsive with CSS only.

## Hints

**Hint 1:** The browser developer tools are your friend for this assignment. You do not need to resize your browser window or load your site on a phone to see if you're on the right track. (Although if you can, those might be a good sanity-check)`

**Hint 2:** There is a setting in the Chrome developer tools to view your page as a printer would print it. If that doesn't work, try print preview or print to a PDF.

**Hint 3:** In order to get your resume fitting on one page, check out the "max-width" CSS property and remember that you can give lengths in inches in CSS (this is a good use-case for why)

**Hint 4:** This is the first project where you are writing all the code yourself. It can feel a bit intimidating. To get started, I would recommend the following approach: Hand-draw your page for print and mobile. Think about where content will go and what will be grouped. Look at some PDFs of sample resumes for inspiration. Dump most/all the content you have in an HTML file. Don't worry about making it look pretty but think about what gets grouped together. Start styling the page from the "outside" in. Figure out the overall page layout before jumping into the details. Keep your page layout flexible and think about how it will change for the different media. Try adding media queries that get the overall layout to behave the way you want it. Tweak your design over time to get the finishing touches done. Do broad layout-affecting features before small tweaks.