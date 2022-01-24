import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";
import { ResponseVisualizer } from "../../../shared/response-visualizer";

export function ResponseTemplate({ context }: Props) {
    const responseBody = synJS`
{
    "title": "My Note",
    "note": "This is a note",
    "tags": ["boring", "note"],
    "noteId": "da45f426-3e4e-4faf-95c5-ec02490bbe7d",
    "created": 1605037559804
}`;

    return (
        <ContentSlide Title='HTTP Response' context={context} Content={
            <ResponseVisualizer statusCode="200 (OK)"
                                headers={[
                                    { name: "Content-Type", value: "application/json; charset=utf-8" },
                                    { name: "Access-Control-Allow-Origin", value: "*" }
                                ]}
                                body={ responseBody } />
        } />
    );
}

interface Props {
    context: PresentationContext
}