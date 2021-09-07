import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    inline: {
        whiteSpace: "pre-wrap",
        fontSize: "1rem",
        backgroundColor: theme.palette.type === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)",
        padding: 2,
        borderRadius: 4,
        color: theme.palette.secondary.dark
    },
}))

interface Props {
    children: string;
}
export function InlineCode({ children }: Props) {
    const classes = useStyles();
    return (
        <code className={ classes.inline }>{ children }</code>
    )
}