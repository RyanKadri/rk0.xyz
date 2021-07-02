import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { useMarkdownLabStyles } from "../../../../packages/site/src/lessons/shared/lab";
import { activeCourses } from "../../../../packages/site/src/lessons/views/activeCourses";

interface Props {
    labContent: string;
    title: string;
    description: string | null;
}
export default function LabView({ labContent, title, description }: Props) {
    const classes = useMarkdownLabStyles();

    return (
        <>
        <Head>
            <title>{title}</title>
            { description && (
                <meta name="description" key="description" content={ description } />
            )}
        </Head>
        <main className={ classes.container } 
              dangerouslySetInnerHTML={ { __html: labContent } } />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params = {}}) => {
    const currCourse = activeCourses.find(course => course.slug === params.courseId)!;
    const currLab = currCourse.lessons.find(lesson => lesson?.lab?.slug === params.labId)!.lab
    
    const labContent = !currLab
        ? null
        : typeof currLab.content === "string"
            ? currLab.content
            : (await currLab.content)?.default

    return {
        props: {
            labContent,
            title: currLab?.title,
            description: currLab?.description ?? null
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: activeCourses.flatMap(course => course.lessons.map(lesson => ({ 
            params: {
                courseId: course.slug,
                labId: (lesson.lab?.content ? lesson.lab?.slug : null) as string
            } 
        }))).filter(path => path.params.labId),
        fallback: false
    }
}