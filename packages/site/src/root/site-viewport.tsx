import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router";
import { AppBarContext, AppBarSettings } from "./app-bar-context";
import { LandingPage } from "./landing-page";
import { RootNav } from "./top-nav";
import { ViewportContext, ViewportInfo } from "./viewport-context";

const PresentationView = React.lazy(() => import("../lessons/presentation-view"));

const styles = createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    }
})

let updateSettings: any;
let updateViewport: any;

const _SiteViewport = ({ classes }: Props) => {
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
                            <Route path="/web-design-class/" component={ PresentationView } />
                            <Route path="/" exact component={LandingPage} />
                        </Switch>
                    </Suspense>
                </div>
            </ViewportContext.Provider>
        </AppBarContext.Provider>
    )
}

export const SiteViewport = withStyles(styles)(_SiteViewport)

interface Props extends WithStyles<typeof styles> {

}