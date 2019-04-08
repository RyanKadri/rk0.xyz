import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => createStyles({
    list: {
        marginTop: 32
    },
    item: {
        fontSize: "2.75rem",
        fontWeight: 300,
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
            top: 26,
            transform: "translate(-32px, -50%)"
        }
    }
})

const _InfoList = ({ items, classes }: Props) => (
    <ul className={ classes.list }>
        { items.map((item, i) => (
            <li key={i} className={classes.item}>{
                typeof item === "string"
                    ? item
                    :   <>
                            {item.text}
                            <_InfoList items={item.children} classes={classes} />
                        </>
            }</li>
        )) }
    </ul>
)

export const InfoList = withStyles(styles)(_InfoList)

interface Props extends WithStyles<typeof styles> {
    items: (string | NestedListInfo)[]
}

export interface NestedListInfo {
    text: string;
    children: (string | NestedListInfo)[];
}