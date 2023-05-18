import { createStyles, makeStyles } from "@mui/styles";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(
  createStyles({
    protocol: {
      color: "red",
    },
    domainName: {
      color: "blue",
    },
    port: {
      color: "green",
    },
    path: {
      color: "purple",
    },
    query: {
      color: "orange",
    },
    url: {
      fontSize: "1.5rem",
      marginTop: 16,
      display: "inline-block",
    },
    partList: {
      fontSize: "1.25rem",
    },
  })
);

export function UrlParts({ context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title="URL Anatomy"
      context={context}
      Content={
        <>
          <span className={classes.url}>
            <span className={classes.protocol}>https</span>://
            <span className={classes.domainName}>spy-notes-api.rk0.xyz</span>:<span className={classes.port}>443</span>
            <span className={classes.path}>/users/abc123/notes</span>?
            <span className={classes.query}>page=1&amp;limit=10</span>
          </span>
          <ul className={classes.partList}>
            <li>
              <b className={classes.protocol}>Protocol: </b>
              What communication method the server will use to talk to the client
            </li>
            <li>
              <b className={classes.domainName}>Domain Name: </b>
              What physical(ish) server to talk to
            </li>
            <li>
              <b className={classes.port}>Port: </b>
              What service on the physical(ish) server to talk to
            </li>
            <li>
              <b className={classes.path}>Path: </b>
              What resource(s) on the server to interact with (not necessarily a file)
            </li>
            <li>
              <b className={classes.query}>Query: </b>
              Other information about the request / resource(s)
            </li>
          </ul>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
