import { createStyles, Hidden, makeStyles } from "@material-ui/core";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";
import { HTMLExampleOutput } from "./html-example-output";
import { JSExampleRunner } from "./js-example";
const CodeEditor = dynamic(() => import("../shared/code-editor"), { ssr: false })

const useStyles = makeStyles(theme => createStyles({
    container: {
        display: "grid",
        height: '100%',
        gridTemplateColumns: "1fr 1fr",
        gap: "4px",
        [ theme.breakpoints.down("sm") ]: {
            gridTemplateColumns: "1fr"
        }
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
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        overflow: "auto"
    },
    outputContainer: {
        padding: theme.spacing(),
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            minHeight: 500
        }
    }
}))

interface Props {
    example: ExampleDefinition;
    highlightedCode: SyntaxHighlightedBlock;
}
export function ExamplePlayground({ example, highlightedCode }: Props) {
    
    const classes = useStyles();
    const [ currCode, setCurrCode ] = useState(example.code);

    useEffect(() => {
        setCurrCode(example.code)
    }, [example.code] );

    return (
        <div className={ classes.container }>
            <div className={ classes.editorContainer }>
                <Hidden smDown>
                    <CodeEditor language={example.language} initialCode={ example.code } onCodeChanged={ updated => setCurrCode(updated) } height="100%" />
                </Hidden>
                <Hidden mdUp>
                    <CodeBlock code={ highlightedCode } />
                </Hidden>
                <noscript>
                    <CodeBlock code={ highlightedCode } />
                </noscript>
            </div>
            <div className={ classes.outputContainer }>
                { example.language === "html"
                    ? <HTMLExampleOutput code={ currCode } />
                    : <JSExampleRunner code={ currCode } testCases={ example.testCases } />
                }
            </div>
        </div>
    )
}
