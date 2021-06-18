import React from "react";

export function CodeBlock({ code, className }: Props) {
    return (
        <div className={className || ""} 
             dangerouslySetInnerHTML={ { __html: code } } />
    )
}


interface Props {
    code: string;
    className?: string;
}