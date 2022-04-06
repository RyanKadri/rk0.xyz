import { Link, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext, Reference } from "../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles({
  referenceList: {
    "& li": {
      marginBottom: 16,
    },
  },
  noteCaption: {
    display: "block",
    marginLeft: 64,
    marginTop: 8,
  },
});

export function ReferencesSlide({ Title = "References", references, context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title={Title}
      context={context}
      Content={
        <ul className={classes.referenceList}>
          {references.map(link => (
            <li key={link.url}>
              <Link href={link.url} target="_blank">
                {link.label}
              </Link>
              {link.note && (
                <Typography variant="caption" className={classes.noteCaption}>
                  {link.note}
                </Typography>
              )}
            </li>
          ))}
        </ul>
      }
    />
  );
}

export function generateReferencesSlide(references: Reference[], title = "References") {
  return function ({ context }: { context: PresentationContext }) {
    return <ReferencesSlide Title={title} references={references} context={context} />;
  };
}

interface Props {
  Title?: string | ReactElement;
  references: Reference[];
  context: PresentationContext;
}
