import { ProblemDefinition } from "./exploring-js";

export const sumOfPrimes: ProblemDefinition = {
  explanation: `For this problem, I will pass an array to your function. Please return the sum of all the prime numbers in the array. Remember that a prime number is a number that is not divisible by any number other than itself and 1. You probably want to break this function into two parts. For the first part, can you write a function that takes an array of numbers and returns the sum? Can you write a function that checks if a number is prime? How can you combine these two functions together to come up with the desired result?`,
  code: `function sumOfPrimes(numbers) {
    // Find the sum. Maybe call isPrime somewhere to help
}

function isPrime(num) {

}`,
  savePrefix: "exploring-js.sumOfPrimes",
  expectations: {
    functionToCall: "sumOfPrimes",
    expectations: [
      {
        params: [[2, 3, 4, 6, 11]],
        expectedResults: 16,
      },
      {
        params: [[1, 1, 1, 1, 1, 1, 13]],
        expectedResults: 13,
      },
      {
        params: [[100, 102, 104, 106]],
        expectedResults: 0,
      },
      {
        params: [[2, 5, 7, 9, 11]],
        expectedResults: 25,
      },
    ],
  },
};
