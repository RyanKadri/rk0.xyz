import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SlideManager } from "..";
import { ExampleViewer } from "../../../site/src/lessons/example-viewer";
import { PresentationSelector } from "../../../site/src/lessons/presentation-selector";
import { CourseDefinition } from "../services/types";

export function PresentationViewer({ courses, baseUrl }: Props) {
    return (
        <Switch>
            <Route path={`${baseUrl}/presentations`} exact render={() => 
                <PresentationSelector courses={courses} /> }
            />
            <Route path={`${baseUrl}/courses/:course/presentations/:presentation/slides/:slideNum`}
                render={ props =>
                    <SlideManager 
                        presentation={ courses[props.match.params.course].lessons[props.match.params.presentation] }
                        history={ props.history }
                        match={ props.match } />
            } />
            <Route path={`${baseUrl}/`} exact render={ () => <Redirect to={`${baseUrl}/presentations`} /> } />
            <Route path={`${baseUrl}/courses/:course/presentations/:presentation/examples`} exact
                render={ ({ match }) => <ExampleViewer examples={ courses[match.params.course].lessons[match.params.presentation].examples } /> } />
            <Route path={`${baseUrl}/courses/:course/presentations/:presentation/examples/:example`}
                render={ ({ match }) => 
                    <ExampleViewer examples={ courses[match.params.course].lessons[match.params.presentation].examples }
                                   currExample={ match.params.example } /> } />    
        </Switch>
    )
}

interface Props {
    courses: CourseDefinition[]
    baseUrl: string;
}