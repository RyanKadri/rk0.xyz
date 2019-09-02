import React from "react";
import { Route, Switch } from "react-router";
import { CourseDefinition, Presentation } from "../../../../presenter-core/src/services/types";
import { SlideManager } from "../../../../presenter-core/src/slides/slide-manager";
import { ExampleViewer } from "./example-viewer";


export function PresentationResourceRouter({ lesson, baseUrl }: Props ) {
    return (
        <Switch>
            <Route path={`${baseUrl}/slides/:slideNum`}
                render={ props =>
                    <SlideManager presentation={ lesson } history={ props.history } match={ props.match } />
            } />
            <Route path={[`${baseUrl}/examples`, `${baseUrl}/examples/:example`]} exact
                render={ ({ match: innerMatch }) => 
                    <ExampleViewer examples={ lesson.examples }
                                baseUrl={ `${baseUrl}/examples` }
                                currExample={ innerMatch.params.example } /> } />
        </Switch>
    )
}

interface Props {
    course: CourseDefinition;
    lesson: Presentation;
    baseUrl: string;
}