import { Link as MaterialLink, makeStyles, Typography } from "@material-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CourseDefinition, Presentation } from "../../../packages/presenter-core/src/services/types";
import { activeCourses } from "../../../packages/site/src/lessons/views/activeCourses";

type ReducedLesson = Pick<Presentation, "title" | "slug" | "references">
type ReducedCourse = Pick<CourseDefinition, "title" | "slug"> & { lessons: ReducedLesson[] }
interface Props {
    currCourse: ReducedCourse;
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

export default function ConsolidatedReferences({ currCourse }: Props) {
    const classes = useStyles();
    return (
        <main className={ classes.container }>
            <Head>
                <title>{currCourse.title} - References</title>
            </Head>
            <Link href={`/courses/${ currCourse.slug }`} passHref>
                <MaterialLink>Back to Course</MaterialLink>
            </Link>
            <Typography variant="h4">
                Consolidated References: { currCourse.title }
            </Typography>
            <ul className={ classes.courseList }>
                { currCourse.lessons.map(lesson => (
                    <LessonReferences lesson={ lesson } key={ lesson.slug } />
                ))}
            </ul>
        </main>
    )
}

interface LessonReferencesProps {
    lesson: ReducedLesson
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

export const getStaticProps: GetStaticProps<Props> = async ({ params = {}}) => {
    const currCourse = activeCourses.find(course => course.slug === params.courseId)!;
    return {
        props: {
            currCourse: {
                title: currCourse.title,
                slug: currCourse.slug,
                lessons: currCourse.lessons.map(lesson => ({
                    slug: lesson.slug,
                    title: lesson.title,
                    references: lesson.references ?? null!
                }))
            }
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
        fallback: false
    }
}