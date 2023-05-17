import { makeStyles, Typography } from "@mui/material";
import c from "classnames";
import { PageNumber } from "../../components/page-number";
import { MediaSlideProps } from "../../slides";
import { useBaseStyles } from "./base-styles";

const useStyles = makeStyles({
  media: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "75%",
    width: "auto",
    maxWidth: "100%",
    "& img": {
      height: "100%",
    },
  },
  container: {
    padding: 32,
    alignItems: "center",
  },
  credit: {
    position: "absolute",
    bottom: 32,
    left: 32,
  },
});

export function MediaSlide({ context, Media, Title, Credit }: MediaSlideProps) {
  const classes = useStyles();
  const baseClasses = useBaseStyles();

  return (
    <div className={c(baseClasses.container, classes.container)}>
      {typeof Title !== "string" ? Title ?? null : <Typography className={baseClasses.title}>{Title}</Typography>}
      <div className={classes.media}>{Media}</div>
      {typeof Credit === "string" ? (
        <Typography className={classes.credit} variant="caption">
          {Credit}
        </Typography>
      ) : (
        <div className={classes.credit}>{Credit}</div>
      )}
      <PageNumber context={context} />
    </div>
  );
}
