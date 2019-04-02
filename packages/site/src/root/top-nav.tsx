import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import React from "react";
import { Link } from "react-router-dom";
import { AppBarSettings } from "./app-bar-context";
import { ViewportInfo } from "./viewport-context";

const styles = createStyles({
    title: { 
        flexGrow: 1
    },
    link: {
        color: "white",
        marginRight: 8
    }
})

const links = [
    { display: "Classes", link: "/web-design-class/" },
    { display: "Games", link: "/games/"}
]

const _RootNav = ({ classes, settings, viewport }: Props) => {
    return (
        viewport.isFullscreen 
            ? null
            : ( <AppBar position="static">
                    <Toolbar>
                        <IconButton component={() => 
                            <Link to="/" className={classes.link}><Home /></Link>
                        } color="inherit" />
                        <Typography variant="h6" color="inherit" className={ classes.title }>
                            { settings.title }
                        </Typography>
                        {
                            links.map(link => 
                                <Link to={link.link} className={classes.link} key={link.link}>
                                    {link.display}
                                </Link>
                            )
                        }
                        { settings.customAction }
                    </Toolbar>
                </AppBar>
            )
    )
}

export const RootNav = withStyles(styles)(_RootNav)

interface Props extends WithStyles<typeof styles> {
    settings: AppBarSettings;
    viewport: ViewportInfo;
}