
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    },
    arrayExample: {
        display: "flex",
        border: "solid 4px black",
        marginTop: 16,
        alignSelf: "flex-start",
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
    "Positions start at 0"
];

const code = synJS`
const myFavoriteNumbers = [1,2,3];
const names = ["Alice", "Bob", "Eve"];
const mixed = ["Alice", 2, false];

for(const element of mixed) {
    console.log(element);
}

console.log(mixed[0]);
mixed[3] = "something";
`

export function ArraysExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Arrays" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
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