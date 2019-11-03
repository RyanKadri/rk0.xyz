import React from "react";
import { useMarkdownLabStyles } from "../../shared/lab";
import writeup from "./js-libraries-lab.md";

export function JSLibraries() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}