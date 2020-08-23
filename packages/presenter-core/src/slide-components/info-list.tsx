import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme: Theme) => createStyles({
    list: {
        marginTop: 32
    },
    item: {
        fontSize: "1.35rem",
        fontWeight: 300,
        position: "relative",
        marginBottom: 16,
    },
    bulletListItem: {
        display: "block",
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
}))

export function InfoList({ items, useOrderedLists = false }: Props) {
    const classes = useStyles()
    return (
        React.createElement(useOrderedLists ? "ol" : "ul", { className: classes.list },
            ...items.map((item, i) => (
                <li key={i} className={ `${classes.item} ${ !useOrderedLists ? classes.bulletListItem : ""}` }>{
                    typeof item === "string"
                        ? item
                        : "text" in item
                            ? (<>
                                {item.text}
                                <InfoList items={item.children} useOrderedLists={ useOrderedLists } />
                            </>)
                            : item
                }</li>
            ))
        )
    )
}

interface Props {
    items: (string | NestedListInfo | ReactElement)[];
    useOrderedLists?: boolean;
}

export interface NestedListInfo {
    text: string;
    children: (string | NestedListInfo)[];
}