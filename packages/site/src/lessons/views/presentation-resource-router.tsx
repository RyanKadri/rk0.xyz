import React from "react";
import { Route, Switch } from "react-router";
import { CourseDefinition, Presentation, SlideManager } from "../../../../presenter-core/src";
import { ExampleViewer } from "./example-viewer";


export function PresentationResourceRouter({ presentation, course, baseUrl }: Props ) {
    return (
        <Switch>
            <Route path={`${baseUrl}/slides/:slideNum`}
                render={ props =>
                    <SlideManager presentation={ presentation } history={ props.history } match={ props.match } />
            } />
            <Route path={[`${baseUrl}/examples`, `${baseUrl}/examples/:example`]} exact
                render={ ({ match: innerMatch }) => 
                    <ExampleViewer examples={ presentation.examples }
                                baseUrl={ `${baseUrl}/examples` }
                                currExample={innerMatch.params.example } /> } />
        </Switch>
    )
}

interface Props {
    course: CourseDefinition;
    presentation: Presentation;
    baseUrl: string;
}