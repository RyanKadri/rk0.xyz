import { createStyles, Typography, WithStyles, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { PageNumber } from "../slide-components/page-number";

const styles = createStyles({
    message: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
})

const _CenterMessageSlide = ({classes, context, Message }: Props) => (
    <>
        <span className={classes.message}>
            { 
                typeof Message === "string"
                    ? <Typography variant="h2">{Message}</Typography>
                    : Message
            }
        </span>
        <PageNumber context={context} />
    </>
)

export const CenterMessageSlide = withStyles(styles)(_CenterMessageSlide)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext;
    Message: string | ReactElement
}