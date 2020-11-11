
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slide-components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 28,
        userSelect: "text"
    }
}))

const code = `
function generateReport(data) {
    const report = processData(data);
    // ...
}

function processData(data) {
    const complexReport = calculateReport(data); // Pretend this exists
    complexReport.addtionalInfo = extractAdditionalInfo(data);
    return complexReport;
}

function extractAddtionalInfo(data) {
    return library.extractAdditionalInfo(data); // What happens if this fails?
}
`.trim();

export function TryCatchNoHandling({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="No Error Handling" context={context} Content={
            <>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}