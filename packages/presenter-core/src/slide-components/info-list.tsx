import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";

const styles = (theme: Theme) => createStyles({
    list: {
        marginTop: 32
    },
    item: {
        fontSize: "1.35rem",
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
                    : "text" in item
                        ? (<>
                            {item.text}
                            <_InfoList items={item.children} classes={classes} />
                        </>)
                        : item
            }</li>
        )) }
    </ul>
)

export const InfoList = withStyles(styles)(_InfoList)

interface Props extends WithStyles<typeof styles> {
    items: (string | NestedListInfo | ReactElement)[]
}

export interface NestedListInfo {
    text: string;
    children: (string | NestedListInfo)[];
}