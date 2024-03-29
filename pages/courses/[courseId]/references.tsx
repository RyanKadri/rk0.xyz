import { Link as MaterialLink, Typography, styled } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { CourseDefinition, Presentation } from "../../../packages/presenter-core/src/services/types";
import { activeCourses } from "../../../packages/site/src/lessons/views/activeCourses";

type ReducedLesson = Pick<Presentation, "title" | "slug" | "references">;
type ReducedCourse = Pick<CourseDefinition, "title" | "slug"> & { lessons: ReducedLesson[] };
interface Props {
  currCourse: ReducedCourse;
}

const Container = styled("main")({
  padding: 16,
  "& .courseList": {
    listStyle: "none",
    "& > li": {
      marginTop: 16,
    },
  },
  "& .referenceLink": {
    marginLeft: 8,
  },
  "& .referenceNote": {
    marginLeft: 16,
  },
});

export default function ConsolidatedReferences({ currCourse }: Props) {
  return (
    <Container>
      <Head>
        <title>{`${currCourse.title} - References`}</title>
      </Head>
      <MaterialLink component={Link} href={`/courses/${currCourse.slug}`}>
        Back to Course
      </MaterialLink>
      <Typography variant="h4">Consolidated References: {currCourse.title}</Typography>
      <ul className={"courseList"}>
        {currCourse.lessons.map(lesson => (
          <LessonReferences lesson={lesson} key={lesson.slug} />
        ))}
      </ul>
    </Container>
  );
}

interface LessonReferencesProps {
  lesson: ReducedLesson;
}

function LessonReferences({ lesson }: LessonReferencesProps) {
  return (
    <li key={lesson.slug}>
      <Typography variant="h5">{lesson.title}</Typography>
      <ul>
        {!lesson.references ? (
          <li>This course does not currently have any references. Please reach out for more information though!</li>
        ) : (
          lesson.references.map(reference => (
            <li key={reference.url}>
              <Typography variant="body1" display="inline">
                {reference.label}:
              </Typography>
              <MaterialLink href={reference.url} className={"referenceLink"} target="__blank">
                {reference.url}
              </MaterialLink>
              <Typography variant="caption" display="block" className={"referenceNote"}>
                {reference.note}
              </Typography>
            </li>
          ))
        )}
      </ul>
    </li>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params = {} }) => {
  const currCourse = activeCourses.find(course => course.slug === params.courseId)!;
  return {
    props: {
      currCourse: {
        title: currCourse.title,
        slug: currCourse.slug,
        lessons: currCourse.lessons.map(lesson => ({
          slug: lesson.slug,
          title: lesson.description,
          references: lesson.references ?? null!,
        })),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: activeCourses.map(course => ({
      params: {
        courseId: course.slug,
      },
    })),
    fallback: false,
  };
};
