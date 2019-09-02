import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import React, { ComponentType, useRef } from "react";
import { PresentationContext } from "../services/types";
import { useComponentSize } from "../services/use-component-size";

const canonicalHeight = 918;
const canonicalWidth = canonicalHeight * 16 / 9;

const useStyles = makeStyles((theme: Theme) => createStyles({
    viewportPaper: {
        borderRadius: 0,
        transformOrigin: "center"
    },
    viewportContainer: {
        width: "100%",
        flexGrow: 1,
        maxHeight: `calc(100vh - ${theme.spacing(8)}px)`,
        height: `calc(100vh - ${theme.spacing(8)}px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#999",
        "&.fullscreen": {
            height: "100vh",
            backgroundColor: "#444"
        },
    }
}));

export function SlideViewport({ Slide, context, isFullscreen }: Props) {
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
        transform: `scale(${ scale })`
    };

    return (
        <div className={ `${classes.viewportContainer} ${isFullscreen ? 'fullscreen' : ""}` } ref={viewport}>
            <Paper className={ classes.viewportPaper } elevation={5} style={style}>
                <Slide context={ context } />
            </Paper>
        </div>
    )
}

interface Props {
    Slide: ComponentType<{ context: PresentationContext}>;
    context: PresentationContext;
    isFullscreen: boolean;
}