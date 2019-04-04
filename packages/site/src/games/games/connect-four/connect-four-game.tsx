import { createStyles, Typography, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useReducer } from "react";
import { DefaultGameControls } from "../common/components/default-game-controls";
import { GameHeader } from "../common/components/game-header";
import { NextMoveApi } from "../common/computer-opponent-service";
import { ErrorEffect, GameStatus, ResetAction, ToggleOpponent, ToggleWaiting } from "../common/types/shared-types";
import { ConnectFourBoard } from "./connect-four-board";
import { connectFourReducer, initState, players } from "./rules/rules";
import { ConnectFourOwner, MoveAction } from "./types/types";

const styles = createStyles({
})

const _ConnectFourGame = ({}: Props) => {
    const [gameState, dispatch] = useReducer(connectFourReducer, initState)
    const currentPlayer = players[gameState.currentPlayer];

    useEffect(() => {
        if(gameState.computerOpponent 
                && currentPlayer === ConnectFourOwner.P2 
                && gameState.status === GameStatus.ONGOING
        ) {
            dispatch(new ToggleWaiting(true))
            NextMoveApi.connectFour(gameState.board)
                .then(nextMove => dispatch(new MoveAction(nextMove.column)))
                .catch(_ => dispatch(new ErrorEffect("An error occurred while trying to decide the next move"))) 
        }
    }, [gameState.currentPlayer, gameState.computerOpponent])
    
    return (
        <>
            <GameHeader 
                game="Connect 4"
                status={gameState.status}
                waiting={gameState.waiting}
                currentPlayer={currentPlayer}
                winner={gameState.winner}
            />
            <ConnectFourBoard 
                boardState={ gameState.board } 
                status={ gameState.status }
                winningMove={ gameState.winningMove }
                onColumnSelected={ (col) => dispatch(new MoveAction(col)) }
            />
            { gameState.error && <Typography color="error">{ gameState.error }</Typography> }
            <DefaultGameControls 
                canReset={ true }
                onReset={ () => dispatch(new ResetAction()) }
                computerOpponent={ gameState.computerOpponent }
                onSetComputerOpponent={ (isComp) => dispatch(new ToggleOpponent(isComp)) }
             />
        </>
    )
}

export const ConnectFourGame = withStyles(styles)(_ConnectFourGame
)

interface Props extends WithStyles<typeof styles> {

}