import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { NestedListInfo } from "../slide-components/info-list";
import { CenterMessageSlide } from "./center-message-slide";
import { ContentSlide } from "./content-slide";
import { FullSlide } from "./embed-slide";
import { TitleSlide } from "./title-slide";

export function generateContentSlide(title: string, points: (string | NestedListInfo | ReactElement)[]) {
    return function({ context }: {context: PresentationContext}) {
        return <ContentSlide Title={ title } Content={ points } context={ context } />
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
        return <FullSlide context={ context } Content={ content }></FullSlide>
    }
}