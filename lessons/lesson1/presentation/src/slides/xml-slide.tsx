import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter/app/services/types";
import { CodeBlock } from "../../../../../presenter/app/slide-components/code-block";
import { ContentSlide } from "../../../../../presenter/app/slides/content-slide";

const styles = createStyles({
    
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
const _XMLSlide = ({ context }: Props) => {
    return (
        <ContentSlide Title="XML" context={context} Content={
            <CodeBlock language="xml" code={ xmlExample } />
        } />
    )
}

export const XMLSlide = withStyles(styles)(_XMLSlide)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}