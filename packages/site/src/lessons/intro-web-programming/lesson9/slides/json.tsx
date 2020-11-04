
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}))

const code = `{
    "name": "Ryan",
    "age": 28,
    "isProfessor": true
}`.trim();

const items = [
    "JSON is another way (along with XML) for formatting data",
    "JSON is (probably) the most common way to talk to servers these days",
    "Follows a simple format similar to normal JavaScript object (with slightly stricter quoting rules)"
];

export function JSONExample({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="JSON" context={context} Content={
            <>
                <InfoList items={ items } />
                <CodeBlock language="json" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}