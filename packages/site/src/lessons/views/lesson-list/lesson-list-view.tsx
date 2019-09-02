import { createStyles, List, ListItem, ListItemText, ListSubheader, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";
import { LessonList } from "./lesson-list";

const useStyles = makeStyles(createStyles({
    card: {
        flexShrink: 1,
        margin: 16
    },
    container: {
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row"
    },
    sidebar: {
        width: 300,
        alignSelf: "stretch",
        "@media (max-width: 500px)":{
            display: "none"
        }
    },
    listContainer: {
        padding: 16,
        flexGrow: 1,
        maxWidth: "100vw"
    }
}))

export function LessonListView({ courses, currCourse, baseUrl }: Props) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Paper className={ classes.sidebar }>
                <List subheader={<ListSubheader>Courses</ListSubheader>}>
                    { courses.map((course, i) => (
                        <ListItem button key={course.title} component={ Link } to={`${baseUrl}/${i}`}>
                            <ListItemText primary={ course.title } />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <div className={ classes.listContainer }>
                { currCourse === undefined 
                    ? <Typography>Please select a course</Typography>
                    : <LessonList lessons={ courses[currCourse].lessons } baseUrl={ `${baseUrl}/${currCourse}/lessons` } />
                }
            </div>
        </div>
    )
}

interface Props {
    courses: CourseDefinition[];
    currCourse: number;
    baseUrl: string;
}