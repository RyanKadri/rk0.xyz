import { faHammer } from "@fortawesome/free-solid-svg-icons/faHammer";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { minimalBlocksDarkTheme } from "../../../../presenter-core/src/slides/themes/minimal-blocks";
import { lesson1 } from "./lesson1";
import { lesson2 } from "./lesson2";

export const practicumInSW2022: CourseDefinition = {
    title: "Practicum in Software Construction",
    description: "A practical introduction to some CS topics that you don't normally learn in school",
    slug: "practicum-spring-2022",
    lessons: [
        lesson1,
        lesson2,
    ],
    icon: faHammer,
    courseExtras: [
    ],
    theme: minimalBlocksDarkTheme
}