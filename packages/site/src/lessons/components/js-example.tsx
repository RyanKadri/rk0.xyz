import { Button, makeStyles } from "@material-ui/core";
import { parse } from "acorn";
import { FunctionDeclaration, Identifier, Node } from "estree";
import React, { useState } from "react";
import { JSExampleConsole } from "./js-example-console";
import { JSExampleTestCases, TestCase } from "./js-example-inputs";
import { executeFunction } from "./js-execution";

function extractFunctionInfo(code: string) {
    try {
        const ast = parse(code, { ecmaVersion: "latest", }) as Node;
        if(ast.type !== "Program") {
            console.error("Is this a valid JS snippet?")
            return null;
        } else {
            return (ast.body
                .filter(statement => statement.type === "FunctionDeclaration") as FunctionDeclaration[])
                .filter(func => func.id !== null)
                .map(func => ({
                    name: func.id!.name,
                    parameters: func.params.map(param => (param as Identifier).name) // TODO - This is a bad assumption
                }))
        }
    } catch {
        return null;
    }
};

const useStyles = makeStyles({
    container: {
        padding: 4
    },
    actionHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& select": {
            marginLeft: 8
        }
    }
})

interface Props {
    code: string;
}
export function JSExampleRunner({ code }: Props) {
    const classes = useStyles();
    const functions = extractFunctionInfo(code);
    const [ targetFunction, setTargetFunction ] = useState(0);
    const [ testCases, setTestCases ] = useState<TestCase[]>([]);
    const [ selectedTestCaseInd, setSelectedTestCaseInd ] = useState<number | null>(null);
    const selectedFunction = functions?.[targetFunction];
    const selectedTestCase = selectedTestCaseInd !== null ? testCases[selectedTestCaseInd] : null;

    const onRunTests = () => {
        if(testCases.length === 0 && selectedFunction && selectedFunction.parameters.length === 0) {
            const { result, consoleMessages } = executeFunction(code, selectedFunction.name);
            setTestCases([{ paramString: "", expectedResult: "", actualResult: result, messages: consoleMessages }]);
            setSelectedTestCaseInd(0);
        } else {
            const completedTests = testCases.map(testCase => { 
                const { result, consoleMessages } = executeFunction(code, selectedFunction!.name, testCase.paramString);
                return {
                    ...testCase, 
                    actualResult: result,
                    messages: consoleMessages
                }
            });
            setTestCases(completedTests)
            setSelectedTestCaseInd(0);
        }
    }

    const onSelectFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTargetFunction(functions!.findIndex(f => f.name === e.target.value)!);
        setTestCases([]);
        setSelectedTestCaseInd(null);
    }

    return (
        <div className={ classes.container }>
            { functions === null
                ? <p>Error parsing function</p>
                : (
                    <>
                    <header className={ classes.actionHeader }>
                        <label>Please select a function to test: 
                            <select onChange={ onSelectFunction }>
                                { functions.map((func, i) => (
                                    <option key={i} value={ func.name }>{ func.name }</option>
                                )) }
                            </select>
                        </label>
                        { selectedFunction && selectedFunction.parameters.length === 0 && (
                            <Button color="primary"
                                    variant="contained"
                                    style={{ textTransform: "none" }}
                                    onClick={ onRunTests } >
                                Run { selectedFunction!.name }
                            </Button>
                        ) }
                    </header>
                    { (selectedFunction && selectedFunction.parameters.length > 0) && (
                        <JSExampleTestCases functionName={ selectedFunction?.name ?? "<unknown>"}
                                            testCases={ testCases } 
                                            onUpdateTestCases={ (testCases) => setTestCases(testCases) }
                                            onRunTests={ onRunTests }
                                            onSelectTestCase={ setSelectedTestCaseInd } />
                    ) }
                    { selectedFunction !== null && (
                        <JSExampleConsole consoleMessages={ selectedTestCase?.messages } 
                                          result={ selectedTestCase?.actualResult } />
                    )}     
                    </>   
                )
            }
        </div>
    )
}