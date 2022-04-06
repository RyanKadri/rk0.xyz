import { makeStyles } from "@material-ui/core";
import React from "react";
import { CodeBlock } from "../../components/code-block";
import { InfoList } from "../../components/info-list";
import { CodeSlideProps } from "../../slides";
import { ContentSlide } from "./content-slide";

const useStyles = makeStyles({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  codeBlock: {
    overflow: "auto",
    flexShrink: 1,
    fontSize: "26px",
  },
});

export function CodeSlide({ context, Title, bullets, code, options = {}, children }: CodeSlideProps) {
  const { codeFirst = false, codeBlock: codeBlockOptions } = options;

  const classes = useStyles();
  return (
    <ContentSlide
      Title={Title}
      context={context}
      Content={
        <div className={classes.contentContainer}>
          {codeFirst ? (
            <>
              <CodeBlock code={code} className={classes.codeBlock} options={codeBlockOptions} />
              <InfoList items={bullets} />
              {children}
            </>
          ) : (
            <>
              <InfoList items={bullets} />
              <CodeBlock code={code} className={classes.codeBlock} options={codeBlockOptions} />
              {children}
            </>
          )}
        </div>
      }
    />
  );
}
