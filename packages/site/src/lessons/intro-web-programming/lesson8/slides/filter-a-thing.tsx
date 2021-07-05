
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    }
}))

const code = synJS`
function removeEvents(numbers) {
    const result = [];
    for(const num of numbers) {
        if(num % 2 !== 0) {
            result.push(num);
        }
    }
    return result;
}

function cancelJanice(people) {
    const result = [];
    for(const person of people) {
        if(person.includes("Janice")) {
            result.push(person);
        }
    }
    return result;
}
`

export function FilterThings({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Find a Thing" context={context} Content={
            <CodeBlock code={ code } className={ classes.code } />
        } />
    );
}

interface Props {
    context: PresentationContext
}