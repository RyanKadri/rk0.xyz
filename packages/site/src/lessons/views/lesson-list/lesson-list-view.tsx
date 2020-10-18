import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";
import { LessonList } from "./lesson-list";

const useStyles = makeStyles((_: Theme) => createStyles({
    container: {
        minHeight: "calc(100vh - 64px)",
        padding: 16
    },
}));

export function LessonListView({ currCourse }: Props) {
    const classes = useStyles();
    const baseUrl = useRouteMatch();

    return (
        <div className={ classes.container }>
            { currCourse
                ? <LessonList course={ currCourse } baseUrl={ baseUrl.url } />
                : "This course does not seem to exist"
            }
        </div>
    )
}

interface Props {
    currCourse: CourseDefinition | undefined;
}