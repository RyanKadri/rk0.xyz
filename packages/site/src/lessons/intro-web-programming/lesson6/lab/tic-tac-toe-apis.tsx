import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./lab-writeup.md";

export function TicTacToeLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}