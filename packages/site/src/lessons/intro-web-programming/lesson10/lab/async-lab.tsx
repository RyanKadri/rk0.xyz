import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./async-lab.md";

export function AsyncLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}