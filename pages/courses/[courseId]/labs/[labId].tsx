import fs from "fs/promises";
import marked from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useMarkdownLabStyles } from "../../../../packages/site/src/lessons/shared/lab";
import { activeCourses } from "../../../../packages/site/src/lessons/views/activeCourses";

export default function LabView({ labContent }: Props) {
    const router = useRouter();
    const classes = useMarkdownLabStyles();

    return (
        <div className={ classes.container } dangerouslySetInnerHTML={ { __html: labContent } } />
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currCourse = activeCourses.find(course => course.slug === context.params.courseId) ?? null;
    const currLab = currCourse.lessons.find(lesson => lesson?.lab?.slug === context.params.labId)?.lab ?? null;
    const labContent = currLab && currLab.path
        ? marked(await fs.readFile(currLab.path, { encoding: "utf-8" }))
        : null


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
                labId: lesson.lab?.slug
            } 
        }))).filter(path => path.params.labId),
        fallback: true
    }
}

interface Props {
    labContent: string;
}