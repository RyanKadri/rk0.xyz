import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useLabStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
        maxWidth: 1200
    },
    sectionLabel: {
    },
    title: {
        marginBottom: 24
    },
    section: {
        marginBottom: 40
    },
    startCode: {
        marginTop: 32
    },
    code: {
    },
    sketch: {
        maxWidth: 900,
        width: "100%",
        display: "block"
    },
    sideNote: {
        marginLeft: "2em",
        marginTop: "1em"
    }
}));

export const useMarkdownLabStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        maxWidth: 1200,
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
        "& section": {
            marginLeft: 16
        },
        "& img": {
            width: "100%",
            maxWidth: 900
        },
        "& code": {
            whiteSpace: "pre-wrap"
        }
    }
}));