import React from "react";
import { useMarkdownLabStyles } from "../../../../shared/lab";
import writeup from "./node-lab.md";

export function NodeScripting() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
    )
}