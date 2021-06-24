import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { ExampleDefinition } from "../../../../../packages/presenter-core/src/services/types";
import { activeCourses } from "../../../../../packages/site/src/lessons/views/activeCourses";
import { ExampleViewer } from "../../../../../packages/site/src/lessons/views/example-viewer";

interface Props {
    examples: ExampleDefinition[];
    currExample: number | null;
    baseUrl: string;
    currCourse: string;
}
export default function _ExampleViewer(props: Props) {
    return (
        <>
        <Head>
            <title>{props.currCourse} - Examples</title>
        </Head>
        <ExampleViewer { ...props} />
        </>
    )
} 

export const getStaticProps: GetStaticProps<Props> = async ({ params = {}}) => {
    const currCourse = activeCourses.find(course => course.slug === params.courseId) ?? null;
    const currClass = currCourse?.lessons.find(lesson => lesson.slug === params.lessonId);

    return {
        props: {
            currCourse: currClass?.title ?? "",
            examples: currClass?.examples ?? [],
            currExample: null,
            baseUrl: `/courses/${params.courseId}/lessons/${params.lessonId}/examples`
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: activeCourses.flatMap(course => 
            course.lessons.flatMap(lesson => ({
                    params: {
                        courseId: course.slug,
                        lessonId: lesson.slug
                    } 
        }))),
        fallback: false
    }
}