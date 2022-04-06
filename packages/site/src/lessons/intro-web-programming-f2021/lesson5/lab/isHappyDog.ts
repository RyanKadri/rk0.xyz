import { ProblemDefinition } from "./exploring-js";

export const isHappyDog: ProblemDefinition = {
  explanation:
    'Please write a function that takes in a dog object. The dog object will have 4 properties: numTreatsToday, hoursSinceLastWalk, bellyRubs, and strangersBarkedAt. You can calculate your dog\'s happiness by adding numTreatsToday with bellyRubs, dividing that sum by hoursSinceLastWalked, and adding strangersBarkedAt to the result. If the dog\'s happiness is greater than or equal to 5, please return an array with the string "Wag" repeated once for every happiness point. If the happiness is less than 5, please return an array with the string "Bark" repeated once for every point. Happiness points should be rounded to the nearest point',
  savePrefix: "exploring-js.isHappyDog",
  code: `function isHappyDog(dogObject) {

}`,
  expectations: {
    functionToCall: "isHappyDog",
    expectations: [
      {
        params: [{ numTreatsToday: 5, hoursSinceLastWalk: 2, bellyRubs: 5, strangersBarkedAt: 2 }],
        expectedResults: ["Wag", "Wag", "Wag", "Wag", "Wag", "Wag", "Wag"],
      },
      {
        params: [{ numTreatsToday: 1, hoursSinceLastWalk: 4, bellyRubs: 3, strangersBarkedAt: 1 }],
        expectedResults: ["Bark", "Bark"],
      },
    ],
  },
};
