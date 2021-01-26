import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Presentation } from "../../../../presenter-core/src/services/types";
import { SlideManager } from "../../../../presenter-core/src/slides/slide-manager";
import { ExampleViewer } from "./example-viewer";

export function LessonResourceRouter({ lesson }: Props ) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/slides/:slideNum`}
                render={ props =>
                    <SlideManager presentation={ lesson } history={ props.history } match={ props.match } />
            } />
            <Route path={[`${match.path}/examples`, `${match.path}/examples/:example`]} exact
                render={ ({ match: innerMatch }) => 
                    <ExampleViewer examples={ lesson.examples }
                                baseUrl={ `${match.url}/examples` }
                                currExample={ innerMatch.params.example } /> } />
        </Switch>
    )
}

interface Props {
    lesson: Presentation;
}