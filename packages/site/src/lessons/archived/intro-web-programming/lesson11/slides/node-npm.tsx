
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "NPM was originally made for Node - Not browsers",
    "More natural to use in local code"
];

const code = `
const axios = require("axios");
axios.get("https://icanhazdadjoke.com/", { 
    headers: { "Accept": "application/json" }
}).then(resp => 
    console.log(resp.data)
)
`.trim();

export function NodeNpm({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Using Libraries" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}