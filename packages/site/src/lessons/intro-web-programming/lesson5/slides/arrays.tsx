
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    },
    arrayExample: {
        fontSize: 32,
        display: "flex",
        position: "absolute",
        border: "solid 4px black",
        "& div": {
            padding: 16,
            "&:not(:last-child)": {
                borderRight: "solid 4px black"
            }
        }
    }
}))

const slideItems = [
    "Arrays hold ordered lists of values",
    "Adding elements to an array is easy",
    "Positions start at 0"
];

const code = `
const myFavoriteNumbers = [1,2,3];
const names = ["Alice", "Bob", "Eve"];
const mixed = ["Alice", 2, false];

for(const element of mixed) {
    console.log(element);
}

console.log(mixed[0]);
mixed[3] = "something";
`.trim();

export function ArraysExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Arrays" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
                <div className={ classes.arrayExample }>
                    <div>"Alice"</div><div>2</div><div>false</div><div>"something"</div>
                </div>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}