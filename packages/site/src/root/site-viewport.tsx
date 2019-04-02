import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { PresentationViewer } from "../../../presenter-core/src";
import { GameSelector } from "../games/game-viewer";
import { lesson1 } from "../lessons/lesson1/slides";
import { lesson2 } from "../lessons/lesson2/slides";
import { AppBarContext, AppBarSettings } from "./app-bar-context";
import { LandingPage } from "./landing-page";
import { RootNav } from "./top-nav";
import { ViewportContext, ViewportInfo } from "./viewport-context";

const styles = createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    }
})

const presentations = [
    lesson1,
    lesson2
];

const _SiteViewport = ({ classes }: Props) => {
    const [appbarSettings, setSettings ] = useState<AppBarSettings>({ 
        title: "Ryan Kadri",
        customAction: null
    });
    
    const updateSettings = (update: Partial<AppBarSettings>) => { 
        setSettings((old) => ({ ...old, ...update }))
    };

    const [viewportSettings, setViewport] = useState<ViewportInfo>({
        isFullscreen: false,
        requestingFullscreen: false
    });

    const updateViewport = (update: Partial<ViewportInfo>) => {
        setViewport(old => ({ ...old, ...update }))
    }


    return (
        <AppBarContext.Provider value={ { settings: appbarSettings, updateAppBar: updateSettings  } }>
            <ViewportContext.Provider value={{ current: viewportSettings, updateViewport }} >
                <div className={classes.container}>
                    <RootNav settings={ appbarSettings } viewport={viewportSettings} />
                    <Switch>
                        <Route path="/web-design-class/" render={(props) => 
                            <PresentationViewer routeProps={props} presentations={ presentations } />
                        } />
                        <Route path="/games/" component={GameSelector} />
                        <Route path="/" exact component={LandingPage} />
                    </Switch>
                </div>
            </ViewportContext.Provider>
        </AppBarContext.Provider>
    )
}

export const SiteViewport = withStyles(styles)(_SiteViewport)

interface Props extends WithStyles<typeof styles> {

}