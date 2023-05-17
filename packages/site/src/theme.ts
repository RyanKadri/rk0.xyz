import { amber, red, teal } from "@mui/material/colors";
import { adaptV4Theme, createTheme } from "@mui/material/styles";

export const lightThemeOptions = adaptV4Theme({
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
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: teal["700"],
      },
    },
    MuiLink: {
      root: {
        color: teal["700"],
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
    } as any,
  },
  slides: {
    baseFontSize: "36px",
  },
});

export const darkThemeOptions = {
  ...lightThemeOptions,
  palette: {
    primary: teal,
    secondary: amber,
    type: "dark",
  },
  overrides: {
    ...lightThemeOptions.overrides,
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: teal["700"],
      },
    },
    MuiLink: {
      root: {
        color: teal["200"],
      },
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);

export type CustomTheme = typeof lightTheme;
