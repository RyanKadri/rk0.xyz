import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GAWrapper } from "./analytics";
import { SiteViewport } from "./root/site-viewport";
import { appTheme } from "./theme";

export function SiteRoot({}: Props) {
    return (
        <Router>
            <GAWrapper>
                <MuiThemeProvider theme={ appTheme }>
                    <CssBaseline />
                    <SiteViewport />
                </MuiThemeProvider>
            </GAWrapper>
        </Router>
    )
}

interface Props {

}