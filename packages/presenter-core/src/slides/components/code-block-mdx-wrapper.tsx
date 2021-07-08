import { makeStyles } from "@material-ui/core";
import prism from "prismjs";
import React from "react";
import { CodeBlock, SyntaxHighlightedBlock } from "./code-block";

const useStyles = makeStyles({
    container: {
        overflow: "auto",
        maxHeight: "600px"
    }
})

interface Props {
    children: string;
    className: string;
}
export function CodeBlockMdxWrapper({ children, className }: Props) {
    const classes = useStyles();
    const language = className.replace(/language-/, "")
    const html = prism.highlight(children, prism.languages[language], language);
    const code: SyntaxHighlightedBlock = {
        language,
        raw: children,
        html
    };
    return (
        <CodeBlock code={ code } className={ classes.container } /> 
    )
}