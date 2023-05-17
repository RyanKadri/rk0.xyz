import { createStyles, makeStyles, Typography } from "@mui/material";
import { LabDefinition } from "../../../../../../presenter-core/src/services/types";
import { wrap } from "../../../../common/functional-utils";
import { CodePlayground, FunctionExecutionParams } from "../../../shared/code-playground";
import { useMarkdownLabStyles } from "../../../shared/lab";
import { createCalculator } from "./create-calculator";
import { isHappyDog } from "./isHappyDog";
import { simpleExamples } from "./simpleExamples";

const useStyles = makeStyles(
  createStyles({
    codePlayground: {
      marginTop: 16,
    },
  })
);

const overview = wrap(`
In this lab, you will practice some basic JavaScript. The first set of problems is meant to help you learn JavaScript syntax. Later problems are meant to help you learn to solve programming puzzles. Feel free to work together on the coding exercises in the first section of the lab. For later sections, please do all work independently.`);

const usingLab = wrap(`
When working on this lab, you will be able to write code in the embedded code editors on the page. I have also provided a set of sample inputs and outputs for each function. When you hit the run button, it will execute your function with the given inputs and compare the return value with the expected output. You can run your code as often as you want. Your grade is not dependent on running the code on this site. Also, remember that just because your inputs and outputs match for all the examples I have given, it does not mean your code is perfect. You should still test your code with some other values to make sure it works properly. Please do not change the name of the functions in the sample code. I rely on the function names being correct to call your function(s) and run tests.`);

const submitting = wrap(`
To submit this assignment, please create a single zip file and upload it to Canvas under the appropriate assignment. Your zip file should contain a separate .js file for every problem in the lab. Please give the file the same name as the main function you are writing. For instance, Section 3 would get a single file called isHappyDog.js`);

const grading = wrap(`
This assignment is a bit different from what you have done before in that all answers will either be objectively correct or incorrect for each input. I will run each of your functions for the inputs shown in the corresponding table. I will also test your function with a few inputs that are not shown. I will grade this assignment mostly based on the correctness of your responses. As a secondary factor, I will grade based on the quality of your code and your thought process. JavaScript is more picky about syntax so please make sure your code at least does something, even if it is not perfectly correct.`);

export function ExploringJSLab({}: Props) {
  const classes = useMarkdownLabStyles();
  return (
    <main className={classes.container}>
      <Typography variant="h1">Lab 4: Exploring JavaScript</Typography>
      <Typography variant="h2">Overview</Typography>
      <Typography variant="body1">{overview}</Typography>

      <Typography variant="h2">Using This Page</Typography>
      <Typography variant="body1">{usingLab}</Typography>
      <Typography variant="h2">Section 1: JavaScript Syntax</Typography>
      <div>
        {simpleExamples.map(simple => (
          <ProblemPlayground key={simple.savePrefix} def={simple} />
        ))}
      </div>
      <Typography variant="h2">Section 2: Conditions and Operators</Typography>
      <ProblemPlayground def={createCalculator} />

      <Typography variant="h2">Section 3: Objects and Loops</Typography>
      <ProblemPlayground def={isHappyDog} />

      <Typography variant="h2">Submitting this lab</Typography>
      <Typography variant="body1">{submitting}</Typography>

      <Typography variant="h2">Grading</Typography>
      <Typography variant="body1">{grading}</Typography>
    </main>
  );
}

function ProblemPlayground({ def }: { def: ProblemDefinition }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" color="secondary">
        <code>{def.expectations.functionToCall}()</code>
      </Typography>
      <Typography variant="body1">{def.explanation}</Typography>
      <CodePlayground
        mode="function"
        className={classes.codePlayground}
        intialCode={def.code}
        executionParams={def.expectations}
        savePrefix={def.savePrefix}
        editorHeight={def.editorHeight}
      />
    </>
  );
}

interface Props {
  lab: LabDefinition;
}

export interface ProblemDefinition {
  title?: string;
  explanation: string;
  code: string;
  expectations: FunctionExecutionParams;
  savePrefix: string;
  editorHeight?: number;
}
