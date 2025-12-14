import { Link } from "@mui/material";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMediaSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synGherkin, synHTML, synJava } from "../../../../common/highlighting";
import testingPyramid from "./testing-pyramid.png";

export const Title = generateTitleSlide("Automated Testing", "Ryan Kadri");

export const ClassQuestion = generateMessageSlide("How do you test software?");

export const ManualTestingApproach = generateContentSlide("Testing Software (Manual Approach)", [
  "While coding, periodically run your code and check if things work",
  "Right before turning in an assignment, check all of the features",
  "Use tools like Postman to test endpoints or the command line to test CLI tools",
  'Try out the "Happy Path" scenarios in your code',
  "If needed, try out the error cases or weirder inputs",
  "Make sure that your output is in the right format",
]);

export const ManualTestingDownsides = generateContentSlide("Manual Testing Downsides", [
  "You might have to do this process many times as you update code",
  "It's really easy to skip or misunderstand a step",
  "Do you write up testing documents?",
  "In a big codebase, you might end up needing to start a huge application",
  "If there are a lot of tests, it's easy to miss an error",
]);

export const TestingPortions = generateContentSlide("Breaking up Testing", [
  "When working on a big app, you might only develop a small piece",
  "It would be nice if you could split out just your piece and test",
  "You could do this with multiple main methods in your codebase",
  "... or you could use an automated testing framework",
]);

export const TypesOfTests = generateContentSlide("Types of Tests", [
  "Unit Tests: Test a single thing in isolation",
  "Integration Tests: Test a few components together",
  "Functional / E2E Tests: Test large portions of your system",
  "Black Box: Test your system only through defined interface",
]);

export const UnitTests = generateContentSlide("Unit Tests", [
  "Test components in isolation",
  "Replace dependencies (explicit and implicit)",
  "Advantage: Runs fast and accurately pinpoints errors",
  "Disadvantage: Does not guarantee that pieces work together",
]);

export const BadUnitTestExample = generateMessageSlide(
  <Link href="https://twitter.com/i/status/1148986961207730176" target="_blank" variant="body1">
    https://twitter.com/i/status/1148986961207730176
  </Link>,
);

export const IntegrationTests = generateContentSlide("Integration Tests", [
  "Work with a couple components together",
  "Replace some but not all dependencies",
  "Mock up representative input data",
  "Advantage: More certainty that things work",
  "Disadvantage: A bit flakier and harder to set up",
]);

export const FunctionalTests = generateContentSlide("Functional Tests", [
  "Test large slices of a system",
  "May use an automated browser to test app",
  "Advantage: Uses your app the same way a user would",
  "Disadvantage: Flaky, slow, and brittle",
]);

export const TestingPyramid = generateMediaSlide(
  <img src={testingPyramid.src} alt="Testing Pyramid" />,
  "Credit: Martin Fowler - Test Pyramid",
);

export const JUnitTesting = generateCodeSlide(
  "JUnit Testing",
  [
    "In Java, JUnit is a very popular testing framework",
    'Allows you to write small snippets of test code that "drive" your real code',
    "Provides assertion functions to verify that your code worked right",
  ],
  {
    code: synJava`@Test
public void testMyCode() {
    Calculator calc = new Calculator();
    double result = calc.calculate(1, "+", 1);
    assertEquals(2, result)
}`,
  },
);

export const JUnitAnnotations = generateContentSlide("JUnit Annotations", [
  <>
    <code>@Test</code> - Marks a test method. Will be run by JUnit
  </>,
  <>
    <code>@BeforeEach/@BeforeAll</code> - Marks code that should run before each test or before all
  </>,
  <>
    <code>@AfterEach/@AfterAll</code> - Marks code that should run before each test or before all
  </>,
  <>
    <code>@Disabled</code> - Useful for temporarily stopping a test from running
  </>,
  <>
    <code>@Tag</code> - Useful for organizing tests and running subsets
  </>,
  "Many more",
]);

export const JUnitAssertions = generateContentSlide("JUnit Assertions", [
  <>
    <code>assertEquals</code> - Checks that two values are equal. Be careful with objects and doubles
  </>,
  <>
    <code>assertTrue/assertFalse</code> - Checks that a value is true or false
  </>,
  <>
    <code>assertThrows</code> - Checks that some code throws an exception
  </>,
  "... many more",
  "assertions often take a string argument to give more context for what a failure means",
]);

export const TddTesting = generateContentSlide("Test Driven Development", [
  "In Test Driven Development (TDD), tests are as important as the main code",
  "Write tests first and then write code",
  "Tests start out failing and eventually pass (red-green)",
  "Get simple tests to pass. Then more complicated",
]);

export const WriteAnExpressionEngine = generateMessageSlide("Let's write an arithmetic evaluator");

export const BddTesting = generateContentSlide("Behavior Driven Development", [
  "A philosophy that amps up the idea of tests as documentation",
  "Business people, QA testers, and developers work together on tests",
  "Tests are written to be as readable as possible",
  "Tests should also generate descriptive human-readable output where applicable",
  "Sometimes this involves writing tests in english",
]);

export const CucumberTesting = generateContentSlide("Cucumber and Gherkin", [
  "Cucumber is a testing framework that lets you write tests in english",
  "Tests are readable and verifiable documentation",
  {
    text: "Uses a syntax called Gherkin to write tests",
    children: [
      "Given... <sets up the initial state before testing>",
      "When... <trigger some event>",
      "Then... <test your conditions>",
    ],
  },
]);

export const AssignmentTestExample = generateCodeSlide("Example Cucumber Spec", [], {
  code: synGherkin`Feature: Operation history is managed properly
    As operations are calculated, the server will store a record of
    the operation details. There is also an option to clear the operation
    history

    Scenario: Capturing math operation history
        Given that I have not run any previous operations
        When I call the endpoint to add 2 and 3
        Then there should be 1 history item with a first operand of 2 and a second operand of 3

    Scenario: Deleting operation history
        Given that I have 3 operations stored in the history
        When I call the delete endpoint
        Then there should be 0 operations in the history`,
});

export const CucumberDependencies = generateCodeSlide("Reference: Cucumber and JUnit Dependencies", [], {
  code: synHTML`<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.7.1</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.junit.vintage</groupId>
    <artifactId>junit-vintage-engine</artifactId>
    <version>5.7.1</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <version>6.9.1</version>
</dependency>
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-junit</artifactId>
    <version>6.9.1</version>
</dependency>`,
});

export const references: Reference[] = [
  { label: "Kent C Dodds - Testing", url: "https://kentcdodds.com/blog/write-tests" },
  { label: "JUnit 5", url: "https://junit.org/junit5/docs/current/user-guide/" },
  { label: "Cucumber", url: "https://cucumber.io/docs/guides/" },
];
