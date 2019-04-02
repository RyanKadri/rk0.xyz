import { createStyles, withStyles, WithStyles, Theme, Typography } from "@material-ui/core";
import React, { useEffect, useReducer } from "react";
import { TicTacToeBoard } from "./tic-tac-toe-board";
import { TicTacToeOwner, MoveAction } from "./types/types";
import { ticTacToeReducer, players, initState } from "./rules/rules";
import { GameHeader } from "../common/components/game-header";
import { DefaultGameControls } from "../common/components/default-game-controls";
import { NextMoveApi } from "../common/computer-opponent-service";
import { GameStatus, ToggleWaiting, ErrorEffect, ResetAction, ToggleOpponent } from "../common/types/shared-types";

const styles = (_: Theme) => createStyles({
    
});

const _TicTacToeGame = ({ }: Props) => {
    
    const [gameState, dispatch] = useReducer(ticTacToeReducer, initState);

    const cleanGame = gameState === initState;
    const currentPlayer = players[gameState.currentPlayer];

    useEffect(() => {
        if(gameState.computerOpponent 
                && currentPlayer === TicTacToeOwner.O 
                && gameState.status === GameStatus.ONGOING
        ) {
            dispatch(new ToggleWaiting(true))
            NextMoveApi.ticTacToe(gameState.board)
                .then(nextMove => dispatch(new MoveAction(nextMove.row, nextMove.column)))
                .catch(_ => dispatch(new ErrorEffect("An error occurred while trying to decide the next move"))) 
        }
    }, [gameState.currentPlayer, gameState.computerOpponent])

    return (
        <>
            <GameHeader 
                game="Tic Tac Toe"
                status={gameState.status}
                waiting={gameState.waiting}
                currentPlayer={currentPlayer}
                winner={gameState.winner}
                playerName={playerStr} />
            <TicTacToeBoard 
                boardState={ gameState.board } 
                gameState={ gameState.status }
                onSquareSelected={ (col, row) => dispatch(new MoveAction(row, col)) }
            />
            { gameState.error && <Typography color="error">{ gameState.error }</Typography> }
            <DefaultGameControls 
                canReset={ !cleanGame }
                onReset={ () => dispatch(new ResetAction()) }
                computerOpponent={ gameState.computerOpponent }
                onSetComputerOpponent={ (isComp) => dispatch(new ToggleOpponent(isComp)) }
             />
        </>
    )
}

function playerStr(player: TicTacToeOwner) {
    return player === TicTacToeOwner.X ? 'X' : 'O'
}

interface Props extends WithStyles<typeof styles> {}

export const TicTacToeGame = withStyles(styles)(_TicTacToeGame);