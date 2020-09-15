import { ProblemDefinition } from "./exploring-js"

export const sumOfPrimes: ProblemDefinition = {
    explanation: `For this problem, I will pass an array to your function. Please return the sum
of all the prime numbers in the array. (Hint: it may be helpful to write a second function here)`,
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
                params: [[2,3,4,6,11]],
                expectedResults: 16
            },
            {
                params: [[1,1,1,1,1,1,13]],
                expectedResults: 13
            },
            {
                params: [[100, 102, 104, 106]],
                expectedResults: 0
            }
        ]
    }
}
