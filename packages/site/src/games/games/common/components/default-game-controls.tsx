import { createStyles, WithStyles, withStyles, FormControlLabel, Switch, Button, Theme } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => createStyles({
    footer: {
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        alignItems: 'center'
    }
})

const _DefaultGameControls = ({ classes, canReset, onReset, computerOpponent, onSetComputerOpponent }: Props) => (
    <footer className={classes.footer}>
        <FormControlLabel 
            label="Play against computer"
            control={
                <Switch 
                    checked={ computerOpponent }
                    onChange={ e => onSetComputerOpponent(e.currentTarget.checked) }
                    color="primary" />
            }
        />
        {
            !canReset ? null :
            <Button variant="contained" color="secondary"
                onClick={ onReset }>
                Reset
            </Button>
        }
    </footer>
)

export const DefaultGameControls = withStyles(styles)(_DefaultGameControls)

interface Props extends WithStyles<typeof styles> {
    canReset: boolean;
    onReset(): void;
    computerOpponent: boolean;
    onSetComputerOpponent: (computerOpponent: boolean) => void;
}