import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { assertExists } from "../../common/functional-utils";
import { introToWebProgramming } from "../intro-web-programming";
import { practicumInSoftwareConstruction } from "../sw-construction";
import { CourseSelector } from "./lesson-list/course-selector";
import { LessonListView } from "./lesson-list/lesson-list-view";
import { LessonResourceRouter } from "./presentation-resource-router";


const courses: CourseDefinition[] = [
    introToWebProgramming,
    practicumInSoftwareConstruction
];

export function CourseRouter({ match }: Props) {
    return (
        <Switch>
            <Route path={ `${ match.url }/:course` } exact render={({ match: courseMatch }) => 
                <LessonListView currCourse={ courses.find(course => course.slug === courseMatch.params.course) }
                            baseUrl={ `${match.url}` } /> }
            />
            <Route path={ `${ match.url }/` } exact>
                <CourseSelector courses={ courses } baseUrl={ match.url } />
            </Route>
            <Route path={`${ match.url }/:course/lessons/:lesson`} render={ ({ match }) => {
                const courseId = match.params.course;
                const course = assertExists(
                    courses.find(course => course.slug === courseId),
                    `Expected course with slug ${ courseId } but could not find it`
                );
                const lesson = course.lessons.find(lesson => lesson.slug === match.params.lesson)!;
                return <LessonResourceRouter course={ course }
                                                   lesson={ lesson }
                                                   baseUrl={ match.url } />
            } } />
            <Route path={`${ match.url }/:course/labs/:lab`} render={({ match: innerMatch }) => {
                const course = assertExists(
                    courses.find(course => course.slug === innerMatch.params.course),
                    `Expected course with slug ${ innerMatch.params.course } but couldn't find it`
                );
                const lab = assertExists(
                    course.lessons.filter(lesson => lesson.lab)
                        .map(lesson => lesson.lab!)
                        .find(lab => lab.slug === innerMatch.params.lab),
                    `Could not find lab with slug ${ innerMatch.params.lab }`
                );
                return <lab.LabView lab={lab} />;
            }}/>
        </Switch>
    )
}

interface Props extends RouteComponentProps {
}