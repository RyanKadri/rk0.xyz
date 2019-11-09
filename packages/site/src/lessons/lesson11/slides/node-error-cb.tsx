
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Asynchronous Operations have special callbacks",
    "First parameter is the error (or null)" 
];

const code = `
const fs = require("fs");
fs.readFile(__dirname + "/asdkasdkjn", "utf-8", (err, data) => {
    if(err) {
        console.log("There was an error: " + err.message)
    } else {
        console.log(data)
    }
});
`.trim();

export function NodeErrorHandling({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Error Handling" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}