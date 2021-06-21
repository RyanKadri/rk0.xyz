import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, createStyles, ListItemAvatar, ListItemText, makeStyles, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";

const useStyles = makeStyles(createStyles({
    card: {
        margin: "8px 0",
        padding: 8,
        display: "flex",
        alignItems: "center"
    },
    desc: {
        
    }
}))

export function CourseCard({ course, baseUrl }: Props) {
    const classes = useStyles();
    const router = useRouter();

    const numExamples = course.lessons.reduce((acc, el) => acc + (el.examples || []).length, 0);
    const numLabs = course.lessons.filter(lesson => !!lesson.lab).length
    const desc = `${course.lessons.length} lessons - ${ numExamples } examples - ${ numLabs } labs`

    return (
        <Paper onClick={ () => router.push(`${baseUrl}/${course.slug}`) } 
               className={classes.card}>
            <ListItemAvatar>
                <Avatar color="primary">
                    { course.icon
                        ? <FontAwesomeIcon icon={ course.icon } />
                        : course.title[0]
                    }
                </Avatar>
            </ListItemAvatar>
            <section className={ classes.desc }>
                <ListItemText primary={ course.title } secondary={ course.description } />
                <ListItemText secondary={ desc } />
            </section>
        </Paper>
    );
}

interface Props {
    course: CourseDefinition;
    baseUrl: string;
}