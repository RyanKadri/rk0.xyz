import { makeStyles } from "@mui/styles";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles({
  container: {
    display: "grid",
    margin: "32px 0px",
    gridTemplateAreas: "'status' 'header' 'body'",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "70px 175px 420px",
    "& > *": {
      border: "solid 1px grey",
      margin: 0,
      padding: 16,
      display: "flex",
      flexDirection: "row",
    },
    "& dt": {
      fontWeight: 500,
    },
    "& table, & td, & th": {
      border: "solid 2px black",
      borderCollapse: "collapse",
      padding: 4,
    },
    "& pre": {
      margin: 0,
    },
  },
  statusCode: {
    gridArea: "status",
  },
  headers: {
    gridArea: "header",
  },
  body: {
    gridArea: "body",
  },
});

export function ResponseTemplate({ context }: Props) {
  const classes = useStyles();
  const responseBody = `
{
    "title": "My Note",
    "note": "This is a note",
    "tags": ["boring", "note"],
    "noteId": "da45f426-3e4e-4faf-95c5-ec02490bbe7d",
    "created": 1605037559804
}    
    `.trim();

  return (
    <ContentSlide
      Title="HTTP Response"
      context={context}
      Content={
        <div className={classes.container}>
          <dl className={classes.statusCode}>
            <dt>Status Code</dt>
            <dd>200 (OK)</dd>
          </dl>
          <dl className={classes.headers}>
            <dt>Headers</dt>
            <dd>
              <table>
                <thead>
                  <tr>
                    <th>Header</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Content-Type</td>
                    <td>application/json; charset=utf-8</td>
                  </tr>
                  <tr>
                    <td>Access-Control-Allow-Origin</td>
                    <td>*</td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
          <dl className={classes.body}>
            <dt>Body</dt>
            <dd>
              <pre>
                <code>{responseBody}</code>
              </pre>
            </dd>
          </dl>
        </div>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
