import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import writeup from "./lab-writeup.md";
import template from "./template.html";

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
        "& p+p": {
            marginTop: 8
        },
        "& section": {
            marginLeft: 16
        },
    }
}));

export function FormControlLab() {
    const classes = useStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
            <h2>Sample Code</h2>
            <CodeBlock code={ template } language="html" />
        </div>
        
    )
}