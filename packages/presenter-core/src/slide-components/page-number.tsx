import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../services/types";

const useStyles = makeStyles({
    pageNum: {
        position: "absolute",
        bottom: 8,
        right: 16,
        color: "#777"
    },
})

export function PageNumber({ context }: Props) {
    const classes = useStyles();
    return (
        <Typography variant="body2"
                    className={ classes.pageNum }>
            { context.pageNum } / { context.numPages }
        </Typography>
    )
}

interface Props {
    context: PresentationContext
}