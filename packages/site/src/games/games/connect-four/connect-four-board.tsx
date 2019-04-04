import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { WinnerOverlay } from "../common/components/winner-overlay";
import { MatchedLine } from "../common/rules/check-in-line";
import { GameStatus } from "../common/types/shared-types";
import { createBoardStyles } from "../common/utils";
import { ConnectFourSquare } from "./connect-four-square";
import { ConnectFourBoardState, ConnectFourOwner } from "./types/types";

const styles = createStyles({
    board: {
        ...createBoardStyles(6, 7),
        position: "relative"
    }
})

const _ConnectFourBoard = ({ classes, boardState, status, onColumnSelected, winningMove }: Props) => {
    const [ hoveredCol, setHoveredCol ] = useState<number | null>(null);
    return (
    <div className={ classes.board }>
        {
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
        }
        { winningMove === undefined
            ? null
            : <WinnerOverlay winningMove={winningMove} numRows={boardState.length} numCols={boardState[0].length} />
        }
    </div>
    )
}

export const ConnectFourBoard = withStyles(styles)(_ConnectFourBoard)

interface Props extends WithStyles<typeof styles> {
    boardState: ConnectFourBoardState
    status: GameStatus;
    winningMove?: MatchedLine<ConnectFourOwner>;
    onColumnSelected: (column: number) => void
}