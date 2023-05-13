import { Presentation } from "../../../../../../presenter-core/src/services/types";
import * as simple from "./slides/simple-slides";

export const colors: Presentation = {
  title: "Color",
  description: "Why color is too hard and we should stop trying",
  slug: "color",
  slides: [
    simple.TitleSlide,
    simple.ASimplerTime,
    simple.RoyGBiv,
    simple.FallOfMan,
    simple.ColorWheel,
    simple.FallOfMan2,
    simple.Spectrum,
    simple.ColorsLight,
    simple.WhatIf,
    simple.RodsAndCones,
    simple.Sensitivity,
    simple.WhatIf2,
    simple.Pixel,
    simple.ColorCube,
    simple.Lab,
    simple.Conclusion1,
    simple.Conclusion2,
  ],
  examples: [],
};
