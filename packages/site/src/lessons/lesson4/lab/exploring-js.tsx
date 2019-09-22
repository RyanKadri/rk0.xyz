import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { LabDefinition } from "../../../../../presenter-core/src/services/types";
import { wrap } from "../../../common/functional-utils";
import { CodePlayground } from "../../shared/code-playground";
import { useLabStyles } from "../../shared/lab";
import { palindromityCode, palindromityExpectations } from "./isPalindrome";

const overview = wrap(`
In this lab, you will learn the basics of JavaScript.
`)

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

const useStyles = makeStyles((_: Theme) => createStyles({
    editor: {
        minHeight: 400,
        border: "solid 1px #ccc"
    }
}))

export function ExploringJSLab({}: Props) {
    const classes = useLabStyles();
    const localClasses = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4" className={ classes.title }>Lab 3: Exploring Javascript</Typography>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Overview</Typography>
                <Typography variant="body1">{ overview }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Section 1: Determine Palindromity</Typography>
                <CodePlayground mode="function"
                                intialCode={ palindromityCode } 
                                executionParams={ palindromityExpectations }
                                savePrefix={ "exploring-js.palindrome" } />
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