import { Card, CardContent, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { projects } from "./projects-config";

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        maxWidth: 1200
    },
    card: {
        display: "flex",
        padding: theme.spacing(2),
        gap: theme.spacing(),
        marginBottom: theme.spacing()
    },
    content: {
        padding: 0
    },
    cardTitle: {
        marginBottom: theme.spacing()
    },
    screenshot: {
        width: 350,
        height: 250
    },
    title: {
        marginBottom: theme.spacing(2)
    }
}))

export function ProjectView() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Typography variant="h4" className={ classes.title }>Personal Projects</Typography>
            { projects.map(project => (
                <Card key={ project.link } className={ classes.card }>
                    <CardContent className={ classes.content }>
                        <Typography variant="h5" className={ classes.cardTitle }>
                            <Link href={ project.link } target="_blank" rel="noopener">
                                { project.name }
                            </Link>
                        </Typography>
                        { project.description }
                    </CardContent>
                    <a href={ project.link } target="_blank" rel="noopener">
                        <img src={ project.image } className={ classes.screenshot }
                             alt={ project.imageAlt } />
                    </a>
                </Card>
            ))}
        </div>
    )
}