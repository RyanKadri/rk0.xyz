import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { ExampleDefinition } from "../../../../../../packages/presenter-core/src/services/types";
import { activeCourses } from "../../../../../../packages/site/src/lessons/views/activeCourses";
import { ExampleViewer } from "../../../../../../packages/site/src/lessons/views/example-viewer";

interface Props {
    examples: ExampleDefinition[];
    currExample: number;
    baseUrl: string;
}
export default function _ExampleViewer({ examples, currExample, baseUrl }: Props) {
    return (
        <>
        <Head>
            <title>Example - { examples?.[currExample]?.title ?? "Unknown" }</title>
        </Head>
        <ExampleViewer examples={ examples } currExample={ currExample } baseUrl={ baseUrl } />
        </>
    )
};

export const getStaticProps: GetStaticProps<Props> = async ({ params = {}}) => {
    const currCourse = activeCourses.find(course => course.slug === params.courseId) ?? null;
    const currLab = currCourse?.lessons.find(lesson => lesson.slug === params.lessonId);

    return {
        props: {
            examples: currLab?.examples ?? [],
            currExample: parseInt(params.exampleId as string, 10),
            baseUrl: `/courses/${params.courseId}/lessons/${params.lessonId}/examples`
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: activeCourses.flatMap(course => 
            course.lessons.flatMap(lesson => 
                lesson.examples.flatMap((_, i) => ({ 
                    params: {
                        courseId: course.slug,
                        lessonId: lesson.slug,
                        exampleId: "" + i
                    } 
        })))),
        fallback: false
    }
}