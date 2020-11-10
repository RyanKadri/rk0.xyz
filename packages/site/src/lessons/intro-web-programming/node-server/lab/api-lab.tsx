import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./api-lab.md";

export function ApiLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
    )
}