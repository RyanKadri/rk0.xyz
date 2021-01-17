import { faHammer } from "@fortawesome/free-solid-svg-icons/faHammer";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { lesson1 } from "./lesson1";

export const practicumInSW2021: CourseDefinition = {
    title: "Practicum in Software Construction",
    description: "A practical introduction to some CS topics that you don't normally learn in school",
    slug: "cis-4360",
    lessons: [
        lesson1,
    ],
    icon: faHammer
}