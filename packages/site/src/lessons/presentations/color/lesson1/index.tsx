import { Presentation } from "../../../../../../presenter-core/src/services/types";
import * as simple from "./slides/simple-slides";

export const colors: Presentation = {
  title: "Color",
  description: "Why color is too hard and we should stop trying",
  slug: "color",
  slides: [...Object.values(simple)],
  examples: [],
};
