
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    }
}))

const slideItems = [
    "Objects can store related information about a thing",
    "Properties can be added (and removed) over time",
    "Objects can also be a lookup table",
    "Be careful with storing in multiple places"
];

const code = `
const ryan = { name: "Ryan", age: 26, job: "Developer", id: "abc123" };
person.age ++;
delete person.name;
person.firstName = "Ryan";
person.lastName = "Kadri";

const employees = {};
employees[ryan.id] = ryan;
employees["abc123"] === ryan;
`.trim();

export function Objects({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Objects" context={context} Content={
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