import { createStyles, makeStyles } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(theme =>
  createStyles({
    contentCell: {
      border: `solid 4px ${theme.palette.text.secondary}`,
      width: "43%",
      height: "200px",
      verticalAlign: "top",
      padding: 16,
    },
    header: {
      textAlign: "center",
    },
  })
);

export function AsyncTasks({ context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title="Asynchronous Tasks"
      context={context}
      Content={
        <>
          <InfoList
            items={[
              <>
                <strong>Synchronous</strong> tasks require focus
              </>,
              <>
                <strong>Asynchronous</strong> tasks have idle time
              </>,
            ]}
          />
          <table>
            <thead>
              <tr>
                <td></td>
                <td className={classes.header}>Synchronous</td>
                <td className={classes.header}>Asynchronous</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Human</td>
                <td className={classes.contentCell}>
                  <ul>
                    <li>Writing</li>
                    <li>Drawing</li>
                    <li>Talking</li>
                  </ul>
                </td>
                <td className={classes.contentCell}>
                  <ul>
                    <li>Texting</li>
                    <li>Doing Laundry</li>
                    <li>Cooking</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Computer</td>
                <td className={classes.contentCell}>
                  <ul>
                    <li>Doing math</li>
                    <li>Re-rendering a web page</li>
                    <li>"Plain" JavaScript functions</li>
                  </ul>
                </td>
                <td className={classes.contentCell}>
                  <ul>
                    <li>Waiting on a timer</li>
                    <li>Making a network request</li>
                    <li>Responding to events</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
