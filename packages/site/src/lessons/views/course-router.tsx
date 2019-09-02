import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { lesson1 } from "../lesson1/slides";
import { lesson2 } from "../lesson2/slides";
import { LessonListView } from "./lesson-list/lesson-list-view";
import { PresentationResourceRouter } from "./presentation-resource-router";

const courses: CourseDefinition[] = [
    { 
        title: "Introduction to Web Technology and Programming",
        description: "Web Programming for Beginners",
        slug: "cis-1052",
        lessons: [ lesson1, lesson2 ]
    }
];

export function CourseRouter({ match }: Props) {
    return (
        <Switch>
            <Route path={[ `${ match.url }`, `${ match.url }/:course` ]} exact render={({ match: courseMatch }) => 
                <LessonListView courses={ courses } 
                            currCourse={ courses.find(course => course.slug === courseMatch.params.course) }
                            baseUrl={ `${match.url}` } /> }
            />
            <Route path={`${ match.url }/:course/lessons/:lesson`} render={ ({ match }) => {
                const courseId = match.params.course;
                const course = courses.find(course => course.slug === courseId)!;
                const lesson = course.lessons.find(lesson => lesson.slug === match.params.lesson)!;
                return <PresentationResourceRouter course={ course }
                                                   lesson={ lesson }
                                                   baseUrl={ match.url } />
            } } />
        </Switch>
    )
}

interface Props extends RouteComponentProps<{ course: string }> {
}