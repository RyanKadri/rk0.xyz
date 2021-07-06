import { amber, red, teal } from "@material-ui/core/colors";
import { } from "@material-ui/core/styles";
import createMuiTheme, { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const defaultTheme: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: red,
    background: {
      default: "#eee"
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h3: {
      fontWeight: 300
    },
    h4: {
      fontWeight: 300
    },
    h5: {
      fontWeight: 300
    }
  },
  slides: {
    baseFontSize: "36px"
  }
};

export const darkTheme: ThemeOptions = {
  ...defaultTheme,
  palette: {
    primary: teal,
    secondary: amber,
    type: "dark"
  }
}

export const appTheme = createMuiTheme(darkTheme);
