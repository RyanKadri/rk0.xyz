import { Link as MaterialLink, createStyles, makeStyles } from "@mui/material";
import c from "classnames";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import classSite from "./class-site.png";

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

export function BrowserServerChat1({ context }: { context: PresentationContext }) {
  const classes = useStyles();

  return (
    <ContentSlide
      Title="The Web - Model 1"
      context={context}
      Content={
        <section className={c(classes.chatColumn)}>
          <div className={c(classes.message, classes.browserMessage)}>
            <header>Browser</header>
            Hi <MaterialLink href="https://rk0.xyz">https://rk0.xyz</MaterialLink>. Could you please tell me how to
            display your web page?
          </div>
          <div className={c(classes.message, classes.serverMessage)}>
            <header>Server</header>
            Display this image:
            <img src={classSite.src} alt="A screenshot of the class site" className={classes.screenshot} />
          </div>
          <div className={c(classes.message, classes.serverMessage)}>
            <header>Server</header>
            <p>Pixel 1 is teal, Pixel 2 is teal, ... Pixel 12,400 is teal...</p>
          </div>
        </section>
      }
    />
  );
}
