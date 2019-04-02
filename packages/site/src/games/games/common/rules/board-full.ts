import { BoardState } from "../types/shared-types";

export function isFull<T>(board: BoardState<T>, emptyToken: T) {
    return board.every(row => 
        row.every(col => 
            col !== emptyToken
        )
    )
}