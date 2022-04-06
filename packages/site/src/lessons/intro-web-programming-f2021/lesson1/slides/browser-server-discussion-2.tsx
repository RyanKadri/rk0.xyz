import { createStyles, Link as MaterialLink, makeStyles } from "@material-ui/core";
import c from "classnames";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(theme =>
  createStyles({
    chatColumn: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "90%",
      gap: "0.25rem",
    },
    message: {
      padding: "0.25rem 0.5rem 0.5rem 0.5rem",
      border: `solid 4px ${theme.palette.secondary.dark}`,
      borderRadius: "1rem",
      fontSize: "0.85rem",
      width: "60%",
      "& header": {
        textAlign: "right",
        fontSize: "0.65rem",
        marginBottom: "0.15rem",
        color: theme.palette.primary.light,
      },
      "& p": {
        margin: 0,
      },
    },
    browserMessage: {
      alignSelf: "flex-start",
      borderBottomRightRadius: 0,
    },
    serverMessage: {
      alignSelf: "flex-end",
      borderBottomLeftRadius: 0,
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.5rem",
    },
    screenshot: {
      width: 500,
      display: "block",
      borderRadius: "0.5rem",
      marginTop: "0.25rem",
    },
  })
);

export function BrowserServerChat2({ context }: { context: PresentationContext }) {
  const classes = useStyles();

  return (
    <ContentSlide
      Title="The Web - Model 2"
      context={context}
      Content={
        <section className={c(classes.chatColumn)}>
          <div className={c(classes.message, classes.browserMessage)}>
            <header>Browser</header>
            Hi <MaterialLink href="https://rk0.xyz">https://rk0.xyz</MaterialLink>. Could you please
            tell me how to display your web page?
          </div>
          <div className={c(classes.message, classes.serverMessage)}>
            <header>Server</header>
            Ok. First draw a rectangle starting at point 0,0. Make it 1600 pixels wide and 64 pixels
            tall. Color it teal. Now draw the text "Courses" with its top left corner at (32, 16)...
          </div>
          <div className={c(classes.message, classes.serverMessage)}>
            <header>Server</header>
            <p>Translation:</p>
            <pre>
              <code>
                Rect(0,0,1600,900,TEAL),{"\n"}
                Text(32,16,"Courses",WHITE),{"\n"}
                ...
              </code>
            </pre>
          </div>
        </section>
      }
    />
  );
}
