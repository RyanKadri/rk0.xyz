import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PageNumber } from "../../components/page-number";
import { DefinitionSlideProps } from "../../slides";
import { useBaseStyles } from "./base-styles";

const useStyles = makeStyles({
  definitionBox: {
    width: "70%",
  },
});

export function DefinitionSlide({ context, Term, Definition }: DefinitionSlideProps) {
  const classes = useStyles();
  const baseClasses = useBaseStyles();
  return (
    <div className={baseClasses.centeredContentContainer}>
      <dl className={classes.definitionBox}>
        <dt>
          {typeof Term !== "string" ? (
            Term
          ) : (
            <Typography variant="h4" className={baseClasses.title} color="secondary">
              {Term}
            </Typography>
          )}
        </dt>
        <dd>
          {typeof Definition !== "string" ? (
            Definition
          ) : (
            <Typography variant="body1">{Definition}</Typography>
          )}
        </dd>
      </dl>
      <PageNumber context={context} />
    </div>
  );
}
