import { generateReferencesSlide } from "../../shared/references-slide";
import { BadUnitTestExample, BddTesting, FunctionalTests, IntegrationTests, references, TddTesting, TestingGoals, TestingPyramid, Title, TypesOfTests, UnitTests, WhatToTest, WhyTestAnswers, WhyTestQuestion } from "./slides/simple";

export const lesson4 = {
    title: 'Automated Testing',
    description: "Using JUnit and Cucumber to test your code",
    slug: "automated-testing",
    slides: [
        Title,
        WhyTestQuestion,
        WhyTestAnswers,
        WhatToTest,
        TestingGoals,
        TypesOfTests,
        UnitTests,
        BadUnitTestExample,
        IntegrationTests,
        FunctionalTests,
        TestingPyramid,
        TddTesting,
        BddTesting,
        generateReferencesSlide(references)
    ],
    references,
    examples: [
    ]
}