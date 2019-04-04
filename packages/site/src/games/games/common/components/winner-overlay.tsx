
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { MatchedLine } from "../rules/check-in-line";

const styles = createStyles({
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2
    },
    winnerSvg: {
        height: "100%",
        width: "100%"
    },
    winnerLine: {
        fill: "black",
        stroke: "black",
        strokeWidth: 0.125,
        transform: "translateX(0.0625px)"
    }
})

const _WinnerOverlay = ({ classes, winningMove, numCols, numRows }: Props) => {

    const startX = winningMove.startCol + 0.5;
    const stopX = winningMove.startCol + 0.5 + winningMove.direction.col * (winningMove.length - 1);

    const startY = winningMove.startRow + 0.5;
    const stopY = winningMove.startRow + 0.5 + winningMove.direction.row * (winningMove.length - 1);

    return (
        <div className={ classes.overlay }>
            <svg className={ classes.winnerSvg } viewBox={`0 0 ${numCols} ${numRows}`}>
                <line className={ classes.winnerLine}
                      x1={startX} y1={startY}
                      x2={stopX} y2={stopY} />
            </svg>
        </div>       
    );
}

export const WinnerOverlay = withStyles(styles)(_WinnerOverlay)

interface Props extends WithStyles<typeof styles> {
    winningMove: MatchedLine<any>;
    numCols: number;
    numRows: number;
}