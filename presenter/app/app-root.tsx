import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { PresentationControls } from "./controls/presentation-controls";
import { SlideManager } from "./slides/slide-manager";
import { appTheme } from "./theme";

export function App() {
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
        <MuiThemeProvider theme={ appTheme }>
            <CssBaseline />
            <PresentationControls 
                fullScreen={state.fullscreen} 
                onFullScreen={ shouldFullscreen => setState(old => ({ ...old, requestFullscreenState: shouldFullscreen })) } 
            />
            <SlideManager />
        </MuiThemeProvider>
    )
}

interface AppState {
    fullscreen: boolean;
    requestFullscreenState: boolean;
}