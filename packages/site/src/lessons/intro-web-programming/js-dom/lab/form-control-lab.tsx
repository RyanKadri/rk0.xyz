import React from "react";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./lab-writeup.md";
import template from "./template.html";

export function FormControlLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
            <h2>Sample Code</h2>
            <CodeBlock code={ template } language="html" />
        </div>
        
    )
}