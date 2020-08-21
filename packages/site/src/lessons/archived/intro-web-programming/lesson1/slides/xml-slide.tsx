import { makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles({
    code: {
        fontSize: "1.25em"
    }
})

const xmlExample = `
<Book isbn=”9788580410631”>
    <Title>The Name of the Wind</Title>
    <Author>
        <FirstName>Patrick</FirstName>
        <LastName>Rothfuss</LastName>
    </Author>
</Book>
`
export function XMLSlide({ context }: Props) {
    const classes = useStyles()
    return (
        <ContentSlide Title="XML" context={context} Content={
            <CodeBlock language="xml" code={ xmlExample } className={ classes.code } />
        } />
    )
}

interface Props {
    context: PresentationContext
}