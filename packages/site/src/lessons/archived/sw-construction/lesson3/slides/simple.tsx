import { Link } from "@material-ui/core";
import React from "react";
import { generateContentSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../../shared/references-slide";
import testingPyramid from "./testingPyramid.jpg";

export const Title = generateTitleSlide("Automated Testing", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Review last class",
    "Quiz",
    "Why do we test?",
    "What do we test?",
    "Unit Testing with JUnit",
    "Testing + Dependency Injection",
    "Integration Testing",
    "Test Driven Development",
    "BDD and Cucumber",
]);

export const WhyTestQuestion = generateMessageSlide("Why do we write automated tests?")

export const WhyTestAnswers = generateContentSlide("Why do we test?", [
    "Prevent new bugs before launch",
    "Find bugs in old code",
    "Develop faster and with more confidence",
    "Create verifiable documentation",
    "It's more fun",
]);

export const WhatToTest = generateContentSlide("What do we test?", [
    "New code",
    "Critical code",
    "Happy path",
    "Edge cases",
    "Old code",
]);

export const TestingGoals = generateContentSlide("Testing #goals", [
    "Actually tests system",
    "Easy to read",
    "Stable",
    "Runs fast",
    "Doesn't change too often",
]);

export const WhoIsClient = generateMessageSlide("Who is your client?");

export const TypesOfTests = generateContentSlide("Types of Tests", [
    'Unit Tests: Test a single thing in isolation',
    'Integration Tests: Test a few components together',
    'Functional / E2E Tests: Test large portions of your system',
    "Black Box: Test your system only through defined interface"
]);

export const UnitTests = generateContentSlide("Unit Tests", [
    "Test components in isolation",
    "Replace dependencies (explicit and implicit)",
    "Advantage: Runs fast and accurately pinpoints errors",
    "Disadvantage: Less guarantee of good behavior"
]);

export const BadUnitTestExample = generateMessageSlide(
    <Link href="https://twitter.com/i/status/1148986961207730176"
          target="_blank" 
          variant="h4">
        https://twitter.com/i/status/1148986961207730176
    </Link>
)

export const IntegrationTests = generateContentSlide("Integration Tests", [
    "Work with a couple components together",
    "Replace some but not all dependencies",
    "Mock up representative input data",
    "Advantage: More certainty that things work",
    "Disadvantage: A bit flakier and harder to set up"
]);

export const FunctionalTests = generateContentSlide("Functional Tests", [
    "Test large slices of a system",
    "May use an automated browser to test app",
    "Advantage: Uses your app the same way a user would",
    "Disadvantage: Flaky, slow, and brittle"
]);

export const TestingPyramid = generateMediaSlide(
    <img src={ testingPyramid } alt="Testing Pyramid" />,
    "Credit: Martin Fowler - Test Pyramid"
);

export const TddTesting = generateContentSlide("Test Driven Development", [
    "In Test Driven Development (TDD), tests are as important as the main code",
    "Write tests first and then write code",
    "Tests start out failing and eventually pass (red-green)",
    "Get simple tests to pass. Then more complicated"
]);

export const BddTesting = generateContentSlide("Behavior Driven Testing", [
    "A philosophy that amps up the idea of tests as documentation",
    "Tests are written in engl(ish) by the business",
    "Test definitions and results are as readable as possible",
    "Given / When / Then syntax",
    "Cucumber is a common BDD tool in Java"
]);

export const References = generateReferencesSlide([
    { label: "Kent C Dodds - Testing", url: "https://kentcdodds.com/blog/write-tests" },
    { label: "Cucumber", url: "https://cucumber.io/docs/guides/" },
])