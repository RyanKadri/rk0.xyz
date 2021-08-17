import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";
import { RequestVisualizer } from "../../../shared/request-visualizer";

export function RequestTemplate({ context }: Props) {
    const bodyExample = synJS`
{
    "title": "My Note",
    "note": "This is a note",
    "tags": ["boring", "note"]
}`;

    return (
        <ContentSlide Title='HTTP Request' context={context} Content={
            <RequestVisualizer method="POST"
                               url="https://spy-notes-api.rk0.xyz/users/3ff1cbc9-e6d3-496b-a696-44c0a2cd9fe1/notes"
                               headers={[
                                   { name: "Content-Type", value: "application/json" },
                                   { name: "Accept-Encoding", value: "gzip, deflate, br" }
                               ]}
                               body={bodyExample} />
        } />
    );
}

interface Props {
    context: PresentationContext
}