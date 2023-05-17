import { createStyles, makeStyles, Theme, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { CourseDefinition, Presentation } from "../../packages/presenter-core/src/services/types";
import { courseToStructuredData } from "../../packages/site/src/analytics";
import { activeCourses } from "../../packages/site/src/lessons/views/activeCourses";
import { LessonList } from "../../packages/site/src/lessons/views/lesson-list/lesson-list";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: "calc(100vh - 64px)",
      padding: 16,
    },
    title: {
      marginBottom: theme.spacing(2),
      fontSize: "1.75rem",
    },
  })
);

export default function LessonListView({ currCourse }: Props) {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Head>
        <title>{currCourse?.title ?? ""} - Lessons</title>
        <meta name="description" key="description" content={currCourse?.description} />
        <script
          type="application/ld+json"
          key="course-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseToStructuredData(currCourse!)) }}
        />
      </Head>
      {currCourse ? (
        <>
          <Typography variant="h5" className={classes.title}>
            {currCourse.title}
          </Typography>
          <LessonList course={currCourse} baseUrl={`/courses/${currCourse.slug}`} />
        </>
      ) : (
        "This course does not seem to exist"
      )}
    </main>
  );
}

type ReducedProps = Omit<CourseDefinition, "lessons"> & { lessons: Partial<Presentation> };
export const getStaticProps: GetStaticProps<{ currCourse: ReducedProps }> = async ({ params = {} }) => {
  const currCourse = activeCourses.find(course => course.slug === params.courseId)!;
  return {
    props: {
      currCourse: JSON.parse(
        JSON.stringify({
          ...currCourse,
          lessons: currCourse.lessons.map(lesson => ({
            ...lesson,
            examples: lesson.examples.map(example => ({ ...example, code: "" })),
            lab: lesson.lab ? { ...lesson.lab, content: "" } : null,
          })),
        })
      ),
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

interface Props {
  currCourse: CourseDefinition | undefined;
}
