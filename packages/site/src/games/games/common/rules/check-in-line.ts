import { BoardState } from "../types/shared-types";

export const Directions = {
    VERTICAL: { row: 0, col: 1 },
    HORIZONTAL: { row: 1, col: 0 },
    DIAGONAL_UP: { row: -1, col: 1},
    DIAGONAL_DOWN: { row: 1, col: 1 }
}

interface Direction {
    row: number;
    col: number;
}

export function findLine<T>(
    board: BoardState<T>,
    directions: Direction[],
    length: number,
    predicate: (a: T, b: T) => boolean
) {
    for(const direction of directions) {
        for(let startRow = 0; startRow < board.length; startRow ++) {
            const row = board[startRow];
            for(let startCol = 0; startCol < row.length; startCol++) {
                const squareSet = extractLine(board, startRow, startCol, direction, length);
                if(squareSet && checkLine(squareSet.map(sq => sq.token), predicate)) {
                    return squareSet
                }
            }
        }
    }
    return undefined;
}

function extractLine<T>(
    board: BoardState<T>,
    startRow: number,
    startCol: number,
    direction: Direction,
    length: number
) {
    const endRow = startRow + direction.row * (length - 1);
    const endCol = startCol + direction.col * (length - 1);
    if(endRow >= 0 && endRow < board.length && endCol >= 0 && endCol < board[0].length) {
        const res = [];
        for(let i = 0; i < length; i++) {
            const row = startRow + i * direction.row;
            const column = startCol + i * direction.col;
            res.push({ row, column, token: board[row][column] })
        }
        return res;
    }
    return undefined;
}

function checkLine<T>(line: T[], predicate: (a: T, b: T) => boolean) {
    for(let i = 0; i < line.length - 1; i++) {
        if(!predicate(line[i], line[i + 1])){
            return false;
        }
    }

    return true;
}