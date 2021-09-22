import { ProblemDefinition } from "./exploring-js"

export const createCalculator: ProblemDefinition = {
    explanation: `For this problem, please create a "calculator" function that takes two numbers and a string "operator", and does the math operation corresponding to the numbers and the operator. For instance, calculate(5, "+", 6) should return 11. Please support the following operators: + - x / ^ (addition, subtraction,multiplication, division, exponentiation)`,
    code: `function calculate(num1, operator, num2) {
    // Do the calculation
}`,
    editorHeight: 300,
    savePrefix: "exploring-js.calculator",
    expectations: {
        functionToCall: "calculate",
        expectations: [
            {
                params: [1, "+", 4],
                expectedResults: 5
            },
            {
                params: [1, "x", 0],
                expectedResults: 0
            },
            {
                params: [20, "/", 5],
                expectedResults: 4
            },
            {
                params: [3, "^", 3],
                expectedResults: 27
            },
        ]
    }
}
