import { createStyles, List, ListItem, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { ExamplePlayground } from "../components/example-playground";

const useStyles = makeStyles(createStyles({
    container: {
        display: "flex",
        minHeight: "calc(100vh - 64px)",
        maxWidth: "100vw"
    },
    codeContainer: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 16,
        paddingLeft: 16,
        boxSizing: "border-box",
        flexGrow: 1,
        width: "calc(100vw - 256px)"
    },
    sidebar: {
        minWidth: 240
    }
}))

export function ExampleViewer({ examples, currExample, baseUrl }: Props) {
    const classes = useStyles();
    return (
        <div className={ classes.container }>
            <Paper className={ classes.sidebar }>
                <List>
                    { examples.map((example, i) => (
                        <ListItem key={ example.title } button component={ Link } to={`${baseUrl}/${i}`}>
                            <ListItemText primary={ example.title }></ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <div className={ classes.codeContainer }>
                { currExample === undefined
                    ? <Typography>Please choose an example</Typography>
                    : (
                        <>
                            <Typography variant="h4">{ examples[currExample].title }</Typography>
                            <ExamplePlayground example={ examples[currExample ]} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

interface Props {
    examples: ExampleDefinition[];
    currExample?: number;
    baseUrl: string
}