import { ProblemDefinition } from "./exploring-js"

export const checkPalindromity: ProblemDefinition = {
    explanation: `A string is a palindrome if it is the same when you read it forward or backward. For instance, if you read "racecar" from right to left, it is still "racecar". Please write a function that takes a string parameter and returns true if the string is a palindrome`,
    code: `function isPalindrome(str) {
    // Determine if the string is a palindrome
}`,
    savePrefix: "exploring-js.palindromity",
    editorHeight: 250,
    expectations: {
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
                params: ["a"],
                expectedResults: true
            },
            {
                params: ["racecar"],
                expectedResults: true
            },
            {
                params: ["tacocat"],
                expectedResults: true
            }
        ]
    }
}
