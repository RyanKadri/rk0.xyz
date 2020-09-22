import { ProblemDefinition } from "./exploring-js"

export const checkPalindromity: ProblemDefinition = {
    explanation: `For this problem, you will determine if a given string is a palindrome. A string
is a palindrome if it reads the same backwards and forwards. For instance, "aba" and "baab" are
palindromes but "bba" is not.
    `,
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
        ]
    }
}
