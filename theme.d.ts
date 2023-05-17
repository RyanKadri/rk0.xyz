import "@mui/material/styles/createMuiTheme";
import "@mui/material/styles/useTheme";

declare module "@mui/material/styles/createMuiTheme" {
  export interface ThemeOptions {
    slides: {
      baseFontSize: string;
    };
  }

  export interface Theme {
    slides: {
      baseFontSize: string;
    };
  }
}
