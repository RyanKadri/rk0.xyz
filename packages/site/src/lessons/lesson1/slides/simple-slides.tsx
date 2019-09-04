import { Link as MaterialLink } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide("Intro to Web Design", "Ryan Kadri");

export const AboutMe = generateContentSlide("About Me", [
    "Grew up in NJ",
    "Studied at Rutgers University",
    "Worked at SEI",
    "Worked for myself",
    "Work at Capital One"
]);

export const Expectations = generateContentSlide("Course Expectations", [
    "Coursework will consist of Labs, a Final Project, Quizzes, a Midterm, and a Final Exam",
    "Unless on a team, all submitted work must be your own",
    "Homework should not be overwhelming",
])

export const GradingA = generateContentSlide("Grading (Option A)", [
    "25% Labs",
    "25% Final Exam",
    "25% Final Project",
    "25% Midterm"
]);

export const GradingB = generateContentSlide("Grading (Option B)", [
    "20% Labs",
    "20% Final Exam",
    "20% Final Project",
    "20% Midterm",
    "20% Quizzes"
]);

export const Syllabus = generateMessageSlide(
    <MaterialLink component={ Link } variant="h1" to="https://templeu.instructure.com/courses/64482" target="_blank">
        Syllabus
    </MaterialLink>
)

export const WhatIsWebsite = generateContentSlide("What is a Web Site?", [
    "News / Blogs / Recipes",
    "Search",
    "Apps (Email, Drive, iCloud)",
    "Social Network",
    "Video / Media Player",
    "Games",
    "Visualization"
]);

export const WhatIsBrowser = generateContentSlide("What is a Browser?", [
    "Tabs",
    "Bookmarks",
    "Password Manager",
    "Search",
    "History",
    "Settings",
    "Suggestions",
    "Much more..."
]);

export const WhatIsBrowserPart2 = generateContentSlide("What is a Browser?", [
    "Rendering Engine",
    "Network-aware",
    "Based on shared standards",
    "Secure",
    "Remote Client ",
]);

export const HTMLDef = generateContentSlide("HTML", [
    '“Structure” of a web site / application',
    'Hierarchical',
    'Uses publishing terminology',
    'Based on XML',
    'Not a programming language',
]);

export const LetsCode = generateMessageSlide("Let's Code!")

export const CSSInfo = generateContentSlide("CSS", [
    "Adds styles to a web app / site",
    "Identifies elements using selectors",
    "More specific rules override less specific rules",
    "Not a programming language",
]);