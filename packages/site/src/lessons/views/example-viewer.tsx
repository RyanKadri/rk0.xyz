import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStyles, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { SyntaxHighlightedBlock } from '../../../../presenter-core/src/slide-components/code-block';
import { ExamplePlayground } from "../components/example-playground";

const useStyles = makeStyles(theme => createStyles({
    container: {
        display: "flex",
        minHeight: "calc(100vh - 64px)",
        maxWidth: "100vw"
    },
    codeContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "16px 16px 0px 16px",
        boxSizing: "border-box",
        flexGrow: 1,
        width: "calc(100vw - 256px)",
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing()
        }
    },
    sidebar: {
        minWidth: 240,
    },
    sidebarSurface: {
        minWidth: 240,
        paddingTop: theme.spacing(8)
    },
}))

interface Props {
    examples: ExampleDefinition[];
    currExample: number | null;
    baseUrl: string;
    highlightedCode: SyntaxHighlightedBlock;
}
export function ExampleViewer({ examples, currExample, baseUrl, highlightedCode }: Props) {
    const classes = useStyles();
    const [ drawerOpen, setDrawerOpen ] = useState(false)
    return (
        <div className={ classes.container }>
            <Drawer className={ classes.sidebar } 
                    variant="temporary" 
                    classes={{ paper: classes.sidebarSurface }}
                    open={ drawerOpen }
                    anchor="left"
                    onClose={ () => setDrawerOpen(false) }
                    >
                <List>
                    { examples.map((example, i) => (
                        <Link href={`${baseUrl}/${i}`} passHref key={ example.title }>
                            <ListItem button component="a">
                                <ListItemText primary={ example.title }></ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <div className={ classes.codeContainer }>
                { currExample === null
                    ? <Typography>Please choose an example</Typography>
                    : (
                        <>
                            <Toolbar>
                                <IconButton onClick={ () => setDrawerOpen(!drawerOpen) }>
                                    <FontAwesomeIcon icon={ faBars } />
                                </IconButton>
                                <Typography variant="h5">
                                    { examples[currExample].title }
                                </Typography>
                            </Toolbar>
                            <ExamplePlayground example={ examples[currExample ]} highlightedCode={ highlightedCode } />
                        </>
                    )
                }
            </div>
        </div>
    )
}