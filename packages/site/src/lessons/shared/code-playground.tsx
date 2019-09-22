import { Button, createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme } from "@material-ui/core";
import * as monaco from "monaco-editor";
import React, { useRef, useState } from "react";
import { CodeEditor } from "./code-editor";

interface Props {
    intialCode: string;
    mode: "function";
    executionParams: ExecutionParams;
    savePrefix?: string;
}

export type ExecutionParams = FunctionExecutionParams;

export interface FunctionExecutionParams {
    functionToCall: string;
    expectations: ExpectedExecution[];
}

export interface ExpectedExecution {
    params: any[];
    expectedResults: any;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    editor: {
        minHeight: 400,
        border: "solid 1px #ccc"
    },
    correct: {
        backgroundColor: theme.palette.primary.light
    },
    wrong: {
        backgroundColor: theme.palette.error.light
    }
}))

export function CodePlayground(props: Props) {

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const classes = useStyles();
    const [latestResults, updateResults] = useState<any[] | undefined>();

    const runCode = () => {
        window.eval(editorRef.current!.getValue());
        const fn: Function = window[props.executionParams.functionToCall];
        const results = props.executionParams.expectations.map(exp => (
            fn.apply(null, exp.params)
        ))
        updateResults(results);
    }

    return (
        <div>
            <CodeEditor className={ classes.editor }
                        initialCode={ props.intialCode } 
                        editorRef={ editorRef } 
                        saveKey={ props.savePrefix ? `${props.savePrefix}.code` : undefined } />
            <Button variant="contained" color="primary" 
                    onClick={ runCode }>
                Run Code
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Parameters</TableCell><TableCell>Expected Result</TableCell><TableCell>Actual Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.executionParams.expectations.map( (exp, row) => {
                        const currResult = latestResults ? latestResults[row] : undefined;
                        const rowClass = latestResults === undefined
                            ? ""
                            : exp.expectedResults === currResult
                                ? classes.correct
                                : classes.wrong;
                        return (
                            <TableRow key={ row } className={ rowClass }>
                                <TableCell>{ exp.params.map(param => JSON.stringify(param)).join(", ") }</TableCell>
                                <TableCell>{ JSON.stringify(exp.expectedResults) }</TableCell>
                                <TableCell>{ latestResults ? "" + JSON.stringify(currResult) : undefined }</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
