
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        position: "absolute",
        right: 32,
        top: 266,
        fontSize: 32,
        userSelect: "text"
    }
}))

const slideItems = [
    "Variables Store Data",
    { text: "Data has a type", children: [
        "Strings",
        "Numbers",
        "Booleans",
        "Functions",
        "Objects",
        "null / undefined",
        "etc"
    ]}
];

const code = `
const str = "Test";
let num = 123;
const bool = true;
const obj = 
    { firstName: "Ryan", lastName: "Kadri" };
const nothing = null;
`.trim();

export function VariablesExamples({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Variables" context={context} Content={
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