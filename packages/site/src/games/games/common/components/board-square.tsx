import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { noop } from "../utils";

const borderWidth = 4;

const styles = (theme: Theme) => createStyles({
    square: {
        padding: theme.spacing.unit,
        border: `solid ${borderWidth}px #444`,
        marginRight: - borderWidth,
        marginBottom: - borderWidth,
        display: "flex",
        alignItems: "center",
        "&:hover:not(.selected):not(.disabled):not(.block-auto-hover)": {
            backgroundColor: "rgba(0,0,0,0.12)"
        },
        "&.highlight": {
            backgroundColor: "rgba(0,0,0,0.12)"
        },
        "& > *": {
            width: "100%"
        }
    }
})

const _GameBoardSquare = ({ classes, onSelected, disabled, selected, highlight, children, onHover }: Props) => {

    const squareClasses = [
        classes.square,
        selected ? 'selected' : '',
        disabled ? 'disabled': '',
        typeof highlight === "boolean" ? 'block-auto-hover' : '',
        highlight ? 'highlight': '',
    ];
    return (
    <div className={ squareClasses.join(" ") }
         onClick={ !disabled ? onSelected : noop }
         onMouseEnter={ () => { (onHover || noop)() } }
    >{
        children
    }</div>
    )
}

export const GameBoardSquare = withStyles(styles)(_GameBoardSquare)

interface Props extends WithStyles<typeof styles> {
    disabled: boolean;
    selected: boolean;
    highlight?: boolean;
    onSelected: () => void;
    onHover?: () => void;
    children: ReactElement<any>
}