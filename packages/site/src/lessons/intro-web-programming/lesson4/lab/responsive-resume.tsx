import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { LabDefinition } from "../../../../../../presenter-core/src/services/types";
import { wrap } from "../../../../common/functional-utils";
import { useLabStyles } from "../../../shared/lab";

const overview = wrap(`
In this lab, you will practice creating responsive websites using some of the techniques we learned in class.
For the first section of the lab, you will look for responsive design features in real web sites / applications.
For the rest of the lab, you will work on creating a responsive resume with HTML and CSS. This should give you some
practice with creating interesting page layouts in HTML and CSS.
`)

const sideNote = wrap(`
Depending on how much you like the end result of this lab, you may be able to use it on your own job search.
HTML and CSS can create some cool layouts that are pretty hard to make in a word processor. 
The resume I used to get my current job is written in HTML and CSS.
If you decide you would like to use this resume "for real", please reach out for some help with finishing touches.
`);

const partOne = wrap(`
Please find 3 sites that each have at least 3 major visual breakpoints in their layout. Please use the browser's developer tools
to get screenshots of the page in each of the different layouts. After you have done that, use the developer tools to figure out
exactly what screen sizes (in pixels), the breakpoints occur at. Once you are done, please create a simple HTML report that lists
the name and URL of the pages, and the breakpoint widths (in px), and the screenshots you have found. No need to do anything fancy or stylish. 
The HTML file is just to gather all files together in the same place. Also, please do not use sites that would require me to pay
to get in. I would recommend trying to do this assignment on your own but you are free to work together for this problem. Please
create separate HTML reports.
`);

const partTwoA = wrap(`
In this part of the lab, you will be creating a personal resume in HTML and CSS. I don't care if your resume contains real
details (I won't fact-check you) but it should contain at least the following:
`);

const submitting = wrap(`
To submit this assignment, please create a single zip file and upload it to Canvas under the appropriate assignment. Your zip file
should contain your part one report html file (and linked screenshots) as well as all files related to your resume (CSS, images, etc).
Remember that you should only create one HTML file for your resume. Layout / display changes for different viewing media should be
done entirely in HTML and CSS. Please title the html file from part one "breakpoints-report.html" and your resume "resume.html".
It does not matter what the linked files are named as long as they are properly linked in the HTML files. Finally, please print your
page as a PDF and include it in the zip file.
`)

const grading = wrap(`
I am not grading this assignment as a work of art. The aesthetics of your resume are less important than whether you were able to
create a resume that displays properly on the different media described above. Please make sure to include all the content
described above and make sure your app handles the required size/media transitions. The most important parts for grading are related to
the responsiveness of the page. Please make sure your page does not have a horizontal scrollbar on small screens. Please
also make sure your page, when printed, takes up only one page. Also, please only create a single HTML file for your resume.
This assignment is about making a page responsive with CSS only.
`)

const hint1 = wrap(`
The browser developer tools are absolutely your friend for this assignment. You do not need to resize your browser window or load your
site on a phone to see if you're on the right track. (Although if you can, those might be a good sanity-check)`
)

const hint2 = wrap(`
Please. Please. Do not print out a million copies of this resume as you're working on it. See hint 1. There is a setting in the
developer tools to view your page as a printer would print it. If that doesn't work, try print preview or print to a PDF.
`)

const hint3 = wrap(`
Resume coaches are pretty strict about exact formatting on printed resumes. For screens larger than an 8.5 x 11 sheet of paper, I would
recommend displaying your resume as a rectangle in the middle of the screen with a grey background as if it were a sheet of paper.
This is how hiring managers are used to looking at resumes and it greatly increases the chances that your "on-screen" resume
will agree with your printed one. Take a look at how Google Docs handles displaying a single page in very wide screens. 
"max-width" and inches as CSS units are your friends here.
`);

const hint4 = wrap(`
This is the first project where you are writing all the code yourself. It can feel a bit intimidating. To get started, I would recommend
the following approach: Hand-draw your page for print and mobile. Think about where content will go and what will be grouped. Look at some PDFs of sample
resumes for inspiration. Dump most/all the content you have in an HTML file. Don't worry about making it look pretty but think about what
gets grouped together. Start styling the page from the "outside" in. Figure out the overall page layout before jumping into the details.
Keep your page layout flexible and think about how it will change for the different media. Try adding media queries that get the overall
layout to behave the way you want it. Tweak your design over time to get the finishing touches done. Do broad layout-affecting features
before small tweaks.
`)

