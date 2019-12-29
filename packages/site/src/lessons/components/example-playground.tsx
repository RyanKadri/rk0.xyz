import { createStyles, Fab, Typography, WithStyles, withStyles } from "@material-ui/core";
import * as monaco from "monaco-editor";
import React, { useEffect, useRef, useState } from "react";
import { ComplexExample, ExampleCode, ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { identity } from "../../common/functional-utils";
import { CodeEditor } from "../shared/code-editor";

const styles = createStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        height: '100%'
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
        width: "50%",
        padding: 8,
        position: "relative",
        "&:focus-within": {
            outline: "-webkit-focus-ring-color auto 1px"
        },
        display: "flex",
        flexDirection: "column"
    },
    saveButton: {
        position: "absolute",
        top: 8,
        right: 8
    },
    content: {
        width: "50%",
        border: "none",
        borderLeft: "solid 1px #ccc",
        borderTop: "solid 1px #ccc"
    }
})

function isSnippetExample(code: ExampleCode): code is ComplexExample {
    return typeof code !== "string";
}

const _ExamplePlayground = ({ example, classes }: Props) => {
    
    const [ code, setCode ] = useState(isSnippetExample(example.code) ? example.code.displayCode : example.code);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {
        setCode(isSnippetExample(example.code) ? example.code.displayCode : example.code)
    }, [example.code] );

    const renderedCode = isSnippetExample(example.code)
        ? (example.code.formCode || identity)(code)
        : code;

    return (
        <div className={ classes.container }>
            <div className={ classes.editorContainer }>
                { isSnippetExample(example.code) && <Typography>This code may be abbreviated</Typography> }
                <CodeEditor language="html" initialCode={ code } editorRef={ editorRef }/>
                <Fab className={ classes.saveButton } color="primary" onClick={ () => setCode(editorRef.current!.getValue()) }>Save</Fab>
            </div>
            <iframe className={classes.content} srcDoc={ renderedCode } />
        </div>
    )
}

export const ExamplePlayground = withStyles(styles)(_ExamplePlayground)

interface Props extends WithStyles<typeof styles> {
    example: ExampleDefinition
}