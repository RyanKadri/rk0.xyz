import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../presenter-core/src/services/types";

const styles = createStyles({
    on: {
        backgroundColor: "black",
        color: "white"
    },
    button: {
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: "silver",
        margin: "0px 8px"
    },
    bezel: {
        flexBasis: 64,
        backgroundColor: "#444",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    viewport: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        flexGrow: 1,
        gridTemplateRows: "repeat(4, 25%)",
        "& div": {
            border: "solid 1px #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
                counterIncrement: "pixel",
                content: '"Pixel: " counter(pixel)'
            }
        }
    },
    monitor: {
        border: "solid 8px #444",
        borderRadius: 2,
        height: "90%",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        counterReset: "pixel 0",
    },
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

const _SimpleMonitorSlide = ({ classes }: Props) => (
    <div className={classes.container}>
        <div className={ classes.monitor }>
            <div className={ classes.viewport }>
                <div className={ classes.on }></div><div className={ classes.on }></div><div className={ classes.on }></div><div>           </div>
                <div className={ classes.on }></div><div>           </div><div className={ classes.on }></div><div>           </div>
                <div className={ classes.on }></div><div className={ classes.on }></div><div className={ classes.on }></div><div>           </div>
                <div>           </div><div>           </div><div>           </div><div>           </div>
            </div>
            <div className={ classes.bezel }>
                <div className={ classes.button }></div>
                <div className={ classes.button }></div>
                <div className={ classes.button }></div>
            </div>
        </div>
    </div>
)

export const SimpleMonitorSlide = withStyles(styles)(_SimpleMonitorSlide)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}