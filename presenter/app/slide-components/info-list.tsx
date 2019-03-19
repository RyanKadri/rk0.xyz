import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => createStyles({
    list: {

    },
    item: {
        fontSize: theme.typography.h4.fontSize,
        position: "relative",
        display: "block",
        marginBottom: 16,
        "&::before": {
            content: '" "',
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: theme.palette.secondary.main,
            height: 12,
            width: 12,
            top: "50%",
            transform: "translate(-24px, -50%)"
        }
    }
})

const _InfoList = ({ items, classes }: Props) => (
    <ul className={ classes.list }>
        { items.map(item => (
            <li key={item} className={classes.item}>{item}</li>
        )) }
    </ul>
)

export const InfoList = withStyles(styles)(_InfoList)

interface Props extends WithStyles<typeof styles> {
    items: string[]
}