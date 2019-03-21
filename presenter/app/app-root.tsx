import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { ComponentType, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { PresentationControls } from "./controls/presentation-controls";
import { PresentationContext } from "./services/types";
import { SlideManager } from "./slides/slide-manager";
import { appTheme } from "./theme";


export function PresentationViewer({ slides }: Props) {
    const [state, setState] = useState<AppState>({ fullscreen: false, requestFullscreenState: false });

    useEffect(() => {
        if(state.requestFullscreenState && !state.fullscreen) {
            document.body.requestFullscreen()
                .then(() => setState(old => ({ ...old, fullscreen: true })))
                .catch(e => console.log(`Failed to launch fullscreen`, e));
        } else if(!state.requestFullscreenState && state.fullscreen) {
            document.exitFullscreen()
                .then(() => setState(old => ({ ...old, fullscreen: false })))
        }
    }, [state.fullscreen, state.requestFullscreenState]);

    return (
        <Router>
            <MuiThemeProvider theme={ appTheme }>
                <CssBaseline />
                <PresentationControls 
                    fullScreen={state.fullscreen} 
                    onFullScreen={ shouldFullscreen => setState(old => ({ ...old, requestFullscreenState: shouldFullscreen })) } 
                />
                <Switch>
                    <Route path="/slides/:slideNum"
                        render={ props => 
                            <SlideManager slides={slides}
                                history={ props.history }
                                match={ props.match } />
                    } />
                    <Route path="/" exact render={ () => <Redirect to="/slides/0" /> } />
                </Switch>
            </MuiThemeProvider>
        </Router>
    )
}

interface Props {
    slides: ComponentType<{context: PresentationContext}>[]
}

interface AppState {
    fullscreen: boolean;
    requestFullscreenState: boolean;
}