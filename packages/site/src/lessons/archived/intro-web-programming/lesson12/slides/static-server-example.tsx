
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
    "Static Content Servers give users HTML / CSS / JavaScript",
    "They are usually configured. Not coded"
];

const code = `
app.route("*")
    .get((req, resp) => {
        fs.readFile("." + req.path, "utf-8", (err, data) => {
            resp.header("Content-Type", "text/html")
            resp.send(data);
        })
    });
`.trim();

export function StaticServer({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Static Server" context={context} Content={
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