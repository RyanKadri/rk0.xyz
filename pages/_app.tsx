import { CssBaseline, makeStyles, MuiThemeProvider, Theme } from "@material-ui/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { GAWrapper } from "../packages/site/src/analytics";
import { RootNav } from "../packages/site/src/root/top-nav";
import { appTheme } from "../packages/site/src/theme";
import "../public/prism.css";

const useStyles = makeStyles((_: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0"
    }
}))

function SiteViewport({ Component, pageProps }: AppProps) {

    const classes = useStyles();

    return (
        <GAWrapper>
            <MuiThemeProvider theme={ appTheme }>
                <CssBaseline />
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>Ryan Kadri</title>
                    <meta name="description" content="A collection of programming classes from Ryan Kadri, professor extraordinaire!" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <div className={classes.container}>
                    <RootNav />
                    <Component {...pageProps} />
                </div>
            </MuiThemeProvider>
        </GAWrapper>
    )
}

export default SiteViewport;

/* <Switch>
    <Route path="/courses/:course">
        <CourseRouter />
    </Route>
    <Route path="/courses" exact>
        <CourseSelector />
    </Route>
    <Route path="/projects">
        <ProjectView />
    </Route>
    <Route path="/" exact>
        <Redirect to="/courses" />
    </Route>
</Switch> */