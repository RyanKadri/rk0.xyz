import { GetStaticPaths, GetStaticProps } from "next";
import { SlideManager } from "../../../../../../packages/presenter-core/src/slides/slide-manager";
import { practicumInSW2022 } from "../../../../../../packages/site/src/lessons/practicum-s2022";

export default function _SlideManager() {
  return <SlideManager course={practicumInSW2022} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [practicumInSW2022].flatMap(course =>
      course.lessons.flatMap(lesson =>
        lesson.slides.flatMap((_, i) => ({
          params: {
            courseId: course.slug,
            lessonId: lesson.slug,
            slideNum: "" + i,
          },
        }))
      )
    ),
    fallback: false,
  };
};
