import { makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { PageNumber } from "../slide-components/page-number";

const useStyles = makeStyles({
    message: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
})

export function CenterMessageSlide({ context, Message }: Props) {
    const classes = useStyles();
    return (
    <>
        <span className={classes.message}>
            { 
                typeof Message === "string"
                    ? <Typography variant="h4" component="p">{Message}</Typography>
                    : Message
            }
        </span>
        <PageNumber context={context} />
    </>
    )
}

interface Props {
    context: PresentationContext;
    Message: string | ReactElement
}