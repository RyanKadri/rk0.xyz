import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./responsive-resume.md";

export function ResponsiveResumeLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}