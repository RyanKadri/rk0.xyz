import { Typography } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { assertExists } from "../../common/functional-utils";
import { introToWebProgramming } from "../archived/intro-web-programming";
import { introToWebProgrammingFall2020 } from "../intro-web-programming";
import { practicumInSoftwareConstruction } from "../sw-construction";
import { LessonListView } from "./lesson-list/lesson-list-view";
import { LessonResourceRouter } from "./presentation-resource-router";

const courses: CourseDefinition[] = [
    introToWebProgrammingFall2020,
    introToWebProgramming,
    practicumInSoftwareConstruction
];

export function CourseRouter() {
    const routeMatch = useRouteMatch<{ course: string }>();
    const currCourse = courses.find(course => course.slug === routeMatch.params.course);
    if(!currCourse) {
        return <Typography>Hmm. That course does not seem to exist</Typography>
    }

    return (
        <Switch>
            <Route path={ routeMatch.path } exact>    
                <LessonListView currCourse={ currCourse } />
            </Route> 
            
            <Route path={`${routeMatch.path}/lessons/:lesson`} render={ ({ match }) => {
                const lesson = currCourse.lessons.find(lesson => lesson.slug === match.params.lesson)!;
                return <LessonResourceRouter lesson={ lesson } />
            } } />
            <Route path={`${routeMatch.path}/labs/:lab`} render={({ match: innerMatch }) => {
                const lab = assertExists(
                    currCourse.lessons.filter(lesson => lesson.lab)
                        .map(lesson => lesson.lab!)
                        .find(lab => lab.slug === innerMatch.params.lab),
                    `Could not find lab with slug ${ innerMatch.params.lab }`
                );
                return <lab.LabView lab={lab} />;
            }} />
            { (currCourse.courseExtras || []).map(extra => (
                <Route path={`${ routeMatch.path}/${extra.route}`} key={ extra.route }>
                    <extra.View course={ currCourse } baseUrl={ routeMatch.url } />
                </Route>
            )) }
        </Switch>
    )
}