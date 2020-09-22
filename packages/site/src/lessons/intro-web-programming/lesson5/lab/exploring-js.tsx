import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { LabDefinition } from "../../../../../../presenter-core/src/services/types";
import { wrap } from "../../../../common/functional-utils";
import { CodePlayground, FunctionExecutionParams } from "../../../shared/code-playground";
import { useLabStyles } from "../../../shared/lab";
import { createCalculator } from "./create-calculator";
import { checkPalindromity } from "./isPalindrome";
import { simpleExamples } from "./simpleExamples";
import { sumOfPrimes } from "./sum-of-primes";

const overview = wrap(`
In this lab, you will learn the basics of JavaScript. The first set of problems is fairly
straightforward. It is meant to help you learn JavaScript syntax.
Later problems are meant to help you learn to solve programming puzzles. Feel free to work
together on the coding exercises in the first section of the lab. For later sections, please do all
work independently.`);

const usingLab = wrap(`
When working on this lab, you will be able to write code in the embedded code editors on this page.
They will also allow you to easily run your code samples against a number of different input parameters
and check to see that your return values match the expected values. The code editors will save your work
between reloads but are tied to a single browser. Please also save your code in an external editor and
do not rely too much on this feature. When running your code, I have provided a set of inputs and outputs
for each function. When you hit the run button, it will check your code against all these inputs and outputs.
Just because your inputs and outputs match for all the examples I have given, that does not mean your code
is perfect. You should still test your code with some other values to make sure it works properly.
Please do not change the name of the functions in the sample code. I rely on the function names
being correct to call your function and run tests.
`);

const submitting = wrap(`
To submit this assignment, please create a single zip file and upload it to Canvas under the appropriate assignment. Your zip file
should contain a separate .js file for every problem in the lab. Please give the file the same name as
the main function you are writing. For instance, Section 2 would get a single file called isPalindrome.js
`)

const grading = wrap(`
This assignment is a bit different from what you have done before in that all answers will either
be objectively correct or incorrect for each input. I will run each of your functions once for each of
the inputs shown in the respective table (as well as for a few inputs that are not shown). I will grade mostly
based on the correctness of your responses. As a secondary factor, I will grade based on the quality
of your code and your thought process. Any code that does not run at all (because of syntax errors or similar)
will be graded fairly harshly. Therefore, please try to always write code that runs even if it does not
get the answer correct for all inputs.
`)

const useStyles = makeStyles((theme: Theme) => createStyles({
    editor: {
        minHeight: 400,
        border: "solid 1px #ccc"
    },
    simpleSection: {
        paddingLeft: 32
    },
    explanation: {
        marginTop: 8,
        marginBottom: 16
    },
    warning: {
        color: theme.palette.warning.dark,
        fontWeight: 500,
        fontSize: "1.25rem",
        marginBottom: 16,
        display: "block"
    }
}))

export function ExploringJSLab({}: Props) {
    const classes = useLabStyles();
    const localClasses = useStyles();

    return (
        <div className={classes.container}>
            <strong className={ localClasses.warning }>Notice: This is a preview of the next lab. Some questions may change.</strong>
            <Typography variant="h4" className={ classes.title }>Lab 3: Exploring Javascript</Typography>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Overview</Typography>
                <Typography variant="body1">{ overview }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Using This Page</Typography>
                <Typography variant="body1">{ usingLab }</Typography>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Section 1: JavaScript Syntax</Typography>
                <div className={ localClasses.simpleSection }>
                    { simpleExamples.map(simple => 
                        <ProblemPlayground key={ simple.savePrefix } def={simple} />
                    )}
                </div>
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Section 2: Checking Palindromity</Typography>
                <ProblemPlayground def={ checkPalindromity } />
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Section 3: Create a Calculator</Typography>
                <ProblemPlayground def={ createCalculator } />
            </section>
            <section className={ classes.section }>
                <Typography variant="h5" className={ classes.sectionLabel }>Section 4: Sum of Primes</Typography>
                <ProblemPlayground def={ sumOfPrimes } />
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

function ProblemPlayground({ def }: { def: ProblemDefinition }) {
    const classes = useStyles();
    return (
        <>
            { def.title && <Typography variant="h6">{ def.title }</Typography>} 
            <Typography variant="body1" className={ classes.explanation }>{ def.explanation }</Typography>
            <CodePlayground mode="function"
                            intialCode={ def.code } 
                            executionParams={ def.expectations }
                            savePrefix={ def.savePrefix }
                            editorHeight={ def.editorHeight } />
        </>
    )
}

interface Props {
    lab: LabDefinition
}

export interface ProblemDefinition {
    title?: string;
    explanation: string;
    code: string;
    expectations: FunctionExecutionParams;
    savePrefix: string;
    editorHeight?: number;
}