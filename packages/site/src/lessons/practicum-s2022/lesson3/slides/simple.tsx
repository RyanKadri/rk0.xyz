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

export const JUnitIntro = generateCodeSlide(
  "JUnit 5",
  [
    "JUnit is a very popular Java automated testing library",
    "Allows you to directly run pieces of your code",
    'Use "assertions" to verify behaviors',
    "Uses a lot of annotations",
  ],
  {
    code: synHTML`
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.8.2</version>
    <scope>test</scope>
</dependency>
`,
  },
);

export const Annotations = generateCodeSlide(
  "Java Annotations",
  [
    "Annotations let you attach metadata to your code",
    "Has no effect on its own",
    "Discoverable through a Java API called reflection",
  ],
  {
    code: synJava`
@DisplayName("The XYZ Gizmo")
class XyzGizmoTest {

    @BeforeEach
    public void setup() { /* ... */ }
    
    @Test
    public void itWorksRight() { /* ... */ }
}
    `,
  },
);

export const HowDoesJunitWork = generateContentSlide("How does JUnit work?", [
  "JUnit seems to magically call your classes for you",
  "Where is the main method? Doesn't Java need that?",
  "It comes from the JUnit library itself!",
  <>
    JUnit can examine your classes and check which methods have a <code>@Test</code> annotation
  </>,
]);

export const ManualTestingApproach = generateContentSlide("Testing Software (Manual Approach)", [
  "While coding, periodically run your code and check if things work",
  "Right before turning in an assignment, check all of the features",
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

export const AutomatedLessons = generateContentSlide("Automated Testing Lessons", [
  "Testing small chunks of our application was easier than testing the whole thing",
  "Good tests don't need to be updated if methods change but the interface stays the same",
  'Interacting with the "outside world" makes testing code more complex',
  "Stand-In (Mock) components can help emulate the outside world",
  "Testing small pieces of the code in isolation does not always give total confidence",
  "Perfect total test coverage is hard (and maybe unnecessary?)",
]);

export const TypesOfTests = generateContentSlide("Types of Tests", [
  "Unit Tests: Test a single thing in isolation",
  "Integration Tests: Test a few components together",
  "Functional / E2E Tests: Test large portions of your system",
  "Black Box: Test your system only through defined interface",
  "White Box: Test your system by fiddling with internal details",
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
  code: synGherkin`Feature: Checks that the expression parser is working correctly

    Scenario: Basic Addition
        Given that the user has entered "3 + 4"
        When I evaluate their expression
        Then I should get a result of 7

    Scenario: Order of operations
        Given that the user has entered "3 - 9 / 3"
        When I evaluate their expression
        Then I should get a result of 0
    `,
});

export const CucumberDependencies = generateCodeSlide("Reference: Cucumber and JUnit Dependencies", [], {
  code: synHTML`
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-junit-platform-engine</artifactId>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.junit.platform</groupId>
    <artifactId>junit-platform-suite</artifactId>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
</dependency>
`,
});

export const references: Reference[] = [
  { label: "Kent C Dodds - Testing", url: "https://kentcdodds.com/blog/write-tests" },
  { label: "JUnit 5", url: "https://junit.org/junit5/docs/current/user-guide/" },
  { label: "Cucumber", url: "https://cucumber.io/docs/guides/" },
];
