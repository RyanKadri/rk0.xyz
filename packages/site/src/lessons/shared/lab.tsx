import { createStyles, makeStyles } from "@mui/styles";
import { CustomTheme } from "../../theme";

export const useMarkdownLabStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      maxWidth: 1200,
      fontSize: "1rem",
      "& h1": theme.typography.h4,
      "& h2": theme.typography.h5,
      "& h3": {
        ...theme.typography.body1,
        fontWeight: theme.typography.fontWeightBold,
      },
      "& h1,& h2,& h3": {
        marginBottom: 8,
        marginTop: 20,
      },
      "& p": {
        ...theme.typography.body1,
        margin: 0,
      },
      "& p+p": {
        marginTop: 8,
      },
      "& img": {
        width: "100%",
        maxWidth: 900,
        display: "block",
      },
      "& a": {
        color: theme.palette.primary.dark,
      },
      "& li": {
        marginTop: 8,
      },
      "& li li": {
        marginTop: 0,
      },
      "& ::marker": {
        fontWeight: "bold",
      },
    },
  })
);
