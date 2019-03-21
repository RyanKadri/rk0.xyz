import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import hljs from "highlight.js/lib/highlight";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/lightfair.css";
import React, { useEffect, useRef } from "react";

const languages = {
    "xml": xml,
    "html": xml,
    "css": css
}

const styles = createStyles({
    code: {
        fontSize: "2rem",
        backgroundColor: "transparent"
    }
});

const _CodeBlock = ({ classes, language, code }: Props) => {
    const ref = useRef(null);
    useEffect(() => {
        const lang = languages[language];
        hljs.registerLanguage(language, lang);
        hljs.highlightBlock(ref.current)
    }, []);
    return (
        <pre>
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
}