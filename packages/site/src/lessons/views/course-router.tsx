import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { assertExists } from "../../common/functional-utils";
import { lesson1 } from "../lesson1/slides";
import { lesson10 } from "../lesson10/slides";
import { lesson11 } from "../lesson11/slides";
import { lesson12 } from "../lesson12/slides";
import { lesson2 } from "../lesson2/slides";
import { lesson3 } from "../lesson3/slides";
import { lesson4 } from "../lesson4/slides";
import { lesson5 } from "../lesson5/slides";
import { lesson6 } from "../lesson6/slides";
import { lesson7 } from "../lesson7/slides";
import { lesson9 } from "../lesson9/slides";
import { LessonListView } from "./lesson-list/lesson-list-view";
import { LessonResourceRouter } from "./presentation-resource-router";

const courses: CourseDefinition[] = [
    { 
        title: "Introduction to Web Technology and Programming",
        description: "Web Programming for Beginners",
        slug: "cis-1052",
        lessons: [ lesson1, lesson2, lesson3, lesson4,
                   lesson5, lesson6, lesson7, lesson9,
                   lesson10, lesson11, lesson12
        ]
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