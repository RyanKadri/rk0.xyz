import { Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import c from "classnames";
import { InfoList } from "../../components/info-list";
import { PageNumber } from "../../components/page-number";
import { ContentSlideProps } from "../../slides";
import { useBaseStyles } from "./base-styles";

const useStyles = makeStyles(_ =>
  createStyles({
    container: {
      padding: "48px 64px 0px 64px",
      minHeight: "100%",
    },
  })
);

export function ContentSlide({ Title, Content, context, classes = {}, options = {} }: ContentSlideProps) {
  const ownClasses = useStyles();
  const baseClasses = useBaseStyles();

  return (
    <div className={c(ownClasses.container, classes.viewport, baseClasses.container)}>
      <div>
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
