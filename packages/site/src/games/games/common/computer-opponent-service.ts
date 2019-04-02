import { ConnectFourBoardState } from "../connect-four/types/types";
import { TicTacToeBoardState } from "../tic-tac-toe/types/types";
import { BoardState } from "./types/shared-types";

export const NextMoveApi = {
    ticTacToe(boardState: TicTacToeBoardState): Promise<TicTacToeMove> {
        return fetchMove("https://1dsf262eg5.execute-api.us-east-1.amazonaws.com/prod/tic-tac-toe", boardState)
    },
    connectFour(boardState: ConnectFourBoardState): Promise<ConnectFourMove> {
        return fetchMove("/api/connect-4/nextMove", boardState)
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