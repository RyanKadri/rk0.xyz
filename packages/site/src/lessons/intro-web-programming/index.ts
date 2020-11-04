import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { ConsolidatedReferences } from "../views/lesson-list/consolidated-references";
import { FinalProject } from "./final-project/final-project";
import { lesson1 } from "./lesson1";
import { lesson2 } from "./lesson2";
import { lesson3 } from "./lesson3";
import { lesson4 } from "./lesson4";
import { lesson5 } from "./lesson5";
import { lesson6 } from "./lesson6";
import { lesson7 } from "./lesson7";
import { lesson8 } from "./lesson8";
import { lesson9 } from "./lesson9";
import { MidtermStudyGuide } from "./midterm-prep/study-guide";

export const introToWebProgrammingFall2020: CourseDefinition = { 
    title: "Introduction to Web Technology and Programming",
    description: "Web Programming for Beginners",
    slug: "cis-1052",
    lessons: [ 
        lesson1,
        lesson2,
        lesson3,
        lesson4,
        lesson5,
        lesson6,
        lesson7,
        lesson8,
        lesson9
    ],
    icon: faNetworkWired,
    courseExtras: [
        { title: "Consolidated References", route: "references", View: ConsolidatedReferences },
        { title: "Midterm Study Guide", route: "midterm-study-guide", View: MidtermStudyGuide },
        { title: "Final Project", route: "final-project", View: FinalProject }
    ]
};