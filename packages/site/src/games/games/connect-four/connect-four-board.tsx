import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { GameStatus } from "../common/types/shared-types";
import { ConnectFourBoardState } from "./types/types";
import { createBoardStyles } from "../common/utils";
import { ConnectFourSquare } from "./connect-four-square";

const styles = createStyles({
    board: {
        ...createBoardStyles(6, 7),
        minWidth: '60vh'
    }
    
})

const _ConnectFourBoard = ({ classes, boardState, status, onColumnSelected }: Props) => {
    const [ hoveredCol, setHoveredCol ] = useState<number | null>(null);
    return (
    <div className={ classes.board }>{
        boardState.flatMap((row, rowNum) => 
            row.map((col, colNum) => (
                <ConnectFourSquare key={ `${rowNum},${colNum}` }
                                 owner={ col }
                                 disabled={ status !== GameStatus.ONGOING }
                                 onSelected={ () => onColumnSelected(colNum) }
                                 onHover={ () => setHoveredCol(colNum) }
                                 highlight={ hoveredCol === colNum }
                />
            ))
        ) 
    }</div>
    )
}

export const ConnectFourBoard = withStyles(styles)(_ConnectFourBoard)

interface Props extends WithStyles<typeof styles> {
    boardState: ConnectFourBoardState
    status: GameStatus;
    onColumnSelected: (column: number) => void
}