import { History } from "history";
import React, { ReactNode, useEffect } from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router";

interface GAProps {
    history: History;
    children?: ReactNode;
}

function _GAWrapper({ history, children }: GAProps) {
    useEffect(() => {
        ReactGA.initialize("UA-146806194-1");
        ReactGA.pageview(location.pathname);
        history.listen(entry => ReactGA.pageview(entry.pathname));
    }, [])

    return <>{children}</>;
}

export const GAWrapper = withRouter(_GAWrapper)

export enum TrackedCategories {
    LEARNING_TOOLS = "Learning Tools",
}

export enum TrackedActions {
    EDITED_PLAYGROUND = "Tweaked Playground Example",
}
