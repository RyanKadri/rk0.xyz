import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    content: {
        border: "dotted 2px #999",
        flexGrow: 1,
        backgroundColor: "white"
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

    return (
        <iframe className={classes.content} srcDoc={ code } />
    )
}