import { createStyles, Link, makeStyles } from "@mui/material";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "grid",
      margin: "32px 0px",
      gridTemplateAreas: "'method url' 'header header' 'body body'",
      gridTemplateColumns: "1fr 4fr",
      gridTemplateRows: "70px 175px 420px",
      fontSize: "0.7rem",
      "& > dl": {
        border: `solid 4px ${theme.palette.text.secondary}`,
        margin: 0,
        padding: 16,
      },
      "& > dl:not(:last-of-type)": {
        borderBottom: `none`,
        margin: 0,
        padding: 16,
      },
      "& dt": {
        fontWeight: 500,
      },
      "& table, & td, & th": {
        border: `solid 2px ${theme.palette.text.secondary}`,
        borderCollapse: "collapse",
        padding: 8,
      },
      "& pre": {
        margin: 0,
      },
    },
    method: {
      gridArea: "method",
      display: "flex",
      flexDirection: "row",
    },
    url: {
      gridArea: "url",
      display: "flex",
      flexDirection: "row",
    },
    headers: {
      gridArea: "header",
      display: "flex",
      flexDirection: "row",
    },
    body: {
      gridArea: "body",
      display: "block",
      "& dd": {
        margin: 0,
        marginTop: 16,
      },
    },
  })
);

interface Header {
  name: string;
  value: string;
}

interface Props {
  method: string | null;
  url: string | null;
  headers: Header[] | null;
  body: SyntaxHighlightedBlock | null;
}
export function RequestVisualizer({ method, url, headers, body }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <dl className={classes.method}>
        <dt>Method</dt>
        <dd>{method}</dd>
      </dl>
      <dl className={classes.url}>
        <dt>URL</dt>
        <dd>{url && <Link href={url}>{url}</Link>}</dd>
      </dl>
      <dl className={classes.headers}>
        <dt>Headers</dt>
        <dd>
          {headers && (
            <table>
              <tbody>
                {headers.map(header => (
                  <tr key={header.name + header.value}>
                    <td>{header.name}</td>
                    <td>{header.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </dd>
      </dl>
      <dl className={classes.body}>
        <dt>Body</dt>
        <dd>{body && <CodeBlock code={body} />}</dd>
      </dl>
    </div>
  );
}
