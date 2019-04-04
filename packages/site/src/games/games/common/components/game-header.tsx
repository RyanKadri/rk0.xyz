import { CircularProgress, createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { GameStatus } from "../types/shared-types";

const defaultWinMessage = (winner: number, playerStr: PlayerToString) => 
    `Congrats ${playerStr(winner!)}, you win!`;

const defaultCurrentPrompt = (player: number, playerStr: PlayerToString) => 
    `Current Player: ${ playerStr(player) }`;

const defaultTieMessage = "Tie game. Guess you both lose";

const defaultPlayerStr = (player: number) => `Player ${player}`

const styles = (theme: Theme) => createStyles({
    header: {
        textAlign: 'center'
    },
    spinner: {
        marginLeft: theme.spacing.unit * 2
    }
})

const _GameHeader = (props: Props) => {
    const { classes, game, status, currentPlayer, winner, tieMessage, winMessage, currentPlayerPrompt, waiting } = props
    const playerToString = props.playerName || defaultPlayerStr;
    return (
    <header className={classes.header}>
        <Typography variant="h5">{ game }</Typography>
            <Typography variant="h6">{ 
                status === GameStatus.WINNER 
                    ? (winMessage || defaultWinMessage)(winner!, playerToString)
                    : status === GameStatus.TIE
                        ? tieMessage || defaultTieMessage
                        : (currentPlayerPrompt || defaultCurrentPrompt)(currentPlayer, playerToString)
                }
                { waiting
                    ? <CircularProgress 
                        className={classes.spinner}
                        style={{ height: 18, width: 18 }}
                        color="secondary" /> 
                    : null 
                }
            </Typography>
    </header>
    )
}

export const GameHeader = withStyles(styles)(_GameHeader)

interface Props extends WithStyles<typeof styles> {
    game: string;
    status: GameStatus;
    waiting: boolean;
    currentPlayer: number;
    winner: number | undefined;
    playerName?: PlayerToString

    winMessage?: (player: number) => string;
    tieMessage?: string;
    currentPlayerPrompt?: (player: number) => string
}

type PlayerToString = (player: number) => string;