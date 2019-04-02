import { BoardState, ResetAction, ToggleOpponent, ToggleWaiting, ErrorEffect } from "../../common/types/shared-types";

export enum TicTacToeOwner {
    _,
    X,
    O,
}

export type TicTacToeBoardState = BoardState<TicTacToeOwner>;

export type TicTacToeAction = MoveAction | ResetAction | ToggleOpponent | ToggleWaiting | ErrorEffect

export class MoveAction {
    readonly type = "move";

    constructor(
        public row: number,
        public col: number
    ){ }
}
