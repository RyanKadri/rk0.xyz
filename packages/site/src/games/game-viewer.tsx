import { createStyles, IconButton, Link, Menu, MenuItem, Theme, WithStyles, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import { Link as RouterLink } from 'react-router-dom';
import { AppBarContext } from "../root/app-bar-context";
import { GameDefinition } from "./games/common/types/shared-types";
import { ConnectFourGame } from "./games/connect-four/connect-four-game";
import { TicTacToeGame } from "./games/tic-tac-toe/tic-tac-toe-game";


const styles = (theme: Theme) => createStyles({
    gameContainer: {
        padding: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 1
    }
});

const games: GameDefinition[] = [
    { display: 'Tic Tac Toe', link: "tic-tac-toe", component: TicTacToeGame },
    { display: 'Connect 4', link: "connect-4", component: ConnectFourGame }
]

const _GameSelector = ({ classes, match }: Props) => {
    const appBar = useContext(AppBarContext);
    const [anchorEl, setAnchor] = useState<HTMLElement | null>(null);
    const onMenuOpen = (e: SyntheticEvent<HTMLElement>) => { setAnchor(e.currentTarget) };
    const onMenuClose = () => { setAnchor(null) };
    
    useEffect(() => {
        appBar.updateAppBar({ 
            title: "Simple Web Games",
            customAction: (
                <>
                    <IconButton onClick={onMenuOpen} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Menu open={!!anchorEl} onClose={onMenuClose} anchorEl={anchorEl}>{ 
                        games.map(game => (
                            <MenuItem key={game.link}>
                                <Link component={RouterLink as any} { ...{ to: game.link }}>
                                    { game.display }
                                </Link>
                            </MenuItem>
                        ))
                    }</Menu>
                </>
            ) })
    }, [ anchorEl ]);

    return (
        <>
            <main className={ classes.gameContainer }>
                <Switch>
                    { 
                        games.map(game => (
                            <Route key={game.link} path={`${match.url}/${game.link}`} component={ game.component } />
                        ))
                    }
                    <Route path={`${match.url}`} exact render={() => <Redirect to={`${match.url}tic-tac-toe`} />} />
                </Switch>
            </main>
        </>
    )
}

export const GameSelector = withStyles(styles)(_GameSelector)

interface Props extends WithStyles<typeof styles> {
    match: RouteComponentProps["match"]
}