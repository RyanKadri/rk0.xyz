import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import prism from "prismjs";
import React from "react";
import { ExampleDefinition } from "../../../../../../packages/presenter-core/src/services/types";
import { SyntaxHighlightedBlock } from "../../../../../../packages/presenter-core/src/slides/components/code-block";
import { activeCourses } from "../../../../../../packages/site/src/lessons/views/activeCourses";
import { ExampleViewer } from "../../../../../../packages/site/src/lessons/views/example-viewer";

interface Props {
  examples: ExampleDefinition[];
  currExample: number;
  baseUrl: string;
  code: SyntaxHighlightedBlock;
}
export default function _ExampleViewer({ examples, currExample, baseUrl, code }: Props) {
  return (
    <>
      <Head>
        <title>Example - {examples?.[currExample]?.title ?? "Unknown"}</title>
      </Head>
      <ExampleViewer examples={examples} currExample={currExample} baseUrl={baseUrl} highlightedCode={code} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params = {} }) => {
  const currCourse = activeCourses.find(course => course.slug === params.courseId)!;
  const currLesson = currCourse.lessons.find(lesson => lesson.slug === params.lessonId)!;
  const exampleId = parseInt(params.exampleId as string, 10);
  const currExample = currLesson.examples[exampleId]!;
  const highlightedCode = prism.highlight(
    currExample.code,
    prism.languages[currExample.language],
    currExample.language
  );

  return {
    props: {
      examples: currLesson?.examples ?? [],
      currExample: exampleId,
      baseUrl: `/courses/${params.courseId}/lessons/${params.lessonId}/examples`,
      code: {
        raw: currExample.code,
        html: highlightedCode,
        language: currExample.language,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: activeCourses.flatMap(course =>
      course.lessons.flatMap(lesson =>
        lesson.examples.flatMap((_, i) => ({
          params: {
            courseId: course.slug,
            lessonId: lesson.slug,
            exampleId: "" + i,
          },
        }))
      )
    ),
    fallback: false,
  };
};
