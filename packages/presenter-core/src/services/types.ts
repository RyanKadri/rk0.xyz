import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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
    recording?: RecordingDefinition;
    lab?: LabDefinition;
    references?: Reference[]
}

export interface CourseGroup {
    groupName: string;
    courses: CourseDefinition[];
    startExpanded: boolean;
}

export interface CourseDefinition {
    lessons: Presentation[];
    description: string;
    title: string;
    slug: string;
    icon?: IconDefinition;
}

export interface ExampleDefinition {
    code: ExampleCode;
    title: string;
}

export interface RecordingDefinition {
    link: string;
    comment?: string;
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

export interface Reference {
    url: string;
    label: string;
    note?: string;
}