import { createStyles, List, ListItem, ListItemText, Paper, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { ExampleDefinition } from "../../../presenter-core/src";
import { ExamplePlayground } from "./example-playground";

const styles = createStyles({
    container: {
        display: "flex",
        height: "calc(100vh - 64px)",
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
})

const _ExampleViewer = ({ classes, examples, currExample, baseUrl }: Props) => {
    return (
        <div className={ classes.container }>
            <Paper className={ classes.sidebar }>
                <List>
                    { examples.map((example, i) => (
                        <ListItem key={ example.title } button component={ props => <Link { ...{ ...props, to: `${baseUrl}/${i}` } } />}>
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

export const ExampleViewer = withStyles(styles)(_ExampleViewer)

interface Props extends WithStyles<typeof styles> {
    examples: ExampleDefinition[];
    currExample?: number;
    baseUrl: string
}