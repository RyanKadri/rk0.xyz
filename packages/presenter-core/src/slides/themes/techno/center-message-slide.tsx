import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PageNumber } from "../../../slide-components/page-number";
import { CenterMessageSlideProps } from "../../slides";

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

export function CenterMessageSlide({ context, Message }: CenterMessageSlideProps) {
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