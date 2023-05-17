import { createStyles, makeStyles, Theme, Typography } from "@mui/material";
import c from "classnames";
import { titleDecorator } from "../../../services/style-chunks";
import { PageNumber } from "../../components/page-number";
import { TitleSlideProps } from "../../slides";
import { useBaseStyles } from "../blank/base-styles";

const containerPadding = 128;
const subTitleSpacing = containerPadding / 2;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: containerPadding,
    },
    titleContainer: {
      marginTop: "auto",
      ...titleDecorator(theme),
    },
    subtitleContainer: {
      marginTop: subTitleSpacing,
    },
  })
);

export function TitleSlide({ Title, Subtitle, context }: TitleSlideProps) {
  const classes = useStyles();
  const baseClasses = useBaseStyles();
  return (
    <div className={c(baseClasses.container, classes.container)}>
      <div className={classes.titleContainer}>
        {typeof Title !== "string" ? (
          Title
        ) : (
          <Typography variant="h3" component="h1" className={baseClasses.titleSlideTitle}>
            {Title}
          </Typography>
        )}
      </div>
      <div className={classes.subtitleContainer}>
        {typeof Subtitle !== "string" ? (
          Subtitle
        ) : (
          <Typography variant="h4" component="h2" className={baseClasses.subTitle}>
            {Subtitle}
          </Typography>
        )}
      </div>
      <PageNumber context={context} />
    </div>
  );
}
