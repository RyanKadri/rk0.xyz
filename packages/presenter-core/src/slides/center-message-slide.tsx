import { makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { PageNumber } from "../slide-components/page-number";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 96
    }
})

export function CenterMessageSlide({ context, Message }: Props) {
    const classes = useStyles();
    return (
    <div className={ classes.container }>
        { 
            typeof Message === "string"
                ? <Typography variant="h4" component="p">{Message}</Typography>
                : Message
        }
        <PageNumber context={context} />
    </div>
    )
}

interface Props {
    context: PresentationContext;
    Message: string | ReactElement
}