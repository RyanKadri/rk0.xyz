import { makeStyles } from "@material-ui/core";
import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router";
import { AppBarContext, AppBarSettings } from "./app-bar-context";
import { LandingPage } from "./landing-page";
import { RootNav } from "./top-nav";
import { ViewportContext, ViewportInfo } from "./viewport-context";

const CourseRouter = React.lazy(() => import("../lessons/views/course-router"));

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
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
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/courses" component={ CourseRouter } />
                            <Route path="/" exact component={ LandingPage } />
                        </Switch>
                    </Suspense>
                </div>
            </ViewportContext.Provider>
        </AppBarContext.Provider>
    )
}

interface Props {

}