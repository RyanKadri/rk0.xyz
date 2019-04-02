import { TicTacToeBoardState, TicTacToeOwner, TicTacToeAction } from "../types/types";
import { GameState, GameStatus } from "../../common/types/shared-types";
import { saneDefaults, createBoard, addToken } from "../../common/utils";
import { isFull } from "../../common/rules/board-full";

export const players = [ TicTacToeOwner.X, TicTacToeOwner.O ];

export const NUM_ROWS = 3;
export const NUM_COLS = 3;

export const initState: GameState<TicTacToeOwner> = {
    ...saneDefaults,
    board: createBoard(NUM_ROWS, NUM_COLS, TicTacToeOwner._ ),
}

export const ticTacToeReducer = (state: GameState<TicTacToeOwner>, action: TicTacToeAction): GameState<TicTacToeOwner> => {
    switch(action.type) {
        case "move":
            const currentPlayer = players[state.currentPlayer];
            const move = { row: action.row, column: action.col, player: currentPlayer };
            const newBoard = addToken(state.board, move, TicTacToeOwner._);
            const outcome = checkOutcome(newBoard);
            return { 
                ...state,
                ...outcome,
                board: newBoard,
                currentPlayer: (state.currentPlayer + 1) % 2,
                waiting: false,
                error: null
            };
        case "reset":
            return initState;
        case "toggleOpponent":
            return {
                ...state,
                computerOpponent: action.computerOpponent
            }
        case "toggleWaiting":
            return {
                ...state,
                waiting: action.isWaiting
            }
        case "error":
            return {
                ...state,
                error: action.error
            }
    }
}

function checkOutcome(board: TicTacToeBoardState): Pick<GameState<TicTacToeOwner>, 'status' | 'winner'> {
    let winner = undefined;
    
    winner = checkWinner(board[0][0], board[1][1], board[2][2])
        || checkWinner(board[0][2], board[1][1], board[2][0])       
    let i = 0;
    while(winner === undefined && i < 3) {
        winner = checkWinner(board[i][0], board[i][1], board[i][2])
            || checkWinner(board[0][i], board[1][i], board[2][i]);
        i ++;
    }
    if(winner !== undefined) {
        return {
            status: GameStatus.WINNER,
            winner
        }
    } else if(isFull(board, TicTacToeOwner._)) {
        return { status: GameStatus.TIE }
    } else {
        return { status: GameStatus.ONGOING };
    }
}

function checkWinner(a: TicTacToeOwner, b: TicTacToeOwner, c: TicTacToeOwner) {
    if(a === b && b === c && a !== TicTacToeOwner._) {
        return a;
    } else {
        return undefined
    }
}

