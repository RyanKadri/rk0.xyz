
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const items = [
    "fetch lets you make requests to a server",
    "Lets you specify URL, method, request body, headers, etc.",
    'Gives back the response in terms of a "Promise"',
    "It is a low-level function so you have to manually parse the request"
];

const code = synJS`
fetch("https://some-url.com")
    .then(response => { return response.json() })
    .then(response => { console.log(response) })
`

export function FetchExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="fetch" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}