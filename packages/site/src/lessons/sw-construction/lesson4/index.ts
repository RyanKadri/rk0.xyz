import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AssignmentTestExample, BadUnitTestExample, BddTesting, ClassQuestion, CucumberDependencies, CucumberTesting, FunctionalTests, IntegrationTests, JUnitAnnotations, JUnitAssertions, JUnitTesting, ManualTestingApproach, ManualTestingDownsides, references, TddTesting, TestingPortions, TestingPyramid, Title, TypesOfTests, UnitTests, WriteAnExpressionEngine } from "./slides/simple";

export const lesson4: Presentation = {
    title: 'Automated Testing',
    description: "Using JUnit and Cucumber to test your code",
    slug: "automated-testing",
    slides: [
        Title,
        ClassQuestion,
        ManualTestingApproach,
        ManualTestingDownsides,
        TestingPortions,
        TypesOfTests,
        UnitTests,
        BadUnitTestExample,
        IntegrationTests,
        FunctionalTests,
        TestingPyramid,
        JUnitTesting,
        JUnitAnnotations,
        JUnitAssertions,
        TddTesting,
        WriteAnExpressionEngine,
        BddTesting,
        CucumberTesting,
        AssignmentTestExample,
        CucumberDependencies,
        generateReferencesSlide(references)
    ],
    references,
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/Q6CeWvkC1hu_rNhscHvh73kYEh_z_cQMlcnbv2deZ0ZFeyvkrOWpi-T7FIAJzy_EZl4HslDYJ_OHhDZD.-F0MnU-rOX8pa1I7?autoplay=true&startTime=1612995985000"
    }
}