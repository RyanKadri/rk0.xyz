import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./lab-writeup.md";
import clockStarter from "./time.zip";

export function CallbacksLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
            <a href={ clockStarter }>Analog clock starter</a>
        </div>
        
    )
}