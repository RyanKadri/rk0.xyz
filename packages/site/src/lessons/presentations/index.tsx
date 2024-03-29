import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { CourseDefinition } from "../../../../presenter-core/src/services/types";
import { minimalBlocksDarkTheme } from "../../../../presenter-core/src/slides/themes/minimal-blocks";
import { colors } from "./color/lesson1";
import { v8Optimizations } from "./v8-optimizations/lesson1";

export const miscPresentations: CourseDefinition = {
  title: "Miscellaneous Presentations",
  description: "Things and stuff",
  slug: "misc",
  lessons: [v8Optimizations, colors],
  icon: faNetworkWired,
  courseExtras: [],
  theme: minimalBlocksDarkTheme,
};
