import { createStyles, makeStyles } from "@material-ui/core";

export const useBaseStyles = makeStyles(_ => createStyles({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        fontSize: "1rem"
    },
    centeredContentContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        padding: 64
    },
    titleSlideTitle: {
        fontSize: "1.75rem"
    },
    title: {
        fontSize: "1.5rem",
    },
    subTitle: {
        fontSize: "1.25rem"
    }
}))