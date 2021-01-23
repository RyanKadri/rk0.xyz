import { makeStyles } from "@material-ui/core";
import React, { Suspense, useEffect, useState } from "react";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { HTMLExampleOutput } from "./html-example-output";
import { JSExampleRunner } from "./js-example";
const CodeEditor = React.lazy(() => import("../shared/code-editor"))

const useStyles = makeStyles({
    container: {
        display: "grid",
        height: '100%',
        gridTemplateColumns: "1fr 1fr",
        gap: "4px"
    },
    editor: {
        border: "none",
        backgroundColor: "transparent",
        height: "100%",
        width: "100%",
        outline: "none",
        fontSize: "1.25rem"
    },
    editorContainer: {
        padding: 8,
        position: "relative",
        "&:focus-within": {
            outline: "-webkit-focus-ring-color auto 1px"
        },
        display: "flex",
        flexDirection: "column"
    }
})

interface Props {
    example: ExampleDefinition
}
export function ExamplePlayground({ example }: Props) {
    
    const classes = useStyles();
    const [ currCode, setCurrCode ] = useState(example.code);

    useEffect(() => {
        setCurrCode(example.code)
    }, [example.code] );

    return (
        <div className={ classes.container }>
            <div className={ classes.editorContainer }>
                <Suspense fallback="Loading...">
                    <CodeEditor language={example.language} initialCode={ example.code } onCodeChanged={ updated => setCurrCode(updated) } height="100%" />
                </Suspense>
            </div>
            { example.language === "html"
                ? <HTMLExampleOutput code={ currCode } />
                : <JSExampleRunner code={ currCode } testCases={ example.testCases } />
            }
        </div>
    )
}
