import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./libraries-lab.md";

export function LibrariesLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}