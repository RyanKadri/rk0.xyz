import { generateReferencesSlide } from "../../shared/references-slide";
import { AssignmentTestExample, BadUnitTestExample, BddTesting, ClassQuestion, CucumberDependencies, CucumberTesting, FunctionalTests, IntegrationTests, JUnitAnnotations, JUnitAssertions, JUnitTesting, ManualTestingApproach, ManualTestingDownsides, references, TddTesting, TestingPortions, TestingPyramid, Title, TypesOfTests, UnitTests, WriteAnExpressionEngine } from "./slides/simple";

export const lesson4 = {
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
    ]
}