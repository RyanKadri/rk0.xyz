
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 22,
        userSelect: "text"
    }
}));

const code = synJS`
function findFirstGreaterThan10(numbers) {
    for(const num of numbers) {
        if(num > 10) {
            return num;
        }
    }
}

function findFirstStartsWithS(names) {
    for(const name of names) {
        if(name.startsWith("S")) {
            return name;
        }
    }
}

function findFirstPrime(numbers) {
    for(const num of numbers) {
        if(isPrime(num)) {
            return el;
        }
    }
}
`;

export function FindThing({ context }: Props) {
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