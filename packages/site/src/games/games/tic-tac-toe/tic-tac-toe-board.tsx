import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core";
import { TicTacToeSquare } from "./tic-tac-toe-square";
import { GameStatus } from "../common/types/shared-types";
import { TicTacToeBoardState } from "./types/types";
import { createBoardStyles } from "../common/utils";
import { NUM_ROWS, NUM_COLS } from "./rules/rules";

const styles = createStyles({
    board: createBoardStyles(NUM_ROWS, NUM_COLS)
})

const _TicTacToeBoard = ({ classes, boardState, gameState, onSquareSelected }: Props)  => (
    <div className={classes.board}>
        { boardState.flatMap((row, rowNum) => 
            row.map((col, colNum) => (
                <TicTacToeSquare key={ `${rowNum},${colNum}` }
                                    owner={ col }
                                    disabled={ gameState !== GameStatus.ONGOING }
                                    onSelected={ () => onSquareSelected(colNum, rowNum) }
                />
            ))
        ) }
    </div>
)

interface Props extends WithStyles<typeof styles> {
    onSquareSelected: (col: number, row: number) => void;
    boardState: TicTacToeBoardState;
    gameState: GameStatus;
}

export const TicTacToeBoard = withStyles(styles)(_TicTacToeBoard)