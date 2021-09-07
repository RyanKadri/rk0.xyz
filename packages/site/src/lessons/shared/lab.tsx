import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useMarkdownLabStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        maxWidth: 1200,
        fontSize: "1rem",
        "& h1": theme.typography.h4,
        "& h2": theme.typography.h5,
        "& h3": {
            ...theme.typography.body1,
            fontWeight: theme.typography.fontWeightBold
        },
        "& h1,& h2,& h3": {
            marginBottom: 8,
            marginTop: 20
        },
        "& p": {
            ...theme.typography.body1,
            margin: 0,
        },
        "& p+p": {
            marginTop: 8
        },
        "& img": {
            width: "100%",
            maxWidth: 900,
            display: "block"
        },
        "& a": {
            color: theme.palette.primary.dark
        }
    }
}));