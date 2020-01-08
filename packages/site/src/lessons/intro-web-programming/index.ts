import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { lesson1 } from "./lesson1/slides";
import { lesson10 } from "./lesson10/slides";
import { lesson11 } from "./lesson11/slides";
import { lesson12 } from "./lesson12/slides";
import { lesson13 } from "./lesson13/slides";
import { lesson2 } from "./lesson2/slides";
import { lesson3 } from "./lesson3/slides";
import { lesson4 } from "./lesson4/slides";
import { lesson5 } from "./lesson5/slides";
import { lesson6 } from "./lesson6/slides";
import { lesson7 } from "./lesson7/slides";
import { lesson9 } from "./lesson9/slides";

export const introToWebProgramming: CourseDefinition = { 
    title: "Introduction to Web Technology and Programming",
    description: "Web Programming for Beginners",
    slug: "cis-1052",
    lessons: [ lesson1, lesson2, lesson3, lesson4,
               lesson5, lesson6, lesson7, lesson9,
               lesson10, lesson11, lesson12, lesson13
    ]
};