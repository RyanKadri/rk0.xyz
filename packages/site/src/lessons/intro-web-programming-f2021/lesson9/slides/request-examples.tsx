import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";
import { RequestVisualizer } from "../../../shared/request-visualizer";

export function RequestTemplate({ context }: Props) {
    return (
        <ContentSlide Title='Request Template' context={context} Content={
            <RequestVisualizer method={null} headers={ null } body={ null } url={ null } />
        } />
    );
}

// TODO - This is helpful. Make this a shared comp when it's not 1AM
export function BadRequest({ context }: Props) {
    return (
        <ContentSlide Title='What are you doing?!' context={context} Content={
            <RequestVisualizer method="Comment"
                               url="https://www.facebook.com"
                               headers={[
                                   { name: "Comment-Text", value: "Fake News!" },
                                   { name: "Post-ID", value: "1234" }
                               ]}
                               body={ null } />
        } />
    );
}

export function OkayRequest({ context }: Props) {
    const body = synJS`
    { 
        "postId": "1234", 
        "commentText": "I respectfully disagree"
    }`
    return (
        <ContentSlide Title='Better...' context={context} Content={
            <RequestVisualizer method="POST"
                               url="https://www.facebook.com/create-comment"
                               headers={ null }
                               body={ body } />
        } />
    );
}

export function RestRequest({ context }: Props) {
    const body = synJS`
    { 
        "commentText": "Here are a couple quotes from sources you respect that seem to argue otherwise"
    }`
    return (
        <ContentSlide Title='REST Request' context={context} Content={
            <RequestVisualizer method="POST"
                               url="https://www.facebook.com/posts/1234/comment"
                               headers={[
                                   {name: "Content-Type", value: "application/json"},
                                   {name: "Accept", value: "application/json"},
                                   {name: "...", value: "..." }
                               ]}
                               body={ body } />
        } />
    );
}

interface Props {
    context: PresentationContext
}