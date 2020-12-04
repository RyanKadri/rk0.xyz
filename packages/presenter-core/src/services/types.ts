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
    courseExtras?: CourseExtra[];
}

export interface ExampleDefinition {
    code: string;
    title: string;
    language: "html" | "javascript";
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

export interface Reference {
    url: string;
    label: string;
    note?: string;
}

export interface CourseExtra {
    title: string;
    description?: string;
    route: string;
    View: React.ComponentType<CourseExtraProps>;
}

export interface CourseExtraProps {
    baseUrl: string;
    course: CourseDefinition;
}