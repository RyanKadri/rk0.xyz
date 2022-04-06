import { Typography } from "@material-ui/core";
import c from "classnames";
import React from "react";
import { PageNumber } from "../../components/page-number";
import { CenterMessageSlideProps } from "../../slides";
import { useBaseStyles } from "./base-styles";

export function CenterMessageSlide({ context, Message }: CenterMessageSlideProps) {
  const baseClasses = useBaseStyles();
  return (
    <div className={c(baseClasses.centeredContentContainer)}>
      {typeof Message !== "string" ? (
        Message
      ) : (
        <Typography component="p" className={baseClasses.title}>
          {Message}
        </Typography>
      )}
      <PageNumber context={context} />
    </div>
  );
}
