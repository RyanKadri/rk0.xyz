import { GetStaticPaths, GetStaticProps } from "next";
import { SlideManager } from "../../../../../../packages/presenter-core/src/slides/slide-manager";
import { practicumInSW2021 } from "../../../../../../packages/site/src/lessons/sw-construction";

export default function _SlideManager() {
    return (
        <SlideManager course={ practicumInSW2021 } /> 
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
        paths: [practicumInSW2021].flatMap(course => 
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