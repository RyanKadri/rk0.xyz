import { GetStaticPaths, GetStaticProps } from "next";
import { activeCourses } from "../../../../../../packages/site/src/lessons/views/activeCourses";
import { ExampleViewer } from "../../../../../../packages/site/src/lessons/views/example-viewer";

export default function _ExampleViewer({ examples, currExample, baseUrl }) {
    return <ExampleViewer examples={ examples } currExample={ currExample } baseUrl={ baseUrl } />
};

export const getStaticProps: GetStaticProps = async (context) => {
    const currCourse = activeCourses.find(course => course.slug === context.params.courseId) ?? null;
    const currLab = currCourse.lessons.find(lesson => lesson.slug === context.params.lessonId);

    return {
        props: {
            examples: currLab?.examples ?? [],
            currExample: context.params.exampleId,
            baseUrl: `/courses/${context.params.courseId}/lessons/${context.params.lessonId}/examples`
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: activeCourses.flatMap(course => 
            course.lessons.flatMap(lesson => 
                lesson.examples.flatMap((_, i) => ({ 
                    params: {
                        courseId: course.slug,
                        lessonId: lesson.slug,
                        exampleId: "" + i
                    } 
        })))),
        fallback: false
    }
}