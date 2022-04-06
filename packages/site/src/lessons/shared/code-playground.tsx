import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@material-ui/core";
import c from "classnames";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { deepEquals } from "../../common/functional-utils";
const CodeEditor = dynamic(() => import("./code-editor"), { ssr: false });

interface Props {
  intialCode: string;
  mode: "function";
  language?: "javascript" | "html" | "css";
  executionParams: ExecutionParams;
  savePrefix?: string;
  editorHeight?: number;
  className?: string;
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      border: "solid 1px #ccc",
    },
    correct: {
      backgroundColor: theme.palette.primary.light,
    },
    wrong: {
      backgroundColor: theme.palette.error.light,
    },
    container: {
      marginBottom: 32,
      position: "relative",
      border: "solid 2px #999",
    },
    runButton: {
      position: "absolute",
      top: 8,
      right: 8,
    },
    resultsTable: {
      borderTop: "solid 2px #999",
      borderRadius: 0,
    },
    codeVal: {
      whiteSpace: "pre-wrap",
    },
  })
);

export function CodePlayground(props: Props) {
  const classes = useStyles();
  const [latestResults, updateResults] = useState<any[] | undefined>();
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [currCode, setCurrCode] = useState<string>(props.intialCode);

  const runCode = () => {
    setGlobalError(null);
    try {
      window.eval(currCode);
      const fn: Function = window[props.executionParams.functionToCall];
      if (!fn) {
        updateResults(
          props.executionParams.expectations.map(
            _ => `Cannot find function ${props.executionParams.functionToCall} in your code.
Did you change the function name?`
          )
        );
      } else {
        const results = props.executionParams.expectations.map(exp => {
          try {
            return fn.apply(null, exp.params);
          } catch (e) {
            return `Error: ${(e as Error).message}`;
          }
        });
        updateResults(results);
      }
    } catch (e) {
      setGlobalError(`Error: ${(e as Error).message}`);
      updateResults(undefined);
    }
  };

  return (
    <div className={c(classes.container, props.className)}>
      <CodeEditor
        language={props.language || "javascript"}
        className={classes.editor}
        height={props.editorHeight}
        initialCode={props.intialCode}
        onCodeChanged={code => setCurrCode(code)}
        saveKey={props.savePrefix ? `${props.savePrefix}.code` : undefined}
      />
      {globalError && (
        <Typography variant="body2" color="error">
          {globalError}
        </Typography>
      )}
      <Button variant="contained" color="primary" className={classes.runButton} onClick={runCode}>
        Run Code
      </Button>
      {props.executionParams.expectations && props.executionParams.expectations.length > 0 && (
        <Paper className={classes.resultsTable}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Parameters</TableCell>
                <TableCell>Expected Return Value</TableCell>
                <TableCell>Actual Return Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.executionParams.expectations.map((exp, row) => {
                const currResult = latestResults ? latestResults[row] : undefined;
                const rowClass =
                  latestResults === undefined
                    ? ""
                    : deepEquals(exp.expectedResults, currResult)
                    ? classes.correct
                    : classes.wrong;
                return (
                  <TableRow key={row} className={rowClass}>
                    <TableCell>
                      <code>
                        (
                        {exp.params.map((param, i, a) => (
                          <>
                            <CodeValue param={param} key={i} />
                            {i === a.length - 1 ? "" : ", "}
                          </>
                        ))}
                        )
                      </code>
                    </TableCell>
                    <TableCell>
                      <code>
                        <CodeValue param={exp.expectedResults} />
                      </code>
                    </TableCell>
                    <TableCell>
                      {!!latestResults ? (
                        <code>
                          <CodeValue param={currResult} />
                        </code>
                      ) : undefined}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
}

interface CodeValueProps {
  param: any;
}
function CodeValue({ param }: CodeValueProps) {
  const classes = useStyles();

  return <span className={classes.codeVal}>{JSON.stringify(param, null, 4)}</span>;
}
