import { createStyles, CssBaseline, MuiThemeProvider, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SiteViewport } from "./root/site-viewport";
import { appTheme } from "./theme";

const styles = createStyles({

})

const _SiteRoot = ({}: Props) => (
    <Router>
        <MuiThemeProvider theme={ appTheme }>
            <CssBaseline />
            <SiteViewport />
        </MuiThemeProvider>
    </Router>
)

export const SiteRoot = withStyles(styles)(_SiteRoot)

interface Props extends WithStyles<typeof styles> { }