import React from "react";

export function CodeBlock({ code, className }: Props) {
    return (
        <pre className={`language-${code.language}`}>
            <code className={`language-${code.language}`}>
                <div className={className || ""} 
                    dangerouslySetInnerHTML={ { __html: code.html } } />
            </code>
        </pre>
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