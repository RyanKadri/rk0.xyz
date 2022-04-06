import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { minimalBlocksDarkTheme } from "../../../../presenter-core/src/slides/themes/minimal-blocks";
import { lesson1 } from "./lesson1";
import { lesson10 } from "./lesson10";
import { lesson11 } from "./lesson11";
import { lesson2 } from "./lesson2";
import { lesson3 } from "./lesson3";
import { lesson4 } from "./lesson4";
import { lesson5 } from "./lesson5";
import { lesson6 } from "./lesson6";
import { lesson7 } from "./lesson7";
import { lesson8 } from "./lesson8";
import { lesson9 } from "./lesson9";

export const introToWebProgrammingFall2021: CourseDefinition = {
  title: "Introduction to Web Technology and Programming",
  description:
    "Web Programming for Beginners. Learn HTML, CSS, and JavaScript" + " from the ground up. No experience required",
  slug: "cis1052-fall-2021",
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, lesson11],
  icon: faNetworkWired,
  courseExtras: [
    {
      route: "./glossary",
      title: "Glossary of Terms",
      description: "Some of the important terms we cover in class",
    },
    {
      route: "./references",
      title: "Consolidated References",
      description: "The references from all slides, in one place",
    },
    { route: "./midterm-study-guide", title: "Midterm Study Guide" },
    { route: "./practice-problems", title: "Practice Problems" },
    { route: "./final-project", title: "Final Project" },
    { route: "./final-study-guide", title: "Final Study Guide" },
  ],
  theme: minimalBlocksDarkTheme,
};
