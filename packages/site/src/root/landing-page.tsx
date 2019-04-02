import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { AppBarContext } from "./app-bar-context";

const styles = createStyles({
    about: {

    },
    links: {

    }
})

const _LandingPage = ({ classes }: Props) => {
    const appbar = useContext(AppBarContext);
    useEffect(() => {
        appbar.updateAppBar({ title: "Ryan Kadri", customAction: null })
    })
    return (
        <>
            <section className={ classes.about }>
                Hi. I'm Ryan Kadri. I am a full-time software developer. I like working with web technologies and always
                enjoy learning new things.
            </section>
            <section className={ classes.links }>
                I work on proprietary software for my full-time job but most of my side projects end up on Github eventually.
                Check me out at <a href="https://github.com/RyanKadri">github.com/RyanKadri</a>
            </section>
        </>
    )
}

export const LandingPage = withStyles(styles)(_LandingPage)

interface Props extends WithStyles<typeof styles> {

}