import { MatchedLine } from "../../common/rules/check-in-line";
import { BasicGameState, BoardState, ErrorEffect, ResetAction, ToggleOpponent, ToggleWaiting } from "../../common/types/shared-types";

export enum ConnectFourOwner {
    EMPTY,
    P1,
    P2,
}

export type ConnectFourBoardState = BoardState<ConnectFourOwner>

export type ConnectFourAction = MoveAction | ResetAction | ToggleOpponent | ErrorEffect | ToggleWaiting

export class MoveAction {
    readonly type = "move";
    constructor(
        public column: number
    ){ }
}

export type Connect4State = BasicGameState<ConnectFourOwner> & {
    winningMove?: MatchedLine<ConnectFourOwner>;
}