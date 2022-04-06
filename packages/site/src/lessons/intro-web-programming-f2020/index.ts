import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { minimalBlocksDarkTheme } from "../../../../presenter-core/src/slides/themes/minimal-blocks";
import { lesson1 } from "./lesson1";
import { lesson10 } from "./lesson10";
import { lesson11 } from "./lesson11";
import { lesson12 } from "./lesson12";
import { lesson2 } from "./lesson2";
import { lesson3 } from "./lesson3";
import { lesson4 } from "./lesson4";
import { lesson5 } from "./lesson5";
import { lesson6 } from "./lesson6";
import { lesson7 } from "./lesson7";
import { lesson8 } from "./lesson8";
import { lesson9 } from "./lesson9";

export const introToWebProgrammingFall2020: CourseDefinition = {
  title: "Introduction to Web Technology and Programming",
  description:
    "Web Programming for Beginners. Learn HTML, CSS, and JavaScript" + " from the ground up. No experience required",
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
    lesson9,
    lesson10,
    lesson11,
    lesson12,
  ],
  icon: faNetworkWired,
  courseExtras: [
    { title: "Consolidated References", route: "references" },
    { title: "Midterm Study Guide", route: "midterm-study-guide" },
    { title: "Final Project", route: "final-project" },
    { title: "Final Study Guide", route: "final-study-guide" },
  ],
  theme: minimalBlocksDarkTheme,
};
