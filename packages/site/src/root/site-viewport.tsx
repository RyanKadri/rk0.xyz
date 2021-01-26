import { makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { CourseRouter } from "../lessons/views/course-router";
import { CourseSelector } from "../lessons/views/lesson-list/course-selector";
import { ProjectView } from "../projects/project-view";
import { AppBarContext, AppBarSettings } from "./app-bar-context";
import { RootNav } from "./top-nav";
import { ViewportContext, ViewportInfo } from "./viewport-context";

const useStyles = makeStyles((_: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0"
    }
}))

let updateSettings: any;
let updateViewport: any;


export function SiteViewport({ }: Props) {

    const classes = useStyles();
    const [appBarSettings, setSettings ] = useState<AppBarSettings>({ 
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
        <AppBarContext.Provider value={ { settings: appBarSettings, updateAppBar: updateSettings  } }>
            <ViewportContext.Provider value={{ current: viewportSettings, updateViewport }} >
                <div className={classes.container}>
                    <RootNav settings={ appBarSettings } viewport={viewportSettings} />
                    <Switch>
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
                    </Switch>
                </div>
            </ViewportContext.Provider>
        </AppBarContext.Provider>
    )
}

interface Props {

}