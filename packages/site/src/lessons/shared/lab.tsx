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