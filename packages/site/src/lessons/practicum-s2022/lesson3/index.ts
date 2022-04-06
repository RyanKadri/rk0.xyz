import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import {
  Annotations,
  AssignmentTestExample,
  AutomatedLessons,
  BadUnitTestExample,
  BddTesting,
  CucumberDependencies,
  CucumberTesting,
  FunctionalTests,
  HowDoesJunitWork,
  IntegrationTests,
  JUnitAnnotations,
  JUnitAssertions,
  JUnitIntro,
  ManualTestingApproach,
  ManualTestingDownsides,
  references,
  TddTesting,
  TestingPyramid,
  Title,
  TypesOfTests,
  UnitTests,
} from "./slides/simple";

export const lesson3: Presentation = {
  description: "Automated Testing",
  slug: "automated-testing",
  slides: [
    Title,
    JUnitIntro,
    Annotations,
    HowDoesJunitWork,
    ManualTestingApproach,
    ManualTestingDownsides,
    AutomatedLessons,
    TypesOfTests,
    UnitTests,
    BadUnitTestExample,
    IntegrationTests,
    FunctionalTests,
    TestingPyramid,
    JUnitAnnotations,
    JUnitAssertions,
    TddTesting,
    BddTesting,
    CucumberTesting,
    AssignmentTestExample,
    CucumberDependencies,
    generateReferencesSlide(references),
  ],
  references,
  examples: [],
  externalExamples: [
    {
      url: "https://github.com/RyanKadri/spring-2022-practicum-examples/tree/main/3-automated-testing",
    },
  ],
};
