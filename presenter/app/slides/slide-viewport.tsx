import { createStyles, Paper, WithStyles, withStyles } from "@material-ui/core";
import React, { ComponentType, useRef } from "react";
import { PresentationContext } from "../services/types";
import { useComponentSize } from "../services/use-component-size";

const canonicalHeight = 918;
const canonicalWidth = canonicalHeight * 16 / 9;

const styles = createStyles({
    viewportPaper: {
        borderRadius: 0,
        transformOrigin: "center"
    },
    viewportContainer: {
        height: "calc(100vh - 64px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#999",
        "&.fullscreen": {
            height: "100vh",
            backgroundColor: "#444"
        },
    }
})

const _SlideViewport = ({ Slide, context, isFullscreen, classes }: Props) => {
    const viewport = useRef<HTMLDivElement>(null);
    const viewportSize = useComponentSize(viewport);

    const horizScale = viewportSize.width / canonicalWidth;
    const vertScale = viewportSize.height / canonicalHeight;
    const scale = Math.min(horizScale, vertScale);

    const style = {
        height: canonicalHeight,
        width: canonicalWidth,
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

export const SlideViewport = withStyles(styles)(_SlideViewport)

interface Props extends WithStyles<typeof styles> {
    Slide: ComponentType<{ context: PresentationContext}>;
    context: PresentationContext;
    isFullscreen: boolean;
}