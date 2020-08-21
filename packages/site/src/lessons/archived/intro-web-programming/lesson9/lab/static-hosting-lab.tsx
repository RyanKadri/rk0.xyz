import React from "react";
import { useMarkdownLabStyles } from "../../../../shared/lab";
import writeup from "./static-hosting-lab.md";

export function StaticHostingLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}