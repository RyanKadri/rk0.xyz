import { ComponentType } from "react";

export interface PresentationContext {
    pageNum: number;
    numPages: number;
}

export interface Presentation {
    title: string;
    description: string;
    slides: ComponentType<{context: PresentationContext}>[];
    examples: ExampleDefinition[];
}

export interface CourseDefinition {
    lessons: Presentation[];
    description: string;
    title: string;
}

export interface ExampleDefinition {
    code: string;
    title: string;
}