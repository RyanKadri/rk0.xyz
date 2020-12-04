import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
    content: {
        border: "dotted 2px #999",
        flexGrow: 1,
        backgroundColor: "white"
    },
    resultContainer: {
        padding: 8,
        display: "flex",
        flexDirection: "column"
    },
    saveButton: {
        alignSelf: "flex-end",
        marginBottom: 4,
    },
})

interface Props {
    code: string;
}

export function HTMLExampleOutput({ code }: Props) {
    const classes = useStyles();
    const [ activeCode, setActiveCode ] = useState(code);

    return (
        <div className={ classes.resultContainer }>
            <Button className={ classes.saveButton } 
                    color="primary" 
                    variant="contained"
                    onClick={ () => setActiveCode(code) }>
                Update
            </Button>
            <iframe className={classes.content} srcDoc={ activeCode } />
        </div>
    )
}