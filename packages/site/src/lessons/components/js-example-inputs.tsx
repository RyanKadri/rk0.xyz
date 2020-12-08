import { Button, Card, CardActions, CardHeader, makeStyles } from "@material-ui/core";
import React from "react";
import { arrayRemove, arrayReplace } from "../../common/functional-utils";
import { EvalResult, LoggedConsoleMessage } from "./js-execution";

const useStyles = makeStyles(_ => ({
    testCaseContainer: {
        marginTop: 8
    },
    testCaseList: {
        margin: 0,
        padding: "8px 24px",
        "& li": {
            listStyle: "none"
        },
        "& li code": {
            fontSize: "1.15rem",
            fontFamily: "monospace",
        },
        "& input": {
            padding: 4,
            border: "dotted 2px #999",
        }
    },
    functionName: {
        border: "none",
        fontFamily: "monospace",
        backgroundColor: "white",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.10)",
        }
    }
}))

interface Props {
    functionName: string;
    testCases: TestCase[]
    onUpdateTestCases(testCases: TestCase[]): void;
    onRunTests(): void;
    onSelectTestCase(testCaseInd: number): void; // TODO - I don't like this
}
export function JSExampleTestCases({ testCases, functionName, onUpdateTestCases, onRunTests, onSelectTestCase }: Props) {
    const classes = useStyles();
    
    return (
        <Card className={ classes.testCaseContainer }>
            <CardHeader title={ "Test Cases" } />
            <ul className={ classes.testCaseList }>
                { testCases.length === 0
                    ? <li>It doesn't look like this function has any test cases. Try adding one!</li>
                    : testCases.map((testCase, i) => (
                        <TestCaseLine testCase={ testCase } key={ i }
                                    functionName={ functionName } 
                                    onUpdate={ testCase => onUpdateTestCases(arrayReplace(testCases, i, testCase)) }
                                    onDelete={ () => onUpdateTestCases(arrayRemove(testCases, i)) }
                                    onSelect={ () => onSelectTestCase(i) }
                        />
                    ))}
            </ul>
            <CardActions>
                <Button variant="outlined"
                        onClick={ () => onUpdateTestCases(testCases.concat({ paramString: "", expectedResult: ""})) }>
                    Add a Test Case
                </Button>
                <Button variant="outlined" color="primary"
                        onClick={ onRunTests } >
                    Run Test Cases
                </Button>
            </CardActions>
        </Card>
    )
}

interface TestCaseLineProps {
    testCase: TestCase;
    functionName: string;
    onUpdate(updated: TestCase): void;
    onDelete(): void;
    onSelect(): void;
}
function TestCaseLine({ functionName, testCase, onUpdate, onSelect }: TestCaseLineProps) {
    const classes = useStyles();
    return (
        <li>
            <code>
                <button className={ classes.functionName }
                        onClick={ onSelect }>{ functionName }</button>
                (
                <input value={ testCase.paramString } 
                       placeholder="Tested Parameters"
                       onChange={ e => onUpdate({ ...testCase, paramString: e.target.value })} />
                ) === &nbsp;
                <input value={ testCase.expectedResult } 
                       placeholder="Expected return value"
                       onChange={ e => onUpdate({ ...testCase, expectedResult: e.target.value })} />
            </code>
        </li>
    )
}

export interface TestCase {
    paramString: string;
    expectedResult: any;
    actualResult?: EvalResult;
    messages?: LoggedConsoleMessage[];
}