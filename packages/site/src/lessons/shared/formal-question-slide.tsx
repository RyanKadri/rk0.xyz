import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { titleDecorator } from "../../../../presenter-core/src/services/style-chunks";
import { PresentationContext } from "../../../../presenter-core/src/services/types";
import { PageNumber } from "../../../../presenter-core/src/slides/components/page-number";

export function generateQuestionSlide(question: string) {
  return function _QuestionSlide({ context }: { context: PresentationContext }) {
    return <QuestionSlide context={context} question={question} />;
  };
}

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      padding: 48,
    },
    titleContainer: {
      marginTop: "auto",
      marginLeft: 40,
      ...titleDecorator(theme),
    },
  })
);

export function QuestionSlide({ question, context }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h2" color="inherit">
          {question}
        </Typography>
      </div>
      <PageNumber context={context} />
    </div>
  );
}

interface Props {
  question: string;
  context: PresentationContext;
}
