import { ProblemDefinition } from "./exploring-js";

export const simpleExamples: ProblemDefinition[] = [
    { 
        title: "Greeting",
        savePrefix: "exploring-js.greetProfessor",
        explanation: `Please write a function that returns the string "All hail professor Ryan`,
        code: `function greetProfessor() {
    // Write code here
}`,
        editorHeight: 100,
        expectations: {
            functionToCall: "greetProfessor",
            expectations: [
                { params: [], expectedResults: "All hail professor Ryan" }
            ]
        }
    },
    {
        title: "Calculate Sum",
        savePrefix: "exploring-js.addNumbers",
        explanation: `Please write a function that accepts two numeric parameters and returns the
sum of them.
        `,
        code: `function addNumbers(a,b) {
    // Return the sum
}`,
        editorHeight: 100,
        expectations: {
            functionToCall: "addNumbers",
            expectations: [
                { params: [1, 2], expectedResults: 3 },
                { params: [1, -1], expectedResults: 0 }
            ]
        }
    },
    {
        title: "Calculate Grade",
        explanation: `Please write a function that takes a number between 0 and 100 and returns
the class grade that would be associated with each score (90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D)
Remember that for each range, grades from x0 to x2 are given a "minus" grade and grades from x7-max are
given a "plus" grade
        `,
        savePrefix: "exploring-js.returnGrade",
        code: `function calcGrade(score) {
    // Return the grade as a string
}`,
        editorHeight: 300,
        expectations: {
            functionToCall: "calcGrade",
            expectations: [
                { params: [93], expectedResults: "A" },
                { params: [88], expectedResults: "B+" },
                { params: [61], expectedResults: "D-" }
            ]
        }
    }
]