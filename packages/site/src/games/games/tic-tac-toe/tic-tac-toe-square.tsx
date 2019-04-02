import { TicTacToeOwner } from "./types/types";
import React from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { GameBoardSquare } from "../common/components/board-square";


const styles = (theme: Theme) => createStyles({
    token: {
        fill: "none",
        stroke: '#444',
        strokeWidth: theme.spacing.unit / 2
    }
}) 

const _TicTacToeSquare = (props: Props) => {
    const { owner, disabled, onSelected } = props;
    const selected = owner !== TicTacToeOwner._;
    return ( 
        <GameBoardSquare selected={ selected }
                         disabled={ disabled || selected }
                         onSelected={ onSelected }
        >{
            owner === TicTacToeOwner.X
                ? <XMark { ...props } />
                : owner === TicTacToeOwner.O
                    ? <OMark { ...props } />
                    : <svg viewBox="0 0 100 100" />
        }</GameBoardSquare>
    )
}

const OMark = ({ classes }: Props) => (
    <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="38" className={classes.token} />
    </svg>
)

const XMark = ({ classes}: Props) => (
    <svg viewBox="0 0 100 100" >
        <path d="M12,12 L88,88" className={classes.token} />
        <path d="M88,12 L12,88" className={classes.token} />
    </svg>
)

interface Props extends WithStyles<typeof styles> {
    owner: TicTacToeOwner;
    disabled: boolean;
    onSelected: () => void;
}

export const TicTacToeSquare = withStyles(styles)(_TicTacToeSquare);