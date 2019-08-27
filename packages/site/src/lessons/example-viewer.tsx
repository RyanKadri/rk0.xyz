import { createStyles, List, ListItem, ListItemText, Paper, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { ExampleDefinition } from "../../../presenter-core/src";
import { ExamplePlayground } from "./example-playground";

const styles = createStyles({
    container: {
        display: "flex",
        height: "calc(100vh - 64px)"
    },
    codeContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 16,
        marginLeft: 16,
        flexGrow: 1
    },
    sidebar: {
        width: 240
    }
})

const _ExampleViewer = ({ classes, examples, currExample }: Props) => {
    return (
        <div className={ classes.container }>
            <Paper className={ classes.sidebar }>
                <List>
                    { examples.map(example => (
                        <ListItem key={ example.title } button>
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
}