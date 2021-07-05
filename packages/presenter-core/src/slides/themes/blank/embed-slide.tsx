import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { EmbedSlideProps } from "../../slides";

const useStyles = makeStyles(createStyles({
    container: {
        padding: "0"
    }
}))

export function FullSlide({ Content }: EmbedSlideProps) {
    const classes = useStyles();
    return (
        <div className={ classes.container }>
            { Content }
        </div>
    )
}