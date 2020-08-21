
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Functions are just like other data types",
    "They can be assigned, returned, and passed as parameters"
];

const code = `
function add(a, b) {
    return a+b;
}

function addOne() {
    return function(a) {
        return add(a,1);
    }
}

function doSomething(arg) {
    return arg(2);
}
`.trim();

export function FunctionsRedux({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Functions" context={context} Content={
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