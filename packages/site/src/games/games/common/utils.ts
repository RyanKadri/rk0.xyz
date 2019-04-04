import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { BoardState, CoordinateMove, GameStatus } from "./types/shared-types";

export const saneDefaults = {
    computerOpponent: false,
    currentPlayer: 0,
    status: GameStatus.ONGOING,
    waiting: false,
    error: null
};

export const createBoard = <T>(rows: number, cols: number, initState: T): BoardState<T> => {
    return new Array(rows).fill(undefined).map(
        _ => new Array(cols).fill(undefined).map(
            _ => initState
    ))
};

export const createBoardStyles = (rows: number, cols: number): CSSProperties => ({
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: '50vh',
});

export const noop = () => {}

export const addToken = <T>(currBoard: BoardState<T>, move: CoordinateMove<T>, freeSpace: T) => {
    if(currBoard[move.row][move.column] !== freeSpace) {
        throw new Error("Invalid move. This square is already occupied");
    } else {
        return currBoard.map((row, rowNum) => 
            row.map((col, colNum) => 
                rowNum === move.row && colNum === move.column 
                    ? move.player
                    : col
            )
        )
    }
}