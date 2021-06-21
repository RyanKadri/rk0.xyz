import { GetStaticPaths, GetStaticProps } from "next";
import { SlideManager } from "../../../../../../packages/presenter-core/src/slides/slide-manager";
import { activeCourses } from "../../../../../../packages/site/src/lessons/views/activeCourses";

export default function _SlideManager() {
    return (
        <SlideManager /> 
    )
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
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