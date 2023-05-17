import { createStyles, makeStyles, Theme, Typography } from "@mui/material";
import c from "classnames";
import { titleDecorator } from "../../../services/style-chunks";
import { InfoList } from "../../components/info-list";
import { PageNumber } from "../../components/page-number";
import { ContentSlideProps } from "../../slides";
import { useBaseStyles } from "../blank/base-styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "48px 128px 0px 128px",
      minHeight: "100%",
      "& code": {
        fontFamily: "monospace",
        backgroundColor: theme.palette.type === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)",
        padding: "2px 4px",
        borderRadius: 4,
        color: theme.palette.secondary.dark,
      },
    },
    titleContainer: {
      ...titleDecorator(theme),
    },
  })
);

export function ContentSlide({ Title, Content, context, classes = {}, options = {} }: ContentSlideProps) {
  const ownClasses = useStyles();
  const baseClasses = useBaseStyles();
  return (
    <div className={c(baseClasses.container, ownClasses.container, classes.viewport)}>
      <div className={ownClasses.titleContainer}>
        {typeof Title !== "string" ? (
          Title
        ) : (
          <Typography variant="h4" component="h1" className={baseClasses.title}>
            {Title}
          </Typography>
        )}
      </div>
      {!Array.isArray(Content) ? (
        Content
      ) : (
        <InfoList items={Content} useOrderedLists={options.useOrderedLists ?? false} />
      )}
      <PageNumber context={context} />
    </div>
  );
}
