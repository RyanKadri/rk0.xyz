
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "Whole functions can even be passed as parameters to or returned from other functions",
    "This is what happens in addEventListener"
];

const code = synJS`
function sayHello() {
    console.log("Hello")
}

function doSomethingTwice(something) {
    something();
    something();
}

doSomethingTwice(sayHello)
`

export function FunctionsAsVariablesPart2({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Functions" context={context} Content={
            <>
                <InfoList items={ slideItems } />
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}