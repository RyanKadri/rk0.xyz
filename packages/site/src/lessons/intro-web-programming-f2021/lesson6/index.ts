import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as recap from "../lesson5/slides/simple";
import changingPage from "./examples/change-page.html";
import counter from "./examples/counter.html";
import createContent from "./examples/create-content.html";
import eventInput from "./examples/event-input.html";
import querySelector from "./examples/query-selector.html";
import cssAndJs from "./examples/text-input.html";
import * as simple from "./slides/simple";
import { VariablesAsLabels } from "./slides/variables-as-labels";

export const lesson6: Presentation = {
  title: `A Quarter Mile at a Time`,
  description: "JavaScript and the DOM",
  slug: "js-and-dom",
  slides: [
    simple.TitleSlide,
    simple.Recap,
    recap.DataTypes,
    recap.VariablesExamples,
    VariablesAsLabels,
    recap.Operators,
    recap.ConditionalExample,
    recap.WhileLoops,
    recap.ForLoops,
    recap.FunctionsExample,
    recap.ArraysExample,
    recap.Objects,
    simple.MapArrayImmutable,
    simple.FirstNameAlphabetically,
    simple.LogVsReturn,
    simple.LogVsReturnPart2,
    simple.HowConnect,
    simple.TheProblem,
    simple.DOM,
    simple.DocumentObject,
    simple.ScriptTag,
    simple.WaitWhyBodyTag,
    simple.UserInputIntro,
    generateReferencesSlide(simple.references),
  ],
  examples: [
    { title: "Changing the Page with JS", language: "html", code: changingPage },
    { title: "QuerySelector", language: "html", code: querySelector },
    { title: "Creating Content", language: "html", code: createContent },
    { title: "Responding to Events", language: "html", code: eventInput },
    { title: "Counter", language: "html", code: counter },
    { title: "CSS + JS", language: "html", code: cssAndJs },
  ],
  recording: {
    link: "https://youtu.be/lZBes_p8Q5M",
  },
  lab: {
    title: "String Manipulation and Forms",
    slug: "strings-and-forms",
  },
  references: simple.references,
};
