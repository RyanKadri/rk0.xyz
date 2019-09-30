import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import writeup from "./lab-writeup.md";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        maxWidth: 1200,
        "& h1": theme.typography.h4,
        "& h2": theme.typography.h5,
        "& h3": {
            ...theme.typography.body1,
            fontWeight: theme.typography.fontWeightBold
        },
        "& h1,& h2,& h3": {
            marginBottom: 8,
            marginTop: 20
        },
        "& p": {
            ...theme.typography.body1,
            margin: 0,
        },
        "& section": {
            marginLeft: 16
        },
    }
}));

export function FormControlLab() {
    const classes = useStyles();
    return (
        <div className={ classes.container } dangerouslySetInnerHTML={{ __html: writeup }}></div>
    )
}