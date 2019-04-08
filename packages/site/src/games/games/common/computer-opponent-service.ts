import { ConnectFourBoardState } from "../connect-four/types/types";
import { TicTacToeBoardState } from "../tic-tac-toe/types/types";
import { BoardState } from "./types/shared-types";

declare const process: any;

export const NextMoveApi = {
    ticTacToe(boardState: TicTacToeBoardState): Promise<TicTacToeMove> {
        return fetchMove(`${process.env.API_PATH}/api/tic-tac-toe/nextMove`, boardState)
    },
    connectFour(boardState: ConnectFourBoardState): Promise<ConnectFourMove> {
        return fetchMove(`${process.env.API_PATH}/api/connect-4/nextMove`, boardState)
    }
}

function fetchMove(url: string, boardState: BoardState<any>): any {
    return fetch(url, { 
        method: "POST",
        body: JSON.stringify(boardState),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}

interface TicTacToeMove {
    row: number;
    column: number;
}

interface ConnectFourMove {
    column: number;
}