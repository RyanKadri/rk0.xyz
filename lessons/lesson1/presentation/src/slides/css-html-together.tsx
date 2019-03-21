import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter/app/services/types";
import { CodeBlock } from "../../../../../presenter/app/slide-components/code-block";
import { ContentSlide } from "../../../../../presenter/app/slides/content-slide";

const styles = createStyles({
    container: {
    }
});

const cssExample = `
article p.special {
    color: blue;
    font-size: 24px;
}
`;

const htmlExample = `
<article>
  <p>This is not special</p>
  <p class=”special”>This is special!</p>
</article>
<p class=”special”>This is not special either :(</p>
`

const _CSSHTMLTogether = ({ classes, context }: Props) => (
    <ContentSlide Title="CSS" context={context} Content={
        <div className={classes.container}>
            <CodeBlock language="css" code={cssExample}/>
            <CodeBlock language="html" code={htmlExample}/>
        </div>
    } />
)

export const CSSHTMLTogether = withStyles(styles)(_CSSHTMLTogether)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}