import { createStyles, makeStyles } from "@material-ui/core";
import { PresentationContext } from "packages/presenter-core/src/services/types";
import React from "react";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "'Ubuntu Mono', monospace;",
      paddingTop: 32,
    },
    article: {
      color: "hsla(120, 50%, 50%, 1)",
      "& section": {
        paddingLeft: 32,
        margin: 8,
      },
    },
    section1: {
      color: "hsla(0, 50%, 50%, 1)",
    },
    section2: {
      color: theme.palette.type === "dark" ? "yellow" : "purple",
    },
    sectionContent: {
      color: theme.palette.text.primary,
      "& ul": {
        margin: 0,
      },
      "& p": {
        margin: 0,
      },
    },
  })
);

export function OutlineToHtml({ context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title="HTML"
      context={context}
      Content={
        <div className={classes.container}>
          <section className={classes.article}>
            Article
            <section className={classes.section1}>
              Section
              <section className={classes.sectionContent}>
                <ul>
                  <li>Header</li>
                  <li>Paragraph</li>
                  <li>Paragraph</li>
                </ul>
              </section>
            </section>
            <section className={classes.section2}>
              Section
              <section className={classes.sectionContent}>
                <ul>
                  <li>Header</li>
                  <li>...</li>
                </ul>
              </section>
            </section>
          </section>
          <section className={classes.article}>
            {"<article>"}
            <section className={classes.section1}>
              {"<section>"}
              <section className={classes.sectionContent}>
                <p>{"<header>...</header>"}</p>
                <p>{"<p>...</p>"}</p>
                <p>{"<p>...</p>"}</p>
              </section>
              {"</section>"}
            </section>
            <section className={classes.section2}>
              {"<section>"}
              <section className={classes.sectionContent}>
                <p>{"<header>...</header>"}</p>
                <p>...</p>
              </section>
              {"</section>"}
            </section>
            {"</article>"}
          </section>
        </div>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
