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
            
        </div>
        </>
    )
}

interface Props {

}