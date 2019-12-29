import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import hljs from "highlight.js/lib/highlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/lightfair.css";
import React, { useEffect, useRef } from "react";
import { noop } from "../../../site/src/common/functional-utils";

const languages = {
    "xml": xml,
    "html": xml,
    "css": css,
    "js": js
}

const styles = createStyles({
    code: {
        fontSize: "1em",
        backgroundColor: "rgba(0,0,0,0.04)",
        borderRadius: 4
    }
});

const _CodeBlock = ({ classes, language, code, className, onDoubleClick }: Props) => {
    const ref = useRef(null);
    useEffect(() => {
        const lang = languages[language];
        hljs.registerLanguage(language, lang);
        hljs.highlightBlock(ref.current)
    }, [ code ]);
    return (
        <pre className={className || ""} onDoubleClick={ onDoubleClick || noop }>
            <code ref={ref} className={`${language} ${classes.code}`}>                
                { code.trim() }
            </code>
        </pre>
    )
}

export const CodeBlock = withStyles(styles)(_CodeBlock)

interface Props extends WithStyles<typeof styles> {
    code: string;
    language: string;
    className?: string;
    onDoubleClick?(): void;
}