import { Link as MaterialLink, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { CourseDefinition, Presentation } from "../../../../../presenter-core/src/services/types";

interface Props {
    course: CourseDefinition;
    baseUrl: string;
}

const useStyles = makeStyles(() => ({
    container: {
        padding: 16
    },
    courseList: {
        listStyle: "none",
        "& > li": {
            marginTop: 16
        }
    },
    referenceLink: {
        marginLeft: 8
    },
    referenceNote: {
        marginLeft: 16
    },
}))

export function ConsolidatedReferences({ course, baseUrl }: Props) {
    const classes = useStyles();
    return (
        <div className={ classes.container }>
            <MaterialLink component={ Link } to={`${ baseUrl }/${course.slug}`}>Back to Course</MaterialLink>
            <Typography variant="h4">
                Consolidated References: { course.title }
            </Typography>
            <ul className={ classes.courseList }>
                { course.lessons.map(lesson => (
                    <LessonReferences lesson={ lesson } key={ lesson.slug } />
                ))}
            </ul>
        </div>
    )
}

interface LessonReferencesProps {
    lesson: Presentation
}

function LessonReferences({ lesson }: LessonReferencesProps) {
    const classes = useStyles();
    return (
        <li key={ lesson.slug }>
            <Typography variant="h5">{ lesson.title }</Typography>
            <ul>
                { !lesson.references
                    ? <li>
                        This course does not currently have any references. Please reach out for more information though!
                    </li>
                    : (
                        lesson.references.map(reference => (
                            <li key={ reference.url }>
                                <Typography variant= "body1" display="inline">
                                    { reference.label }:
                                </Typography>
                                <MaterialLink href={ reference.url } className={ classes.referenceLink } target="__blank">
                                        { reference.url }
                                </MaterialLink>
                                <Typography variant="caption" display="block" className={ classes.referenceNote }>
                                    { reference.note }
                                </Typography>
                            </li>
                        ))
                    )
                }
            </ul>
        </li>
    )
}