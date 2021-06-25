# Lab 2: Introduction to HTML and CSS

## Overview

In this lab, you will learn to apply the basics of HTML and CSS that we have learned in class so far. The first section of the lab will help you learn common CSS selectors. For the second two parts of the lab, you will be acting in the role of a user interface designer at BookReads.com, the country's most popular (nonexistent) book review site. You will get a chance to apply your new CSS skills to style up a boring (and ugly) HTML site

## Part 1 - CSS Selectors Practice

Please go to [flukeout.github.io](https://flukeout.github.io/) and do all of the CSS selector exercises. In your lab submission, please include a text file "selectors.txt" where each line is the answer to the corresponding level. For this part of the assignment, I would encourage you to try every level yourself but feel free to work with others if you would like.

## Part 2 - BookReads.com

The following code is the current HTML for BookReads.com. The site has never been updated and CSS had not been invented when the site was first created. Your job is to create a few CSS stylesheets for this page in order to make it look like the concept sketch below. Please DO NOT change the HTML in any way. Our engineers are very particular about their HTML and will get mad if you try to change it. The HTML file expects you to update 4 CSS files for the different parts of the app you will be styling.

Please pay especially close attention to the following:

- The two-column layout of the page
- The site header / top nav and its links
- The borders around different sections / subsections
- The colors of the background, the user activity sidebar, and the header.
- The bold text in different reviews

BookReads HTML:
```html
<html>
    <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css">
        <link rel="stylesheet" href="layout.css">
        <link rel="stylesheet" href="user-activity.css">
        <link rel="stylesheet" href="news-feed.css">
        <link rel="stylesheet" href="spotlight.css">
    </head>
    <body>
        <header class="top-nav">
            <h1>BookReads</h1>
            <nav class="main-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Books</a></li>
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </nav>
            <div class="profile">
                <i class="fa fa-user"></i>
            </div>
        </header>
        <main class="page-content">
            <div class="user-activity">
                <header>Recently Read</header>
                <div class="currently-reading">
                    <section>
                        <header>
                            The Oxford English Dictionary
                            <em>By: Oxford University Press</em>
                        </header>
                        <img src="oed.jpg">
                    </section>
                    <section>
                        <header>
                            The Way of Kings
                            <em>By: Brandon Sanderson</em>
                        </header>
                        <img src="wayOfKings.jpg">
                    </section>
                </div>
                <div class="reading-challenge">
                    <p>You have completed <strong>28 out of 30</strong> books from your reading goal!</p>
                </div>
            </div>
            <div class="news-feed">
                <article>
                    <header>Add a review here!</header>
                    <input type="text">
                </article>
                <article class="review">
                    <header><span user="4321">Alice</span> reviewed <span book="234">Welcome to Nightvale</span>
                        <span author="4320">By Joseph Fink</span>
                    </header>
                    <div class="review-body">
                        <img src="welcomeToNightvale.jpg">
                        <div>
                            <p>Alice gave Welcome to Nightvale 5 stars!</p>
                            <p>Night Vale is a small desert town where all the conspiracy theories you've ever heard are actually true.</p>
                        </div>
                    </div>
                    <footer class="comment-footer">
                        <label>Leave a comment here: <input type="text"></label>
                    </footer>
                </article>
                <article class="review">
                    <header><span user="1234">Bob</span> reviewed <span book="456">Guards! Guards!</span>
                        <span author="1233">By Terry Pratchett</span>
                    </header>
                    <div class="review-body">
                        <img src="guardsguards.jpg">
                        <div>
                            <p>Bob gave Guards! Guards! 4 stars!</p>
                            <p>Here there be dragons... and the denizens of Ankh-Morpork wish one huge firebreather would return from whence it came.</p>
                        </div>
                    </div>
                    <footer class="comment-footer">
                        <label>Leave a comment here: <input type="text"></label>
                    </footer>
                </article>
                <article id="spotlight">
                    <!-- Please only edit this section. Any other changes to this HTML document will be ignored when grading. -->
                </article>
            </div>
        </main>
    </body>
</html>
```

Sample `layout.css`
```css
/* Please put layout-related CSS in this file. I have given you a starting point and some hints for the layout */

.page-content {
    display: flex;
}

.user-activity {
    width: 200px;
    display: flex;
    flex-direction: column;
}

.news-feed {
    display: flex;
    flex-direction: column;
    /* Hmm. Everything sure is close together... How do I add spacing again? */
}

.top-nav .main-links ul {
    /* How can I make the bullet points disappear? I wonder if there's a tutorial for making a nice top nav somewhere
     * on the internet... */
}

.user-activity img {
    /* Those huge images are pretty annoying. Getting them out of the way, even temporarily, would be nice. */
}

.top-nav {
    /* The top nav is looking pretty vertical. I wonder how I can make everything more horizontal? */
}
```

BookReads Mockup:

![Bookreads Site](/courses/cis1052/bookreads.webp)


To get started, please download and unzip [this file](/courses/cis1052/lab1.zip) You can edit the provided CSS files to make your site look like the mock up above. I would recommend using Visual Studio Code to do this assignment and using the LiveReload plugin to get quick feedback on your work.

## Part 3: Author Spotlight

The engineers at BookReads saw the great job you did with your styles for the site and have agreed that they will let you write some HTML too. They would like you to create a new feature for the site, an "Author Spotlight" where you showcase a popular author. Inside of the news feed, you will include a new bordered panel (like the current reviews) that tells users about an author. You are free to design this spotlight however you would like (with whichever author you like) but please be sure to include his or her picture as well as a picture of his or her most recent book. Please also include a list of a few quotes (in italics of course) and a link to his/her website. Users should not be able to leave comments about an author but there should be a subscribe button for them to get news about thee author's upcoming books. The section you add should fit into the overall layout of the page but should also visually stand out (maybe with new colors or a special border)

Please add HTML to (only) the element with an id of "spotlight" and any new CSS into a file called spotlight.css.

## Submitting

To submit this assignment, please create a single zip file and upload it to Canvas. It should contain a file titled "selectors.txt" (from part 1) as well as four CSS files called "layout.css", "news-feed.css", "spotlight.css", and "user-activity.css" that will be imported in "bookreads.html". Please also include the updated bookreads.html file in your zip file. Remember that you should not make ANY changes to this file other than inside section with the id="spotlight".

## Grading

Don't stress out too much about writing the perfect CSS for the site. I am not going to get a ruler and measure pixels. Please do make sure to at least target all of the elements that visually have styles applied to them (bold text should be bold, borders should be present, background colors should be set, etc.) The hardest parts of this lab are the column / panel layout and the top nav. If you get stuck on layout, feel free to ask Saman for help or save some questions for class / office hours. The borders, colors, font weights, etc should be doable. Other than the first part, this lab is an individual assignment. Some working together is acceptable but everyone must turn in unique, individual assignments 