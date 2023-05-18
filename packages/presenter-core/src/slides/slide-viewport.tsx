import { Paper } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Head from "next/head";
import { ComponentType, useRef } from "react";
import { CustomTheme } from "../../../site/src/theme";
import { PresentationContext } from "../services/types";
import { useComponentSize } from "../services/use-component-size";

const canonicalHeight = 918;
const canonicalWidth = (canonicalHeight * 16) / 9;

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    viewportPaper: {
      borderRadius: 0,
      transformOrigin: "center",
      overflow: "hidden",
    },
    viewportContainer: {
      width: "100%",
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.default,
    },
  })
);

export function SlideViewport({ Slide, context }: Props) {
  const classes = useStyles();
  const viewport = useRef<HTMLDivElement>(null);
  const viewportSize = useComponentSize(viewport);

  const horizScale = viewportSize.width / canonicalWidth;
  const vertScale = viewportSize.height / canonicalHeight;
  const scale = Math.min(horizScale, vertScale);

  const style = {
    height: canonicalHeight,
    minHeight: canonicalHeight,
    maxHeight: canonicalHeight,

    width: canonicalWidth,
    minWidth: canonicalWidth,
    maxWidth: canonicalWidth,
    transform: `scale(${scale})`,
  };

  return (
    <div className={`${classes.viewportContainer}`} ref={viewport}>
      <Head>
        {/* Dumb hack for noscript */}
        <style dangerouslySetInnerHTML={{ __html: `html { font-size: 36px; }` }} />
      </Head>
      <Paper className={classes.viewportPaper} elevation={5} style={style}>
        <Slide context={context} />
      </Paper>
    </div>
  );
}

interface Props {
  Slide: ComponentType<{ context: PresentationContext }>;
  context: PresentationContext;
}
