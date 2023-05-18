import { createStyles, makeStyles } from "@mui/styles";
import { EmbedSlideProps } from "../../slides";

const useStyles = makeStyles(
  createStyles({
    container: {
      padding: "0",
    },
  })
);

export function FullSlide({ Content }: EmbedSlideProps) {
  const classes = useStyles();
  return <div className={classes.container}>{Content}</div>;
}
