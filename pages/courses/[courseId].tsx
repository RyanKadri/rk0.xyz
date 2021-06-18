import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { CourseDefinition } from "../../packages/presenter-core/src/services/types";
import { activeCourses } from "../../packages/site/src/lessons/views/activeCourses";
import { LessonList } from "../../packages/site/src/lessons/views/lesson-list/lesson-list";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        minHeight: "calc(100vh - 64px)",
        padding: 16
    },
    title: {
        marginBottom: theme.spacing(2)
    }
}));

export default function LessonListView({ currCourse }: Props) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { currCourse
                ? <>
                    <Typography variant="h5" className={ classes.title }>
                        { currCourse.title }
                    </Typography>
                    <LessonList course={ currCourse } baseUrl={ `/courses/${currCourse.slug}` } />
                  </>
                : "This course does not seem to exist"
            }
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params = {}}) => {
    const currCourse = activeCourses.find(course => course.slug === params.courseId) ?? null;
    return {
        props: {
            currCourse: JSON.parse(JSON.stringify(currCourse))
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: activeCourses.map(course => ({ 
            params: {
                courseId: course.slug
            } 
        })),
        fallback: true
    }
}

interface Props {
    currCourse: CourseDefinition | undefined;
}