import { createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../services/types";

const styles = (theme: Theme) => createStyles({
    pageNum: {
        position: "absolute",
        bottom: 8,
        right: 16,
        fontSize: theme.typography.h6.fontSize,
        color: "#777"
    },
})

const _PageNumber = ({ context, classes }: Props) => (
    <Typography variant="body1"
                className={ classes.pageNum }>
        { context.pageNum } / { context.numPages }
    </Typography>
)

export const PageNumber = withStyles(styles)(_PageNumber)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}