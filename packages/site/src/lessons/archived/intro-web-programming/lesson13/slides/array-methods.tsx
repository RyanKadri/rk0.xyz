
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
    "Arrays have a number of built-in methods",
    "map, filter, find, some, every are just some",
    "They take callbacks"
];

const code = `
[1,2,3,4].map(n => n * 2)
    .filter(n => n > 5);

[{ name: "Bob Jones" }, { name: "Alice Smith" }, { name: "Eve Cook" }]
    .find(person => person.name.endsWith("Smith"));


`.trim();

export function ArrayMethods({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Array Methods" context={context} Content={
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