import { ComponentType } from "react";

export interface GameDefinition {
    display: string;
    link: string;
    component: ComponentType<any>
}

export enum GameStatus {
    ONGOING,
    WINNER,
    TIE
}

export type BoardState<T> = T[][];

export interface GameState<T> {
    board: BoardState<T>;
    status: GameStatus;
    currentPlayer: number;
    winner?: T;
    computerOpponent: boolean;
    waiting: boolean;
    error: string | null;
}

export interface CoordinateMove<T> {
    player: T;
    row: number;
    column: number;
}

export class ResetAction {
    readonly type = "reset";

    constructor(){ }
}

export class ToggleOpponent {
    readonly type = "toggleOpponent";

    constructor(
        public computerOpponent: boolean
    ){ }
}

export class ToggleWaiting {
    readonly type = "toggleWaiting";

    constructor(
        public isWaiting: boolean
    ) { }
}

export class ErrorEffect {
    readonly type = "error";

    constructor(
        public error: string
    ) { }
}