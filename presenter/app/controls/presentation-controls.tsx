import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import Fullscreen from "@material-ui/icons/Fullscreen";
import FullscreenExit from "@material-ui/icons/FullscreenExit";
import React from "react";

const styles = createStyles({
    title: {
        flexGrow: 1
    }
})

function _PresentationControls({ fullScreen, onFullScreen, classes }: Props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={ classes.title }>
                    Intro to Web Design
                </Typography>
                <IconButton onClick={ () => onFullScreen(!fullScreen) } color="inherit">
                    { fullScreen
                        ? <FullscreenExit />
                        : <Fullscreen />
                    }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

interface Props extends WithStyles<typeof styles>  {
    onFullScreen(fullscreen: boolean): void;
    fullScreen: boolean;
}

export const PresentationControls = withStyles(styles)(_PresentationControls);