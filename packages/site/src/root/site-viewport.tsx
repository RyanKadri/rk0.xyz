import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { CourseRouter } from "../lessons/views/course-router";
import { AppBarContext, AppBarSettings } from "./app-bar-context";
import { LandingPage } from "./landing-page";
import { RootNav } from "./top-nav";
import { ViewportContext, ViewportInfo } from "./viewport-context";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
    }
})

let updateSettings: any;
let updateViewport: any;


export function SiteViewport({ }: Props) {

    const classes = useStyles();
    const [appbarSettings, setSettings ] = useState<AppBarSettings>({ 
        title: "Ryan Kadri",
        CustomAction: null
    });
    
    updateSettings = updateSettings || ((update: Partial<AppBarSettings>) => { 
        setSettings((old) => ({ ...old, ...update }))
    });

    const [viewportSettings, setViewport] = useState<ViewportInfo>({
        isFullscreen: false,
        requestingFullscreen: false
    });

    updateViewport = updateViewport || ((update: Partial<ViewportInfo>) => {
        setViewport(old => ({ ...old, ...update }))
    });

    return (
        <AppBarContext.Provider value={ { settings: appbarSettings, updateAppBar: updateSettings  } }>
            <ViewportContext.Provider value={{ current: viewportSettings, updateViewport }} >
                <div className={classes.container}>
                    <RootNav settings={ appbarSettings } viewport={viewportSettings} />
                    <Switch>
                        <Route path="/courses" component={ CourseRouter } />
                        <Route path="/" exact component={ LandingPage } />
                    </Switch>
                </div>
            </ViewportContext.Provider>
        </AppBarContext.Provider>
    )
}

interface Props {

}