import React from "react";
import { PresentationContext } from "../services/types";
import { CenterMessageSlide } from "./center-message-slide";
import { ContentSlide } from "./content-slide";

export function generateContentSlide(title: string, points: string[]) {
    return function({ context }: {context: PresentationContext}) {
        return <ContentSlide Title={ title } Content={ points } context={ context } />
    }
}

export function generateMessageSlide(message: string) {
    return function({ context }: {context: PresentationContext}) {
        return <CenterMessageSlide Message={ message } context={ context } />
    }
}