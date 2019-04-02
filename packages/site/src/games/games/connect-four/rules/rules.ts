import { GameState, GameStatus } from "../../common/types/shared-types";
import { ConnectFourOwner, ConnectFourAction, ConnectFourBoardState } from "../types/types";
import { saneDefaults, createBoard, addToken } from "../../common/utils";
import { findLine, Directions } from "../../common/rules/check-in-line";
import { isFull } from "../../common/rules/board-full";

export const players = [ ConnectFourOwner.P1, ConnectFourOwner.P2 ]

export const NUM_ROWS = 6;
export const NUM_COLUMNS = 7;

export const initState: GameState<ConnectFourOwner> = {
    ...saneDefaults,
    board: createBoard(NUM_ROWS, NUM_COLUMNS, ConnectFourOwner.EMPTY)
}

export const connectFourReducer = (state: GameState<ConnectFourOwner>, action: ConnectFourAction)
    : GameState<ConnectFourOwner> => {

    switch(action.type) {
        case "move":
            const currentPlayer = players[state.currentPlayer];
            const move = { column: action.column, player: currentPlayer };
            const newBoard = updateBoard(state.board, move);
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
        case "error":
            return {
                ...state,
                error: action.error
            }
        case "toggleWaiting":
            return {
                ...state,
                waiting: action.isWaiting
            }
    }
    return state
}

const updateBoard = (board: ConnectFourBoardState, move: ConnectFourMove) => {
    for(let row = board.length - 1; row >= 0; row --) {
        if(board[row][move.column] === ConnectFourOwner.EMPTY) {
            return addToken(board, { row, column: move.column, player: move.player }, ConnectFourOwner.EMPTY)
        }
    }
    throw new Error("The column you tried to use was already full")
}

const checkOutcome = (board: ConnectFourBoardState) => {
    const line = findLine(
        board,
        [ Directions.HORIZONTAL, Directions.VERTICAL, Directions.DIAGONAL_UP, Directions.DIAGONAL_DOWN ],
        4,
        (a, b) => a === b && a !== ConnectFourOwner.EMPTY
    );
    if(line) {
        return { 
            status: GameStatus.WINNER,
            winner: line[0].token
        } 
    } else if(isFull(board, ConnectFourOwner.EMPTY)) {
        return {
            status: GameStatus.TIE
        }
    } else {
        return {
            status: GameStatus.ONGOING
        }
    }
}

interface ConnectFourMove {
    column: number;
    player: ConnectFourOwner;
}