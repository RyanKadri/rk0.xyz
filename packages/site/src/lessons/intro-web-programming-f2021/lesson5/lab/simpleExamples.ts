import { ProblemDefinition } from "./exploring-js";

export const simpleExamples: ProblemDefinition[] = [
  {
    title: "Greeting",
    savePrefix: "exploring-js.greetProfessor",
    explanation: `Please write a function that returns the string "Welcome to CIS 1052" (Don't overthink this one)`,
    code: `function greetClass() {
    // Write code here
}`,
    editorHeight: 100,
    expectations: {
      functionToCall: "greetClass",
      expectations: [{ params: [], expectedResults: "Welcome to CIS 1052" }],
    },
  },
  {
    title: "Calculate Sum",
    savePrefix: "exploring-js.addNumbers",
    explanation: `Please write a function that takes two numbers as parameters and returns the sum of them.
        `,
    code: `function addNumbers(a,b) {
    // Return the sum
}`,
    editorHeight: 100,
    expectations: {
      functionToCall: "addNumbers",
      expectations: [
        { params: [1, 2], expectedResults: 3 },
        { params: [1, -1], expectedResults: 0 },
        { params: [100, -1], expectedResults: 99 },
      ],
    },
  },
  {
    title: "Calculate Grade",
    explanation: `Please write a function that takes a number between 0 and 100 and returns the class grade that would be associated with each score (90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D). Please include grades with a + or -. For two examples, a 90-92 is an A- while a grade from 87-89, is a B+. All letter grades follow the same scale. Anything below a 60 is an F. Note: this is not necessarily the grade scaling I will use for this class!`,
    savePrefix: "exploring-js.returnGrade",
    code: `function calcGrade(score) {
    // Return the grade as a string
    if(score >= 97) {
        return "A+"
    } // else if (...) {
}`,
    editorHeight: 300,
    expectations: {
      functionToCall: "calcGrade",
      expectations: [
        { params: [93], expectedResults: "A" },
        { params: [88], expectedResults: "B+" },
        { params: [61], expectedResults: "D-" },
        { params: [73], expectedResults: "C" },
        { params: [50], expectedResults: "F" },
        { params: [100], expectedResults: "A+" },
      ],
    },
  },
];
