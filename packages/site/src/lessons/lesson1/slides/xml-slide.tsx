import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { CodeBlock, ContentSlide, PresentationContext } from "../../../../../presenter-core/src";

const styles = createStyles({
    code: {
        fontSize: "2.5em"
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
const _XMLSlide = ({ context, classes }: Props) => {
    return (
        <ContentSlide Title="XML" context={context} Content={
            <CodeBlock language="xml" code={ xmlExample } className={ classes.code } />
        } />
    )
}

export const XMLSlide = withStyles(styles)(_XMLSlide)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}