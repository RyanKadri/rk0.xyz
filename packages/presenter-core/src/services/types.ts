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
    lab?: LabDefinition
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

export interface LabDefinition {
    title: string;
    slug: string;
    LabView: ComponentType<{ lab: LabDefinition }>;
}

export type ExampleCode = string | ComplexExample;

export interface ComplexExample {
    displayCode: string;
    formCode?: (userCode: string) => string;
}