import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
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

const Container = styled("div")(({ theme }) => ({
  marginBottom: 32,
  position: "relative",
  border: "solid 2px #999",

  "& .editor": {
    border: "solid 1px #ccc",
  },
  "& .correct": {
    backgroundColor: theme.palette.primary.light,
  },
  "& .wrong": {
    backgroundColor: theme.palette.error.light,
  },
  "& .runButton": {
    position: "absolute",
    top: 8,
    right: 8,
  },
  "& .resultsTable": {
    borderTop: "solid 2px #999",
    borderRadius: 0,
  },
  "& .codeVal": {
    whiteSpace: "pre-wrap",
  },
}));

export function CodePlayground(props: Props) {
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
Did you change the function name?`,
          ),
        );
      } else {
        const results = props.executionParams.expectations.map(exp => {
          try {
            return fn(...exp.params);
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
    <Container className={props.className}>
      <CodeEditor
        language={props.language || "javascript"}
        className={"editor"}
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
      <Button variant="contained" color="primary" className={"runButton"} onClick={runCode}>
        Run Code
      </Button>
      {props.executionParams.expectations && props.executionParams.expectations.length > 0 && (
        <Paper className={"resultsTable"}>
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
                  latestResults === undefined ? "" : deepEquals(exp.expectedResults, currResult) ? "correct" : "wrong";
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
                      {latestResults ? (
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
    </Container>
  );
}

interface CodeValueProps {
  param: any;
}
function CodeValue({ param }: CodeValueProps) {
  return <span className={"codeVal"}>{JSON.stringify(param, null, 4)}</span>;
}
