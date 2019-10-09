import { generateTitleSlide } from "../../../../../presenter-core/src/slides/generate-slide";
import { generateQuestionSlide } from "../../shared/formal-question-slide";

export const TitleSlide = generateTitleSlide("Midterm Review", "Ryan Kadri");

export const FunctionTerminology = generateQuestionSlide("Please write a function that takes"
    + " two numbers as inputs and returns the sum as an output."
);

export const Conditionals = generateQuestionSlide("Please write a function that takes a number from 0-100 as input and returns"
    + " a letter grade"
);

export const FindInArray = generateQuestionSlide("Write a function that takes an array of numbers as input and returns the first"
    + " number greater than 15"
);

export const MapArray = generateQuestionSlide("Write a function that takes an array of numbers and returns a new array where each"
    + " element is twice the corresponding number from the input"
);

export const FilterNames = generateQuestionSlide("Write a function that takes an array of names as input and returns a new array"
    + " with only names from a-g"
);

export const AllMatch = generateQuestionSlide("Write a function that takes an array of names and a Regular Expression and"
    + " returns true if they all match (or false otherwise)");

export const Simplify = generateQuestionSlide("Write a function that finds the longest palindrome in a list of strings")

export const WhileLoop = generateQuestionSlide("Please calculate the sum of all fibonacci numbers under 1000");

export const FunctionCallout = generateQuestionSlide("Calculate the sum of the first million prime numbers");