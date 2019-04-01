import { AppBar, Card, CardActionArea, CardContent, createStyles, Link as MaterialLink, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Presentation } from "../../../presenter-core/src/services/types";

const styles = createStyles({
    card: {
        flexShrink: 1,
        margin: 16
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
})

const _PresentationSelector = ({ classes, presentations }: Props) => (
    <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">Choose a class</Typography>
            </Toolbar>
        </AppBar>
        <div className={ classes.container }>
            { presentations.map((presentation, i) => (
                <Card key={i} className={classes.card} elevation={5}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5">
                                <MaterialLink component={() =>
                                    <Link to={`presentations/${i}/slides/0`}>{ presentation.title }</Link>
                                }>a</MaterialLink>
                            </Typography>
                            <Typography variant="body1">{ presentation.description }</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    </>
)

export const PresentationSelector = withStyles(styles)(_PresentationSelector)

interface Props extends WithStyles<typeof styles> {
    presentations: Presentation[]
}