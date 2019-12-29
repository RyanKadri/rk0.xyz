import { Button, createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, Theme, Typography } from "@material-ui/core";
import * as monaco from "monaco-editor";
import React, { useRef, useState } from "react";
import { CodeEditor } from "./code-editor";

interface Props {
    intialCode: string;
    mode: "function";
    language?: "javascript" | "html" | "css";
    executionParams: ExecutionParams;
    savePrefix?: string;
    editorHeight?: number;
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
        border: "solid 1px #ccc"
    },
    correct: {
        backgroundColor: theme.palette.primary.light
    },
    wrong: {
        backgroundColor: theme.palette.error.light
    },
    container: {
        marginBottom: 32,
        position: "relative",
    },
    runButton: {
        position: "absolute",
        top: 8,
        right: 8
    },
    resultsTable: {
        marginTop: 8
    }
}))

export function CodePlayground(props: Props) {

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const classes = useStyles();
    const [latestResults, updateResults] = useState<any[] | undefined>();
    const [globalError, setGlobalError] = useState<string | null>(null)

    const runCode = () => {
        setGlobalError(null);
        try {
            window.eval(editorRef.current!.getValue());
            const fn: Function = window[props.executionParams.functionToCall];
            const results = props.executionParams.expectations.map(exp => {
                try {
                    return fn.apply(null, exp.params)
                } catch (e) {
                    return `Error: ${e.message}`
                }
            })
            updateResults(results);
        } catch(e) {
            setGlobalError(`Error: ${e.message}`);
            updateResults(undefined);
        }
    }

    return (
        <div className={ classes.container }>
            <CodeEditor language={ props.language || "javascript"}
                        className={ classes.editor }
                        height={ props.editorHeight }
                        initialCode={ props.intialCode } 
                        editorRef={ editorRef } 
                        saveKey={ props.savePrefix ? `${props.savePrefix}.code` : undefined } />
            { globalError && 
                <Typography variant="body2" color="error">{ globalError }</Typography>
            }
            <Button variant="contained" color="primary" className={ classes.runButton } 
                    onClick={ runCode }>
                Run Code
            </Button>
            { props.executionParams.expectations && props.executionParams.expectations.length > 0 && (
                <Paper className={ classes.resultsTable }>
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
                </Paper>
            )}
        </div>
    )
}
