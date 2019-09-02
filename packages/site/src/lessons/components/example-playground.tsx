import { createStyles, Fab, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { CodeBlock, ExampleDefinition } from "../../../../presenter-core/src";
import { TrackedActions, TrackedCategories } from "../../analytics";

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
        display: "flex"
    },
    saveButton: {
        top: 8,
        right: 8
    },
    content: {
        width: "50%",
        border: "none",
        borderLeft: "solid 1px #ccc",
    }
})

const _ExamplePlayground = ({ example, classes }: Props) => {
    
    const [ code, setCode ] = useState(example.code);
    const [ readOnly, setReadonly ] = useState(true)

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
        setCode(example.code)
    }, [example.code] )

    return (
        <div className={ classes.container }>
            <div className={ classes.editorContainer }>
                { readOnly 
                    ? <CodeBlock language="html" code={ code } className={ classes.editor }
                        onDoubleClick={ onDoubleClick } />
                    : <>
                        <textarea className={ classes.editor } value={ code } onChange={ onTextUpdate }/>
                        <Fab className={ classes.saveButton } color="primary" onClick={ () => setReadonly(true) }>Save</Fab>
                    </>
                }
            </div>
            <iframe className={classes.content} srcDoc={ code } />
        </div>
    )
}

export const ExamplePlayground = withStyles(styles)(_ExamplePlayground)

interface Props extends WithStyles<typeof styles> {
    example: ExampleDefinition
}