import { FunctionExecutionParams } from "../../shared/code-playground"

export const palindromityCode = `function isPalindrome(str) {
    // Determine if the string is a palindrome
}`

export const palindromityExpectations: FunctionExecutionParams = {
    functionToCall: "isPalindrome",
    expectations: [
        {
            params: ["abc"],
            expectedResults: false
        },
        {
            params: ["aba"],
            expectedResults: true
        },
        {
            params: [""],
            expectedResults: true
        },
        {
            params: ["a"],
            expectedResults: true
        },
        {
            params: ["a man a plan a canal panama"],
            expectedResults: true
        },
    ]
}