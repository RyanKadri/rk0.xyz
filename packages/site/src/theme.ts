import { red, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const appTheme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: red,
    },
    typography: {
      h3: {
        fontWeight: 100
      },
      h4: {
        fontWeight: 100
      },
      h5: {
        fontWeight: 100
      }
    }
});
