import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { NestedListInfo } from "../slide-components/info-list";
import { CenterMessageSlide } from "./center-message-slide";
import { ContentSlide, ContentSlideOptions } from "./content-slide";
import { FullSlide } from "./embed-slide";
import { MediaSlide } from "./media-slide";
import { TitleSlide } from "./title-slide";

export function generateContentSlide(title: string, points: (string | NestedListInfo | ReactElement)[], options?: ContentSlideOptions) {
    return function({ context }: {context: PresentationContext}) {
        return <ContentSlide Title={ title } Content={ points } context={ context } options={ options } />
    }
}

export function generateMessageSlide(message: string | ReactElement) {
    return function({ context }: {context: PresentationContext}) {
        return <CenterMessageSlide Message={ message } context={ context } />
    }
}

export function generateTitleSlide(title: string, subtitle: string) {
    return function({context}: { context: PresentationContext }) {
        return <TitleSlide Title={title} Subtitle={subtitle} context={context} />
    }
}

export function generateFullSlide(content: ReactElement) {
    return function({ context }: { context: PresentationContext }) {
        return <FullSlide context={ context } Content={ content } />
    }
}

export function generateMediaSlide(
    media: ReactElement, credit?: ReactElement | string, title?: ReactElement | string,
) {
    return function({ context }: { context: PresentationContext }) {
        return <MediaSlide context={context} Media={media} Title={title} Credit={ credit } />
    }
}