import { Link as MaterialLink, Typography } from "@material-ui/core";
import React from "react";
import { LabDefinition } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { wrap } from "../../../../../common/functional-utils";
import { useLabStyles } from "../../../../shared/lab";
import bookreads from "./bookreads.html";
import sketch from "./bookreads.png";
import lab1 from "./lab1.zip";

const overview = wrap(`
In this lab, you will learn to apply the basics of HTML and CSS that we have learned in class so far. The first section of the lab
will help you learn common CSS selectors. For the second two parts of the lab, you will be acting in the role of a user interface
designer at BookReads.com, the country's most popular (nonexistent) book review site. You will get a chance to apply your new CSS
skills to style up a boring (and ugly) HTML site
`);


const part1 = wrap(`
and do all of the CSS selector exercises. In your lab submission, please include a text file "selectors.txt"
where each line is the answer to the corresponding level. For this part of the assignment, I would encourage you to try every
level yourself but feel free to work with others if you would like.
`);

const part2 = wrap(`
The following code is the current HTML for BookReads.com. The site has never been updated and CSS had not been invented
when the site was first created. Your job is to create a few CSS stylesheets for this page in order to make it look like 
the concept sketch below. Please DO NOT change the HTML in any way. Our engineers are very particular about their HTML and
will get mad if you try to change it. The HTML file expects you to update 4 CSS files for the different parts of the app
you will be styling.
`);

const part3 = wrap(`
The engineers at BookReads saw the great job you did with your styles for the site and have agreed that they will let you write some
HTML too. They would like you to create a new feature for the site, an "Author Spotlight" where you showcase a popular author. Inside of the
news feed, you will include a new bordered panel (like the current reviews) that tells users about an author. You are free to design this spotlight
however you would like (with whichever author you like) but please be sure to include his or her picture as well as a picture of his or her most recent book.
Please also include a list of a few quotes (in italics of course) and a link to his/her website. Users should not be able to leave comments about an author
but there should be a subscribe button for them to get news about thee author's upcoming books. The section you add should fit into the overall layout of the page
but should also visually stand out (maybe with new colors or a special border)

Please add HTML to (only) the element with an id of "spotlight" and any new CSS into a file called spotlight.css.
`);

const submitting = wrap(`
To submit this assignment, please create a single zip file and upload it to Canvas. It should contain a file titled "selectors.txt" (from part 1) as well as
four CSS files called "layout.css", "news-feed.css", "spotlight.css", and "user-activity.css" that will be imported in "bookreads.html".
Please also include the updated bookreads.html file in your zip file. Remember that you should not make ANY changes to this file other than inside section with the id="spotlight".
`);

const grading = wrap(`
Don't stress out too much about writing the perfect CSS for the site. I am not going to get a ruler and measure pixels. Please do make 
sure to at least target all of the elements that visually have styles applied to them (bold text should be bold, borders should be present, 
background colors should be set, etc.) The hardest parts of this lab are the column / panel layout and the top nav. If you get stuck on
layout, feel free to ask Saman for help or save some questions for class / office hours. The borders, colors, font weights, etc should be doable.
Other than the first part, this lab is an individual assignment. Some working together is acceptable but everyone must turn in unique, individual assignments 
`)

const layout = `
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
`

export function HtmlCssLabView({}: Props) {
    const classes = useLabStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4" className={ classes.title }>Lab 1: Introduction to HTML and CSS</Typography>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Overview</Typography>
                <Typography variant="body1">{ overview }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Part One</Typography>
                <Typography variant="body1">Please go to: <MaterialLink href="https://flukeout.github.io/">https://flukeout.github.io/</MaterialLink>
                    { part1 }
                </Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Part Two</Typography>
                <Typography variant="body1">{ part2 }</Typography>
                <Typography variant="body1">Please pay especially close attention to the following:</Typography>
                <ul>
                    <li>The two-column layout of the page</li>
                    <li>The site header / top nav and its links</li>
                    <li>The borders around different sections / subsections</li>
                    <li>The colors of the background, the user activity sidebar, and the header.</li>
                    <li>The bold text in different reviews</li>
                </ul>
                <Typography variant="body1">To get started, please download and unzip <MaterialLink href={ lab1 } download>this file. </MaterialLink>
                    You can edit the provided CSS files to make your site look like the mock up below. I would recommend using Visual Studio Code to do this
                    assignment and using the LiveReload plugin to get quick feedback on your work.
                </Typography>
                <div className={ classes.startCode }>
                    <Typography variant="caption">bookreads.html</Typography>
                    <CodeBlock code={ bookreads.replace(/(href|src)="\/([\w-_.]+)\.\w+(\.\w{3})/g, "$1=\"$2$3") } className={ classes.code } language="html"></CodeBlock>
                </div>
                <div className={ classes.startCode }>
                    <Typography variant="caption">layout.css (sample)</Typography>
                    <CodeBlock code={ layout } className={ classes.code } language="html"></CodeBlock>
                </div>
                <div className={ classes.startCode }>
                    <Typography variant="caption">BookReads Mockup</Typography>
                    <img src={ sketch } className={ classes.sketch }></img>
                </div>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Part Three</Typography>
                <Typography variant="body1">{ part3 }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Submitting this lab</Typography>
                <Typography variant="body1">{ submitting }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Grading</Typography>
                <Typography variant="body1">{ grading }</Typography>
            </section>
        </div>
    )
}

interface Props {
    lab: LabDefinition
}