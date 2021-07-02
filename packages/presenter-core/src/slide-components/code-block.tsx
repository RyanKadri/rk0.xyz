import { createStyles, makeStyles } from "@material-ui/core";
import c from "classnames";
import React from "react";

const useStyles = makeStyles(() => createStyles({
    codeBlock: {
        "fontSize": "26px",
    }
}))

export function CodeBlock({ code, className }: Props) {
    const classes = useStyles();

    return (
        <div className={ c(className, classes.codeBlock) }>
            <pre className={`language-${code.language}`} style={{ margin: 0 }}>
                <code className={`language-${code.language}`} 
                      dangerouslySetInnerHTML={{ __html: code.html }} />
            </pre>
        </div>
    )
}


interface Props {
    code: SyntaxHighlightedBlock;
    className?: string;
}

export interface SyntaxHighlightedBlock {
    raw: string;
    html: string;
    language: string;
}