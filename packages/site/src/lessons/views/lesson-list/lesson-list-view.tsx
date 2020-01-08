import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";
import { LessonList } from "./lesson-list";

const useStyles = makeStyles((_: Theme) => createStyles({
    container: {
        minHeight: "calc(100vh - 64px)",
        padding: 16
    },
}));

export function LessonListView({ currCourse, baseUrl }: Props) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { currCourse
                ? <LessonList lessons={ currCourse.lessons } baseUrl={ `${baseUrl}/${currCourse.slug}` } />
                : "This course does not seem to exist"
            }
        </div>
    )
}

interface Props {
    currCourse: CourseDefinition | undefined;
    baseUrl: string;
}