import { isFull } from "../../common/rules/board-full";
import { Directions, findLine } from "../../common/rules/check-in-line";
import { GameStatus } from "../../common/types/shared-types";
import { addToken, createBoard, saneDefaults } from "../../common/utils";
import { Connect4State, ConnectFourAction, ConnectFourBoardState, ConnectFourOwner } from "../types/types";

export const players = [ ConnectFourOwner.P1, ConnectFourOwner.P2 ]

export const NUM_ROWS = 6;
export const NUM_COLUMNS = 7;

export const initState: Connect4State = {
    ...saneDefaults,
    board: createBoard(NUM_ROWS, NUM_COLUMNS, ConnectFourOwner.EMPTY)
}

export const connectFourReducer = (state: Connect4State, action: ConnectFourAction)
    : Connect4State => {

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
            return {
                ...initState,
                computerOpponent: state.computerOpponent
            };
        case "toggleOpponent":
            return {
                ...state,
                computerOpponent: action.computerOpponent
            }
        case "error":
            return {
                ...state,
                error: action.error,
                waiting: false
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
            winner: line.token,
            winningMove: line
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