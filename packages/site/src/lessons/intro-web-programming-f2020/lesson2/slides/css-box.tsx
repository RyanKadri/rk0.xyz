import { createStyles, makeStyles } from "@mui/styles";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import img from "../assets/box-model-alt-small.png";

const useStyles = makeStyles(
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
  })
);
interface Props {
  context: PresentationContext;
}

export function CssBox({ context }: Props) {
  const classes = useStyles();
  return (
    <ContentSlide
      Title="CSS Fundamentals: Box Model"
      context={context}
      Content={
        <div className={classes.container}>
          <img src={img.src} />
        </div>
      }
    />
  );
}
