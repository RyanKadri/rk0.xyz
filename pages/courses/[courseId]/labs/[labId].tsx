import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useMarkdownLabStyles } from "../../../../packages/site/src/lessons/shared/lab";
import { activeCourses } from "../../../../packages/site/src/lessons/views/activeCourses";

export default function LabView({ labContent }: Props) {
    const classes = useMarkdownLabStyles();

    return (
        <div className={ classes.container } dangerouslySetInnerHTML={ { __html: labContent } } />
    )
}

export const getStaticProps: GetStaticProps = async ({ params = {}}) => {
    const currCourse = activeCourses.find(course => course.slug === params.courseId) ?? null;
    const currLab = currCourse?.lessons.find(lesson => lesson?.lab?.slug === params.labId)?.lab ?? null;
    
    const labContent = currLab?.content ?? null;

    return {
        props: {
            labContent
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

interface Props {
    labContent: string;
}