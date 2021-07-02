import { red, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const appTheme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: red,
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
    }
});
