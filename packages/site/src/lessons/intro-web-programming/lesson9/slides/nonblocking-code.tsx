
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 32,
        userSelect: "text"
    }
}));

const code = synJS`
function processFile() {
    const fileData = readFile("budget.txt", checkExpenses);
}

function checkExpenses() {
    const largestExpense = determineLargestExpense(fileData);
    updateNetwork(largestExpense, printSuccess);
}

function printSuccess() {
    console.log("Done processing.")
}
`

export function NonBlockingMoreExamples({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="More Non-Blocking Code" context={context} Content={
            <CodeBlock code={ code } className={ classes.code }></CodeBlock>
        } />
    );
}

interface Props {
    context: PresentationContext
}