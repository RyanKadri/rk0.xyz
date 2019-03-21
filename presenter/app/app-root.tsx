import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { PresentationSelector } from "./presentation-selector/presentation-selector";
import { Presentation } from "./services/types";
import { SlideManager } from "./slides/slide-manager";
import { appTheme } from "./theme";

export function PresentationViewer({ presentations }: Props) {
    return (
        <Router>
            <MuiThemeProvider theme={ appTheme }>
                <CssBaseline />
                <Switch>
                    <Route path="/presentations" exact render={() => 
                        <PresentationSelector presentations={presentations} /> }
                    />
                    <Route path="/presentations/:presentation/slides/:slideNum"
                        render={ props => 
                            <SlideManager presentation={presentations[props.match.params.presentation]}
                                history={ props.history }
                                match={ props.match } />
                    } />
                    <Route path="/" exact render={ () => <Redirect to="/presentations" /> } />
                </Switch>
            </MuiThemeProvider>
        </Router>
    )
}

interface Props {
    presentations: Presentation[]
}