
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const slideItems = [
    "You can use JavaScript to make pages Dynamic",
    "Call APIs to get data and use JS to update the page"
];

const code = `
app.route("/user/:userId")
    .get((req, resp) => {
        const userData = database.lookup(req.params.userId);
        resp.send(userData);
    })
`.trim();

export function StaticPlusApi({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Static Content With APIs" context={context} Content={
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