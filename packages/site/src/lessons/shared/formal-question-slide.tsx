import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../presenter-core/src/services/types";
import { PageNumber } from "../../../../presenter-core/src/slide-components/page-number";

export function generateQuestionSlide(question: string) {
    return function ({ context }: { context: PresentationContext }) {
        return (
            <QuestionSlide context={ context } question={ question } />
        )
    }
}

const useStyles = makeStyles(createStyles({
    container: {
        padding: 48
    }
}))

export function QuestionSlide({ question, context }: Props) {
    const classes = useStyles();
    return ( 
        <div className={ classes.container }>
            <Typography variant="h2">{ question }</Typography>
            <PageNumber context={ context } />
        </div>
    )
}

interface Props {
    question: string;
    context: PresentationContext
}