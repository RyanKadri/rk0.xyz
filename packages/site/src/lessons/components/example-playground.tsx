import { createStyles, Fab, Typography, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { ComplexExample, ExampleCode, ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../presenter-core/src/slide-components/code-block";
import { TrackedActions, TrackedCategories } from "../../analytics";
import { identity } from "../../common/functional-utils";

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
        outline: "none"
    },
    editorContainer: {
        backgroundColor: "rgba(0,0,0,0.03)",
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
    
    const [ code, setCode ] = useState("");
    const [ readOnly, setReadonly ] = useState(true);

    const onTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const nextVal = e.target.value;
        setCode(nextVal);
    }

    const onDoubleClick = () => {
        setReadonly(false);
        ReactGA.event({
            category: TrackedCategories.LEARNING_TOOLS,
            action: TrackedActions.EDITED_PLAYGROUND,
            label: example.title,
        });
    }

    useEffect(() => {
        setCode(isSnippetExample(example.code) ? example.code.displayCode : example.code)
    }, [example.code] );

    const renderedCode = isSnippetExample(example.code)
        ? (example.code.formCode || identity)(code)
        : example.code;

    return (
        <div className={ classes.container }>
            <div className={ classes.editorContainer }>
                { readOnly 
                    ? <>
                        { isSnippetExample(example.code) && <Typography>This code may be abbreviated</Typography> }
                        <CodeBlock language="html" code={ code } className={ classes.editor }
                            onDoubleClick={ onDoubleClick } />
                    </>
                    : <>
                        <textarea className={ classes.editor } value={ code } onChange={ onTextUpdate }/>
                        <Fab className={ classes.saveButton } color="primary" onClick={ () => setReadonly(true) }>Save</Fab>
                    </>
                }
            </div>
            <iframe className={classes.content} srcDoc={ renderedCode } />
        </div>
    )
}

export const ExamplePlayground = withStyles(styles)(_ExamplePlayground)

interface Props extends WithStyles<typeof styles> {
    example: ExampleDefinition
}