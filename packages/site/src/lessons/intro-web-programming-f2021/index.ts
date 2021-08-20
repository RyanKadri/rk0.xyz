import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { minimalBlocksDarkTheme } from "../../../../presenter-core/src/slides/themes/minimal-blocks";
import { lesson1 } from "./lesson1";

export const introToWebProgrammingFall2021: CourseDefinition = { 
    title: "Introduction to Web Technology and Programming",
    description: "Web Programming for Beginners. Learn HTML, CSS, and JavaScript"
     + " from the ground up. No experience required",
    slug: "cis1052-fall-2021",
    lessons: [ 
        lesson1,
    ],
    icon: faNetworkWired,
    courseExtras: [
    ],
    theme: minimalBlocksDarkTheme
};