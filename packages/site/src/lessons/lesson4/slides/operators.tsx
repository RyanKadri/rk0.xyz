
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const slideItems = [
    "Operators let you transform values",
    "Operators work with 1-3 values",
];

const code = `
const a = 1;
const b = a + 2;
let c = a * 3 - b;
c++;
const d = "The answer is: " + c;
const e = true;
const f = !e;
const g = f ? a : b
const h = c > b
const i = { first: "Bob" };
const j = "last" in i;
`.trim();

export function Operators({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Operators" context={context} Content={
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