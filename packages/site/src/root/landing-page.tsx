import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { useAppBar } from "../common/use-app-bar";

const useStyles = makeStyles((theme: Theme) => createStyles({
    about: {

    },
    links: {
        
    },
    container: {
        padding: 16,
        "& section": {
            marginBottom: 16
        }
    },
    splash: {
        backgroundColor: theme.palette.primary.light,
        padding: 16,
        display: "flex",
        justifyContent: "center",
        color: "white"
    }
}))

export function LandingPage({ }: Props) {
    const classes = useStyles();
    useAppBar("");
    return (
        <>
        <header className={classes.splash}>
            <Typography variant="h4" color="inherit">Ryan Kadri</Typography>
        </header>
        <div className={ classes.container }>
            <section className={ classes.about }>
                Hi. I'm Ryan Kadri. I am a full-time software developer. I like working with web technologies and always
                enjoy learning new things.
            </section>
            <section className={ classes.links }>
                I work on proprietary software for my full-time job but most of my side projects end up on Github eventually.
                Check me out at <a href="https://github.com/RyanKadri">github.com/RyanKadri</a>
            </section>
        </div>
        </>
    )
}

interface Props {

}