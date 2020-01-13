import { Link } from "@material-ui/core";
import React from "react";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";

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

export const OpenSourceP1 = generateContentSlide("Free and Open Source Software", [
    'What is "source"?',
    'When is it "open"?',
    'What is "free software"?'
]);

export const OpenSourceP2 = generateContentSlide("Open Source", [
    "Users are free to redistribute software",
    "You must make the source code available",
    "Users must be allowed to create derivatives",
    "You may prevent others from using your brand",
    "You may require users to include original source",
]);

export const OpenSourceP3 = generateContentSlide("Open Source", [
    "No discrimination (against people)",
    "No discrimination (against projects)",
    "You may require derivatives to include license",
    "Users can take pieces out of your code",
    "You can't restrict users' choice of other software",
    "Users can use your code with whatever tech they want"
]);

export const FreeSoftware = generateContentSlide("Free Software", [
    "The freedom to run the program as you wish, for any purpose",
    "The freedom to study how the program works, and change it so it does your computing as you wish. Access to the source code is a precondition for this.",
    "The freedom to redistribute copies so you can help others",
    "The freedom to distribute copies of your modified versions to others. By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this."
]);

export const Licensing = generateContentSlide("Licensing Software", [
    'Software needs a license to be "free"',
    "Licenses can be standardized and templated",
    "Licenses can affect derived software",
    "Companies care a lot about OSS licensing",
    <Link href="https://tldrlegal.com/" target="_blank">License tl;dr</Link>
]);

export const FairUse = generateMessageSlide(
    "Is it possible to plagiarize Open Source Code?"
);

export const Assignment = generateMessageSlide(
    "Hey Ryan. Build me a book review site."
);

export const References = generateReferencesSlide([
    { label: "Open Source Defintion", url: "https://opensource.org/osd" },
    { label: "Free Software Definition", url: "https://www.gnu.org/philosophy/free-sw.en.html" },
    { label: "License tl;dr", url: "https://tldrlegal.com/" }
])