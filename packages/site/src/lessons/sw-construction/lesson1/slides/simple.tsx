import { Link } from "@material-ui/core";
import React from "react";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Practicum in Software Construction", "Ryan Kadri");

export const CourseGoals = generateContentSlide("My Goals", [
    "Teach practical skills you might otherwise miss",
    "Get students comfortable with starting non-trivial projects",
    "Solve interesting problems",
    "Use modern tools"
]);

export const CourseOverviewP1 = generateContentSlide("Course Overview", [
    "Git, Open Source, Licensing, PRs",
    "Maven, DI, Spring - Reverse Engineering / Scraping a Site",
    "Automated Testing - Spring and Cucumber",
    "Building a Full Stack App",
    "Building a Full Stack App",
    "Functional Programming and Immutability. General good practices",
]);

export const CourseFeatures = generateContentSlide("Course Features", [
    "Assignments",
    "Course Project",
    "Quizzes (low-key, I promise)",
    "Midterm",
    "Optional Final"
]);

export const Syllabus = generateMessageSlide(
    <Link href="https://templeu.instructure.com/courses/70178"
          variant="h1">
        Syllabus
    </Link>
);


