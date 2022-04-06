import { Presentation } from "../../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../../shared/references-slide";
import * as simple from "./slides/simple-slides";

export const v8Optimizations: Presentation = {
  title: "V8 Optimizations",
  description: "V8 Optimizations",
  slug: "v8-optimizations",
  slides: [
    simple.TitleSlide,
    simple.InterpretedOrCompiled,
    simple.CompilerPipeline,
    simple.DeoptDefinition,
    simple.Disclaimer1,
    simple.Disclaimer2,
    simple.Disclaimer3,
    simple.WhyHaveTalk,
    simple.FloatingPointIteration,
    simple.FloatingPointIteration2,
    simple.FloatingPointIteration3,
    simple.WaitButWhyIterate,
    simple.NumberRepresentations,
    simple.FastProps,
    simple.WaitButWhyFastProps,
    simple.HiddenClasses,
    simple.HiddenClassesCompare,
    simple.HoleyArrays,
    simple.HoleyArraysWBY,
    simple.ArrayWithGaps,
    simple.YourOpinionMan,
    simple.D8Intro,
    simple.RealReactPR,
    generateReferencesSlide(simple.references),
  ],
  examples: [],
};
