import { GetStaticPaths, GetStaticProps } from "next";
import { SlideManager } from "../../../../../../packages/presenter-core/src/slides/slide-manager";
import { miscPresentations } from "../../../../../../packages/site/src/lessons/presentations";

export default function _SlideManager() {
  return <SlideManager course={miscPresentations} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [miscPresentations].flatMap(course =>
      course.lessons.flatMap(lesson =>
        lesson.slides.flatMap((_, i) => ({
          params: {
            lessonId: lesson.slug,
            slideNum: "" + i,
          },
        }))
      )
    ),
    fallback: false,
  };
};
