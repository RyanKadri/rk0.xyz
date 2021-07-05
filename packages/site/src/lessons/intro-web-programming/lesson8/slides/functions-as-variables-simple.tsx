
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Functions can be labeled by variables like any other data",
    "Once assigned to a variable, the variable name can be used to call the function",
];

const code = synJS`
function add(a, b) {
    return a + b;
}

const myRenamedFunction = add;
myRenamedFunction(1,2) // Returns 3
`

export function FunctionsAsVariablesSimple({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Functions" context={context} Content={
            <>
                <InfoList items={ slideItems } />
                <CodeBlock code={ code } className={ classes.code } />
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}