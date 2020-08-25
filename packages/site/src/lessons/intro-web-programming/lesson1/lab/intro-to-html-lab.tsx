import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./intro-to-html-lab.md";

export function IntroToHtmlLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}