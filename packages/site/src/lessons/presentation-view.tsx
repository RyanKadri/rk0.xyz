import React from "react";
import { RouteComponentProps } from "react-router";
import { CourseDefinition, PresentationViewer } from "../../../presenter-core/src";
import { lesson1 } from "./lesson1/slides";
import { lesson2 } from "./lesson2/slides";

const courses: CourseDefinition[] = [
    { 
        title: "Introduction to Web Technology and Programming",
        description: "Web Programming for Beginners",
        lessons: [ lesson1, lesson2 ] 
    }
]

export default ({ match }: RouteComponentProps) => (
    <PresentationViewer courses={ courses } baseUrl={ match.url.replace(/\/$/, "") } />
);