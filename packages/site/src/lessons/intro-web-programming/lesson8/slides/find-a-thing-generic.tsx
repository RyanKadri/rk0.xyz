
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 22,
        userSelect: "text"
    }
}));

const code = synJS`
function findAThing(myArray, decisionPoint) {
    for(const num of numbers) {
        if(decisionPoint(num)) {
            return num;
        }
    }
}

function isLessThan10(number) {
    return number < 10;
}

function startsWithS(name) {
    return name.startsWith("S")
}

findAThing([1,2,5,7,11,14], isLessThan10);
findAThing(["Adelaide", "Nathan", "Sky", "Sarah"], startsWithS);
`;

export function FindAThingGeneric({ context }: Props) {
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