import c from "classnames";
import React from "react";

export function CodeBlock({ code, className }: Props) {
    return (
        <div className={ c(className) }>
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