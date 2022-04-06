import { Button, makeStyles } from "@material-ui/core";
import { parse } from "acorn";
import { FunctionDeclaration, Identifier, Node } from "estree";
import React, { useEffect, useState } from "react";
import { executeFunction } from "../../../../presenter-core/src/services/js-execution";
import { TestCaseMapping } from "../../../../presenter-core/src/services/types";
import { JSExampleConsole } from "./js-example-console";
import { JSExampleTestCases } from "./js-example-inputs";

export interface FunctionInfo {
  name: string;
  parameters: string[];
}
function extractFunctionInfo(code: string): FunctionInfo[] | null {
  try {
    const ast = parse(code, { ecmaVersion: "latest" }) as Node;
    if (ast.type !== "Program") {
      console.error("Is this a valid JS snippet?");
      return null;
    } else {
      return (ast.body.filter(statement => statement.type === "FunctionDeclaration") as FunctionDeclaration[])
        .filter(func => func.id !== null)
        .map(func => ({
          name: func.id!.name,
          parameters: func.params.map(param => (param as Identifier).name), // TODO - This is a bad assumption
        }));
    }
  } catch {
    return null;
  }
}

const useStyles = makeStyles({
  actionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& select": {
      marginLeft: 8,
    },
  },
});

interface Props {
  code: string;
  testCases: TestCaseMapping;
}
export function JSExampleRunner({ code, testCases: initTestCases }: Props) {
  const classes = useStyles();
  const functions = extractFunctionInfo(code);
  const [targetFunction, setTargetFunction] = useState<string | null>(functions?.[0].name ?? null);
  const [testCaseMap, setTestCaseMap] = useState<TestCaseMapping>({ ...initTestCases });
  const [selectedTestCaseInd, setSelectedTestCaseInd] = useState<number | null>(null);
  const selectedFunction = functions?.find(func => func.name === targetFunction);
  const testCases = !!targetFunction ? testCaseMap[targetFunction] ?? [] : [];

  const selectedTestCase =
    selectedTestCaseInd !== null && selectedTestCaseInd < testCases.length ? testCases[selectedTestCaseInd] : null;

  useEffect(() => {
    if (!(functions ?? []).some(func => func.name === targetFunction)) {
      setTargetFunction(functions?.[0].name ?? null);
    }
  }, [code]);

  const onRunTests = () => {
    const completedTests = testCases.map(testCase => {
      const { result, consoleMessages } = executeFunction(code, selectedFunction!.name, testCase.paramString);
      return {
        ...testCase,
        actualResult: result,
        messages: consoleMessages,
      };
    });
    setTestCaseMap(old => ({ ...old, [selectedFunction!.name]: completedTests }));
    setSelectedTestCaseInd(0);
  };

  const onSelectFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetFunction(e.target.value);
    setSelectedTestCaseInd(0);
  };

  return (
    <>
      {functions === null ? (
        <p>Error parsing function</p>
      ) : (
        <>
          <header className={classes.actionHeader}>
            <label>
              Please select a function to test:
              <select onChange={onSelectFunction}>
                {functions.map((func, i) => (
                  <option key={i} value={func.name}>
                    {func.name}
                  </option>
                ))}
              </select>
            </label>
            {selectedFunction && selectedFunction.parameters.length === 0 && (
              <Button color="primary" variant="contained" style={{ textTransform: "none" }} onClick={onRunTests}>
                Run {selectedFunction!.name}
              </Button>
            )}
          </header>
          {!!selectedFunction && (
            <JSExampleTestCases
              functionInfo={selectedFunction}
              testCases={testCases}
              onUpdateTestCases={testCases => setTestCaseMap(old => ({ ...old, [selectedFunction.name]: testCases }))}
              onRunTests={onRunTests}
              onSelectTestCase={setSelectedTestCaseInd}
            />
          )}
          {!!selectedFunction && (
            <JSExampleConsole consoleMessages={selectedTestCase?.messages} result={selectedTestCase?.actualResult} />
          )}
        </>
      )}
    </>
  );
}
