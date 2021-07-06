import "@material-ui/core/styles/createMuiTheme";
import "@material-ui/core/styles/useTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
    export interface ThemeOptions {
        slides: {
            baseFontSize: string;
        }
    }

    export interface Theme {
        slides: {
            baseFontSize: string;
        }
    }
}