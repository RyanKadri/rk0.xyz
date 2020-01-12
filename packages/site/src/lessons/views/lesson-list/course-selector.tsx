import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";
import { CourseCard } from "./course-card";

const useStyles = makeStyles(createStyles({
    listContainer: {
        padding: 16,
        flexGrow: 1,
        width: "100%",
        maxWidth: "1300px",
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
            { courses.map((course) => (
                <CourseCard key={course.slug} course={course} baseUrl={baseUrl} />
            ))}
        </div>
    );
}

interface Props {
    courses: CourseDefinition[];
    baseUrl: string;
}