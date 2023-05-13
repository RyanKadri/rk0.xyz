import {
  generateDefinitionSlide,
  generateMediaSlide,
  generateTitleSlide,
} from "../../../../../../../presenter-core/src/slides/generate-slide";
import blending from "./blending.jpg";
import colorCube from "./colorCube.png";
import colorWheel from "./colorWheel.jpg";
import { ColorsOfLight } from "./colorsOfLight";
import theCouch from "./couch.jpg";
import fingerPaint from "./fingerPaint.jpg";
import lab from "./lab.png";
import pixel from "./pixels.gif";
import prism from "./prism.jpg";
import rodsAndCones from "./rodsAndCones.webp";
import royGBiv from "./roygbiv.jpg";
import spectralSensitivity from "./spectralSensitivity.png";
import spectrum from "./spectrum.webp";
import theDress from "./theDress.jpg";

export const TitleSlide = generateTitleSlide("Color is the worst", "and we should stop trying");

export const ASimplerTime = generateMediaSlide(<img src={fingerPaint.src} />, undefined, "A simpler time");
export const RoyGBiv = generateMediaSlide(<img src={royGBiv.src} />);
export const FallOfMan = generateMediaSlide(<img src={blending.src} />, undefined, "The fall of man");
export const ColorWheel = generateMediaSlide(<img src={colorWheel.src} />);
export const FallOfMan2 = generateMediaSlide(<img src={prism.src} />, undefined, "The fall of man - part 2");
export const Spectrum = generateMediaSlide(
  <img src={spectrum.src} style={{ width: 1600, height: "unset" }} />,
  undefined,
  "Color is actually a wavelength of light."
);
export const ColorsLight = ColorsOfLight();

export const WhatIf = generateDefinitionSlide(
  "What if the color that you see as red, I actually see as purple but we just learned to call it the same thing??",
  "- Some jerk"
);
export const RodsAndCones = generateMediaSlide(
  <img src={rodsAndCones.src} />,
  undefined,
  "I guess our eyes are how we ACTUALLY see color"
);
export const Sensitivity = generateMediaSlide(<img src={spectralSensitivity.src} />);
export const WhatIf2 = generateDefinitionSlide(
  'What if the color that I see as red, you see as an infinite variation of slightly different colors that are hopefully all red-ish and neither of us is really "right"?',
  ""
);
export const Pixel = generateMediaSlide(<img src={pixel.src} />);
export const ColorCube = generateMediaSlide(
  <img src={colorCube.src} />,
  undefined,
  "Conclusion 1: Color is not a cube"
);
export const Lab = generateMediaSlide(<img src={lab.src} />, undefined, "It looks more like this");

export const Conclusion1 = generateMediaSlide(
  <img src={theDress.src} />,
  undefined,
  "Conclusion 2: The dress is objectively white and gold"
);
export const Conclusion2 = generateMediaSlide(
  <img src={theCouch.src} />,
  undefined,
  "Conclusion 3: This couch is grey (not blue)"
);
