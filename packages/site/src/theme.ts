import { amber, red, teal } from "@mui/material/colors";
import { ThemeOptions, createTheme } from "@mui/material/styles";

export const lightThemeOptions: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: red,
    background: {
      default: "#eee",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 300,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: teal["700"],
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: teal["700"],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
        },
      },
    },
  },
};

export const darkThemeOptions: ThemeOptions = {
  ...lightThemeOptions,
  palette: {
    primary: teal,
    secondary: amber,
    mode: "dark",
  },
  components: {
    ...lightThemeOptions.components,
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: teal["700"],
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: teal["200"],
        },
      },
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);

export type CustomTheme = typeof lightTheme;
