
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    `While loops run as long as something is "truthy"`,
];

const code = synJS`
let counter = 0;
while(counter < 5) {
    console.log(counter);
    counter ++;
}

let test = "blahh"
while(test) {
    // Runs forever
}
`;

export function WhileLoops({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="While Loops" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}