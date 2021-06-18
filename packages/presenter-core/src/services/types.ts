import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ComponentType } from "react";
import { EvalResult, LoggedConsoleMessage } from "./js-execution";

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

export type ExampleDefinition = HTMLExample | JSExample;

interface HTMLExample {
    code: string;
    title: string;
    language: "html";
}

interface JSExample {
    code: string;
    title: string;
    language: "javascript";
    testCases: TestCaseMapping;
}

export type TestCaseMapping = { [functionName: string]: TestCase[] }

export interface TestCase {
    paramString?: string;
    expectedResult: string;
    parsingError?: boolean;
    actualResult?: EvalResult;
    messages?: LoggedConsoleMessage[];
}

export interface RecordingDefinition {
    link: string;
    comment?: string;
}

export interface LabDefinition {
    title: string;
    slug: string;
    path?: string;
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
}

export interface CourseExtraProps {
    baseUrl: string;
    course: CourseDefinition;
}