
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        userSelect: "text"
    }
}))

const info = [
    "Some asynchronous operations can fail (especially network operations)",
    <>Promises have a <code>.catch</code> method to handle errors</>,
    "This cannot be done in a normal try / catch block because the code has moved on"
]

const code = synJS`
fetch("https://some-site.com")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(e => console.error("Oh no! There was an error!"))
`

export function PromiseErrorHandling({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Promise Error Handling" context={context} Content={
            <>
                <InfoList items={ info }></InfoList>
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}