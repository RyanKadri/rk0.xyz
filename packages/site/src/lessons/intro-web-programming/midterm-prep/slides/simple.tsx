import { generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateQuestionSlide } from "../../../shared/formal-question-slide";

export const TitleSlide = generateTitleSlide("Midterm Review", "Ryan Kadri");

export const FilterNames = generateQuestionSlide("Write a function that takes an array of names as input and returns a new array"
    + " with only names from a-g"
);

export const AllMatch = generateQuestionSlide("Write a function that takes an array of names and a Regular Expression and"
    + " returns true if they all match (or false otherwise)");

export const Simplify = generateQuestionSlide("Write a function that finds the longest palindrome in a list of strings")

export const WhileLoop = generateQuestionSlide("Please calculate the sum of all fibonacci numbers under 1000");