import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import Fullscreen from "@material-ui/icons/Fullscreen";
import FullscreenExit from "@material-ui/icons/FullscreenExit";
import Home from "@material-ui/icons/Home";
import React from "react";
import { Link } from "react-router-dom";

const styles = createStyles({
    title: { 
        flexGrow: 1
    },
    link: {
        color: "white",
        marginRight: 8
    }
})

function _PresentationControls({ fullScreen, onFullScreen, title, classes }: Props) {
    return (
        fullScreen 
            ? null
            : ( <AppBar position="static">
                    <Toolbar>
                        <IconButton component={() => 
                            <Link to="/presentations" className={classes.link}><Home /></Link>
                        } color="inherit" />
                        <Typography variant="h6" color="inherit" className={ classes.title }>
                            {title}
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
    );
}

interface Props extends WithStyles<typeof styles>  {
    fullScreen: boolean;
    onFullScreen(fullscreen: boolean): void;
    title: string;
}

export const PresentationControls = withStyles(styles)(_PresentationControls);