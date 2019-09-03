import { ComponentType } from "react";

export interface PresentationContext {
    pageNum: number;
    numPages: number;
}

export interface Presentation {
    title: string;
    description: string;
    slug: string;
    slides: ComponentType<{context: PresentationContext}>[];
    examples: ExampleDefinition[];
}

export interface CourseDefinition {
    lessons: Presentation[];
    description: string;
    title: string;
    slug: string;
}

export interface ExampleDefinition {
    code: ExampleCode;
    title: string;
}

export type ExampleCode = string | ComplexExample;

export interface ComplexExample {
    displayCode: string;
    formCode?: (userCode: string) => string;
}