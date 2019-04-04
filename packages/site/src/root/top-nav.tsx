import { AppBar, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import React from "react";
import { Link } from "react-router-dom";
import { AppBarSettings } from "./app-bar-context";
import { ViewportInfo } from "./viewport-context";

const styles = createStyles({
    title: { 
        marginRight: 16
    },
    customActionContainer: {
        marginLeft: "auto"
    },
    homeIcon: {
        marginRight: 8,
        color: "white"
    },
    link: {
        color: "white",
        padding: "0.5em",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)"
        }
    },
    navBar: {
        overflowX: "auto"
    }
})

const links = [
    { display: "Resume", link: "https://resume.rk0.xyz", external: true },
    { display: "Classes", link: "/web-design-class/" },
    { display: "Games", link: "/games/"}
];

const _RootNav = ({ classes, settings, viewport }: Props) => {
    return (
        viewport.isFullscreen 
            ? null
            : ( <AppBar position="static" className={ classes.navBar }>
                    <Toolbar>
                        <IconButton component={() => 
                            <Link to="/" className={classes.homeIcon}><Home /></Link>
                        } color="inherit" />
                        <Typography variant="h6" color="inherit" className={ classes.title }>
                            { settings.title }
                        </Typography>
                        {
                            links.map(link =>
                                link.external
                                    ? <a href={link.link} className={classes.link} key={link.link} target="_blank">
                                        {link.display}
                                      </a>
                                    : <Link to={link.link} className={classes.link} key={link.link}>
                                            {link.display}
                                      </Link>
                            )
                        }
                        <div className={ classes.customActionContainer }>
                            { settings.customAction }
                        </div>
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