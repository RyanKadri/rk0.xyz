import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { GameBoardSquare } from "../common/components/board-square";
import { ConnectFourOwner } from "./types/types";

const styles = createStyles({

})

const _ConnectFourSquare = ({ disabled, owner, onSelected, highlight, onHover }: Props) => {
    const selected = owner !== ConnectFourOwner.EMPTY;
    return (
        <GameBoardSquare 
            selected={ selected }
            disabled={ disabled }
            highlight={ highlight }
            onSelected={ onSelected }
            onHover={ onHover }
        >{
            owner === ConnectFourOwner.P1
                ? <PlayerOneToken />
                : owner === ConnectFourOwner.P2
                    ? <PlayerTwoToken />
                    : <svg viewBox="0 0 100 100"></svg>
        }</GameBoardSquare>
    )
}

const PlayerOneToken = () => (
    <Token fill="red" />
)

const PlayerTwoToken = () => (
    <Token fill="black" />
)

const Token = ({ fill }: { fill: string }) => (
    <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="38" style={{ fill }} />
    </svg>
)

export const ConnectFourSquare = withStyles(styles)(_ConnectFourSquare)

interface Props extends WithStyles<typeof styles> {
    disabled: boolean;
    owner: ConnectFourOwner;
    onSelected: () => void;
    onHover: () => void;
    highlight: boolean;
}