import { Paper, styled } from "@mui/material";
import Head from "next/head";
import { ComponentType, useRef } from "react";
import { PresentationContext } from "../services/types";
import { useComponentSize } from "../services/use-component-size";

const canonicalHeight = 918;
const canonicalWidth = (canonicalHeight * 16) / 9;

const ViewportContainer = styled("div")(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  "& .paper": {
    borderRadius: 0,
    transformOrigin: "center",
    overflow: "hidden",
  },
}));

export function SlideViewport({ Slide, context }: Props) {
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
    <ViewportContainer ref={viewport}>
      <Head>
        {/* Dumb hack for noscript */}
        <style dangerouslySetInnerHTML={{ __html: `html { font-size: 36px; }` }} />
      </Head>
      <Paper className={"paper"} elevation={5} style={style}>
        <Slide context={context} />
      </Paper>
    </ViewportContainer>
  );
}

interface Props {
  Slide: ComponentType<{ context: PresentationContext }>;
  context: PresentationContext;
}
