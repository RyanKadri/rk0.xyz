import { createStyles, List, ListItem, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";
import { saveCourseSelection } from "../../../root/user-settings-service";

const useStyles = makeStyles(createStyles({
    listContainer: {
        padding: 16,
        flexGrow: 1,
        maxWidth: "100vw"
    },
}))

export function CourseSelector({ courses, baseUrl }: Props) {
    const classes = useStyles();
    return (
        <div className={ classes.listContainer }>
            <Typography variant="body1">
                Hi. I'm Ryan Kadri. I am a software developer at Capital One
                and an adjunct professor at Temple University. Below are the courses I have taught or that I 
                am currently teaching.
            </Typography>
            <Paper>
                <List>
                    { courses.map((course) => (
                        <ListItem button 
                                    key={course.slug} 
                                    component={ Link } 
                                    to={`${baseUrl}/${course.slug}`} 
                                    onClick={ () => saveCourseSelection(course.slug) }>
                            <ListItemText primary={ course.title } secondary={ course.description } />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    );
}

interface Props {
    courses: CourseDefinition[];
    baseUrl: string;
}