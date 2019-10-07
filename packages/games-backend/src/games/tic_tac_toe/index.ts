export enum CellStates {
    EMPTY = 0,
    ME = 2,
    OPPONENT = 1
}

export enum GameStates {
    ONGOING = 0,
    WIN = 1,
    LOSS = 2,
    TIE = 3
}

export function nextMoveTic(board: Board) {
    const hash = hashBoard(board);
    const move = moveCache.get(hash);
    if(move) {
        return { row: move.coords[0], column: move.coords[1] }
    } else {
        return { 
            error: "Error: Can't find the next move for this board. Are you sure you have"
                + " a valid starting board and there is not already a winner?"
        }
    }
}

const moveCache = new Map<number, Move>();
const initBoard: Board = [
    [CellStates.EMPTY, CellStates.EMPTY, CellStates.EMPTY],
    [CellStates.EMPTY, CellStates.EMPTY, CellStates.EMPTY],
    [CellStates.EMPTY, CellStates.EMPTY, CellStates.EMPTY]
];

export function calcBoard(currentPlayer: Player = CellStates.OPPONENT, board: Board = initBoard): number {
    const hash = hashBoard(board);
    const cachedVal = moveCache.get(hash);
    if(cachedVal) {
        return cachedVal.score
    }

    let bestMove: Coordinate | null = null;
    let bestScore: number | null = null;
    let totalScore = 0;
    const opponent = otherPlayer(currentPlayer);
    const free = freeSpaces(board);

    for(const coord of free) {
        board[coord[0]][coord[1]] = currentPlayer;
        const outcome = checkOutcome(board, currentPlayer);

        let score: number;
        if(outcome === GameStates.WIN) {
            score = 1;
        } else if(outcome === GameStates.TIE) {
            score = 0;
        } else {
            score = -(1/free.length) * calcBoard(opponent, board);
        }

        totalScore += score;
        if(bestScore === null || score > bestScore) {
            bestScore = score;
            bestMove = coord;
        }
        board[coord[0]][coord[1]] = CellStates.EMPTY;
    }
    moveCache.set(hash, { score: bestScore!, coords: bestMove! });
    return totalScore;
}

function hashBoard(board: Board): number {
    let hash = 0;
    for(let row = 0; row < board.length; row ++) {
        const currRow = board[row];
        for(let col = 0; col < currRow.length; col ++) {
            const cellVal = currRow[col];
            const ind = 3 * row + col;
            hash += cellVal * 3 ** ind
        }
    }
    return hash;
}

function otherPlayer(player: Player): Player {
    if(player === CellStates.ME) {
        return CellStates.OPPONENT;
    } else {
        return CellStates.ME
    }
}

function freeSpaces(board: Board): Coordinate[] {
    const freeSpaces: Coordinate[] = [];
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(board[row][col] === CellStates.EMPTY) {
                freeSpaces.push([row, col]);
            }
        }
    } 
    return freeSpaces;
}

type Triple = [Coordinate, Coordinate, Coordinate]
const triplesToCheck: Triple[] = [
    [[0,0], [1,1], [2,2]],
    [[2,0], [1,1], [0,2]],
    ...([0,1,2].map(row => [[row, 0], [row, 1], [row, 2]] as Triple)),
    ...([0,1,2].map(col => [[0, col], [1, col], [2, col]] as Triple))
]
function checkOutcome(board: Board, currentPlayer: Player): GameStates {
    for(const triple of triplesToCheck) {
        const outcome = checkTriple(board, triple);
        if(outcome === currentPlayer) {
            return GameStates.WIN;
        } else if(outcome === otherPlayer(currentPlayer)) {
            return GameStates.LOSS;
        }
    }

    for(const row of board) {
        for(const cell of row) {
            if(cell === CellStates.EMPTY) {
                return GameStates.ONGOING;
            }
        }
    }
    return GameStates.TIE;
}

function checkTriple(board: Board, triple: Triple): CellStates {
    const [a, b, c] = triple.map(coord => board[coord[0]][coord[1]]);
    if(a === b && b === c) {
        return a;
    } else {
        return CellStates.EMPTY
    }
}

export type Board = CellStates[][];


type Player = CellStates.ME | CellStates.OPPONENT;

interface Move {
    score: number;
    coords: Coordinate;
}

type Coordinate = [number, number];