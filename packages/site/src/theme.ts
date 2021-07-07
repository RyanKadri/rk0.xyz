import { amber, red, teal } from "@material-ui/core/colors";
import { } from "@material-ui/core/styles";
import createMuiTheme, { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const lightThemeOptions: ThemeOptions = {
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
  overrides: {
    MuiAppBar: {
        colorPrimary: {
          backgroundColor: teal["700"]
        }
    },
    MuiLink: {
      root: {
        color: teal["700"]
      }
    }
  },
  slides: {
    baseFontSize: "36px"
  },
};

export const darkThemeOptions: ThemeOptions = {
  ...lightThemeOptions,
  palette: {
    primary: teal,
    secondary: amber,
    type: "dark"
  },
  overrides: {
    MuiAppBar: {
        colorPrimary: {
          backgroundColor: teal["700"]
        }
    },
    MuiLink: {
      root: {
        color: teal["200"]
      }
    }
  }
}

export const lightTheme = createMuiTheme(lightThemeOptions);
export const darkTheme = createMuiTheme(darkThemeOptions);