
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
    "NodeJS lets you read and edit files",
    "Uses a callback style",
    "Special variables __dirname and __filename"
];

const code = `
const fs = require("fs");
console.log(__dirname + "/test.txt");
fs.readFile(__dirname + "/test.txt", "utf-8", (err, data) => {
    console.log(data)
});

const content = "I want to write a file!";
fs.writeFile(__dirname + "/myFile.txt", content, (err, res) => {
    console.log("File writing complete")
})
`.trim();

export function NodeFileOps({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="File Operations" context={context} Content={
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