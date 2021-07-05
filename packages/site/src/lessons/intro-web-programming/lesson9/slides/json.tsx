
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
    "JSON is another way (along with XML) for formatting data",
    "JSON is (probably) the most common way to talk to servers these days",
    "Based on JavaScript object definitions",
    "You can create a JavaScript object from JSON easily",
    "Commonly -- Send a request with some JSON data and get JSON data in response"
];

const code = synJS`json
{
    "name": "Ryan",
    "age": 28,
    "isProfessor": true
}
`

export function JSONExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="JSON" context={context} Content={
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