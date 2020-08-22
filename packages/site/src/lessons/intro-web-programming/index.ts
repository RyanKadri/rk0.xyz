import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { lesson1 } from "./lesson1/slides";

export const introToWebProgrammingFall2020: CourseDefinition = { 
    title: "Introduction to Web Technology and Programming",
    description: "Web Programming for Beginners",
    slug: "cis-1052",
    lessons: [ lesson1
    ],
    icon: faNetworkWired
};