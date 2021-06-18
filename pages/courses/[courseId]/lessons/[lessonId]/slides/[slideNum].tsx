import { GetStaticPaths, GetStaticProps } from "next";
import { SlideManager } from "../../../../../../packages/presenter-core/src/slides/slide-manager";
import { activeCourses } from "../../../../../../packages/site/src/lessons/views/activeCourses";

export default function _SlideManager({ courseSlug, lessonSlug, slideNum }) {
    return (
        <SlideManager courseSlug={ courseSlug } lessonSlug={ lessonSlug } slideNum={ slideNum } /> 
    )
};

export const getStaticProps: GetStaticProps = async ({ params = {}}) => {
    return {
        props: {
            courseSlug: params.courseId,
            lessonSlug: params.lessonId,
            slideNum: parseInt(params.slideNum as string, 10)
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: activeCourses.flatMap(course => 
            course.lessons.flatMap(lesson => 
                lesson.slides.flatMap((_, i) => ({ 
                    params: {
                        courseId: course.slug,
                        lessonId: lesson.slug,
                        slideNum: "" + i
                    } 
        })))),
        fallback: false
    }
}