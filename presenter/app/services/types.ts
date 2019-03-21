import { ComponentType } from "react";

export interface PresentationContext {
    pageNum: number;
    numPages: number;
}

export interface Presentation {
    title: string;
    description: string;
    slides: ComponentType<{context: PresentationContext}>[];
}