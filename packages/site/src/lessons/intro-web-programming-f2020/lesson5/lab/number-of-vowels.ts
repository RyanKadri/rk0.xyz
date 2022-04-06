import { ProblemDefinition } from "./exploring-js";

export const numberOfVowels: ProblemDefinition = {
  explanation: `For this function, I will pass in an integer between 0 and 9999. Please return
The number of vowels in the full english representation of the number. Please do not include the
word "and" in your representation and please count all "y"s as a vowel. Here is an example: If I pass
the number 131 as a parameter, the english representation is "one hundred thirty one". The function
would return 8 since there are 3 e's, 1 i, 2 o's, 1 u, and 1 y. The rules for printing the english
representation of a number should be fairly simple. You should not need giant conditionals. Consider
handwriting the rules for converting a number to english before diving in.`,

  code: `function numberOfVowels(number) {
    // Figure out the english representation and count the vowels
}

function toEnglishRep(num) {

}`,
  savePrefix: "exploring-js.numberOfVowels",
  expectations: {
    functionToCall: "numberOfVowels",
    expectations: [
      {
        params: [131],
        expectedResults: 8,
      },
      {
        params: [2],
        expectedResults: 1,
      },
      {
        params: [9999],
        expectedResults: 14,
      },
    ],
  },
};
