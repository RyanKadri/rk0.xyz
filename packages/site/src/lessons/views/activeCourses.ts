import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { introToWebProgrammingFall2020 } from "../intro-web-programming-f2020";
import { introToWebProgrammingFall2021 } from "../intro-web-programming-f2021";
import { practicumInSW2022 } from "../practicum-s2022";
import { practicumInSW2021 } from "../sw-construction";

export const activeCourses: CourseDefinition[] = [
    introToWebProgrammingFall2021,
    introToWebProgrammingFall2020,
    practicumInSW2021,
    practicumInSW2022
];