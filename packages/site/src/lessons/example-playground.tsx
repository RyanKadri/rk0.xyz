import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { ExampleDefinition } from "../../../presenter-core/src";

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
        backgroundColor: "rgba(0,0,0,0.08)",
        width: "50%",
        padding: 8,
        "&:focus-within": {
            outline: "-webkit-focus-ring-color auto 1px"
        }
    },
    content: {
        width: "50%",
        borderLeft: "solid 1px #ccc",
        padding: 8
    }
})

const _ExamplePlayground = ({ example, classes }: Props) => {
    
    const [ code, setCode ] = useState(example.code);
    return (
        <div className={ classes.container }>
            <div className={ classes.editorContainer }>
                <textarea className={ classes.editor } value={ code } onChange={ e => setCode(e.target.value ) }/>
            </div>
            <iframe className={classes.content} srcDoc={ code } />
        </div>
    )
}

export const ExamplePlayground = withStyles(styles)(_ExamplePlayground)

interface Props extends WithStyles<typeof styles> {
    example: ExampleDefinition
}