const useStyles = makeStyles((theme: Theme) => createStyles({
    hint: {
        marginBottom: theme.spacing(2)
    }
}))

export function ResponsiveResumeLab({}: Props) {
    const classes = useLabStyles();
    const myClasses = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h4" className={ classes.title }>Lab 2: Responsive Resume</Typography>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Overview</Typography>
                <Typography variant="body1">{ overview }</Typography>
                <Typography variant="body2" className={ classes.sideNote }>
                    <strong>Side Note:</strong>
                    {sideNote}
                </Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Part One</Typography>
                <Typography variant="body1">{ partOne }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Part Two</Typography>
                <Typography variant="body1">{ partTwoA }</Typography>
                <ul>
                    <li>Your name</li>
                    <li>Your major</li>
                    <li>Contact info (Don't dox yourself. An email address and LinkedIn are plenty)</li>
                    <li>Objective or "About Me"</li>
                    <li>Recent work experience (along with):
                        <ul>
                            <li>Job Title</li>
                            <li>Responsibilities</li>
                            <li>Location / Duration</li>
                        </ul>
                    </li>
                    <li>Education details
                        <ul>
                            <li>School (Location / Duration / Degree)</li>
                            <li>Coursework and relevant skills</li>
                            <li>GPA (optional)</li>
                            <li>Accomplishments / Research</li>
                        </ul>
                    </li>
                    <li>Extracurriculars / side projects (with relevant details)</li>
                </ul>
                <Typography variant="body1" component="div">
                    <p>
                        Visually, your resume should have an easily identifiable horizontal header with your name, contact info, and any other details you
                        think a recruiter would want to find at a glance. The body should be organized into sections (ie. education, job history, etc.)
                        that are visually separated. The sections should have headers that stand out and are visually distinct. Please
                        include a subtle icon or nice looking underline (not just a text-decoration underline) to help them stand out.
                    </p>
                    <p>
                        Please use 2 or more vertical columns (either with a sidebar or in the body of your resume) to improve information
                        density without decreasing readability. It would also be nice to have color in your resume. Please use 
                        a consistent color scheme throughout your resume and make at least one section of the resume (header, sidebar, etc) 
                        use a color in that scheme as its background.
                    </p>
                    <div>
                        <strong>Important: </strong>
                        Since recruiters will view your resume on a number of different types of devices, it should be responsive.
                        You should consider at least 3 viewing possibilities: 
                        <ul>
                            <li>A printed page</li>
                            <li>A small screen (width between 400 and 700 px)</li>
                            <li>A large screen.</li>
                        </ul>
                    </div>
                    <p>There are a few things you should consider for these different media:</p>
                    <p>
                        <strong>Printed Page: </strong>For a printed page, users will not want to print out a ton of color. Anything with
                        a color background should switch to have a white background (and maybe a border to remain distinct?).
                        Also, the resume <strong>must</strong> fit on one page.
                    </p>
                    <p>
                        <strong>Small Screens: </strong>For a small screen, users do not want to scroll horizontally.
                        All content should fit horizontally on the screen. That means parts of the layout that have two
                        columns should merge together to only have one.
                    </p>
                    <p>
                        <strong>Large Screens: </strong>The view users see in a large screen should match up with what they
                        get when they print (minus color potentially). For this project, make your resume look like an 8.5 x 11 sheet of paper centered in the
                        page. It should look exactly the same as it would when printed.
                    </p>
                </Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Submitting this lab</Typography>
                <Typography variant="body1">{ submitting }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Grading</Typography>
                <Typography variant="body1">{ grading }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Hints</Typography>
                <Typography variant="body1" className={ myClasses.hint } component="div">
                    <p><strong>Hint 1:</strong>{ hint1 }</p>
                    <p><strong>Hint 2:</strong>{ hint2 }</p>
                    <p><strong>Hint 3:</strong>{ hint3 }</p>
                    <p><strong>Hint 4:</strong>{ hint4 }</p>
                </Typography>
            </section>
        </div>
    )
}

interface Props {
    lab: LabDefinition
}