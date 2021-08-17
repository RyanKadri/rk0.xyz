import { GetStaticPaths, GetStaticProps } from "next";
import { SlideManager } from "../../../../../../packages/presenter-core/src/slides/slide-manager";
import { introToWebProgrammingFall2020 } from "../../../../../../packages/site/src/lessons/intro-web-programming-f2020";

export default function _SlideManager() {
    return (
        <SlideManager course={ introToWebProgrammingFall2020 } /> 
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
        paths: [introToWebProgrammingFall2020].flatMap(course => 
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