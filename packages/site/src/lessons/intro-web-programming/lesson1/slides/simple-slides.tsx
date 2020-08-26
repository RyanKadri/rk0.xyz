import { Link as MaterialLink } from "@material-ui/core";
import React from "react";
import { generateContentSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";
import myPicture from "./about-me-picture-web.jpg";

export const TitleSlide = generateTitleSlide("Introduction to Web Technology and Programming", "Ryan Kadri");

export const AboutMePicture = generateMediaSlide(
    <img src={ myPicture } alt="Me at Smith Rock" />,
    "Smith Rock 2019",
    "About Me"
)

export const AboutMe = generateContentSlide("About Me", [
    "Grew up in New Jersey",
    "I like hiking and coding (not at the same time)",
    "Studied at Rutgers",
    "Currently work at Capital One"
]);

export const CourseTopics = generateContentSlide("Course Structure", [
    "Structuring basic HTML websites",
    "Using CSS to style your page",
    "Making your static page interactive with JavaScript",
    "Hosting your site on the Internet",
    "Writing server-side code that your site can talk to"
], { useOrderedLists: true });

export const CourseNonTopics = generateContentSlide("What is this Course NOT?", [
    "How to use Content Management Services",
    "WYSIWYG Editors",
    "Hosting Services"
]);

export const CourseTools = generateContentSlide("Course Tools", [
    { text: "Visual Studio Code", children: [
        "My IDE for HTML, CSS and JS"
    ]},
    { text: "Slack", children: [
        "One channel per class",
        "Use reactions to give feedback"
    ]},
    { text: "Email", children: [
        "For longer discussions / attachments"
    ]},
    { text: "GitHub", children: [
        "For sharing code examples"
    ]},
    "Zoom",
])

export const Expectations = generateContentSlide("Course Work", [
    { text: "Coursework will consist of:", children: [
        "Labs",
        "Final Project",
        "Quizzes",
        "Midterm",
        "Final Exam"
    ] },
    "Unless on a team, all submitted work must be your own",
    "Homework should not be overwhelming",
])

export const Syllabus = generateMessageSlide(
    <MaterialLink variant="h2" href="https://templeu.instructure.com/courses/81125" target="_blank">
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

export const HtmlAsStructure = generateContentSlide("HTML", [
    'HTML is not meant to describe presentation',
    'Tags describe the purpose of content',
    '<strong> means "strong importance". Not bold',
    '<h1> means "highest level organizational header" not "biggest text"',
    'Each tag can be made to look like any other',
    'Picking the right element is important for accessibility, among other things'
]);

export const LetsCode = generateMessageSlide("Let's Code!")

export const References = generateReferencesSlide([
    { label: "HTML Element Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
    { label: "Class Examples", url: "https://github.com/RyanKadri/cis1052-fall2020-examples" },
    { label: "HTML Tutorials", url: "https://www.w3schools.com/html/default.asp" },
    { label: "Class Examples", url: "https://github.com/RyanKadri/cis1052-fall2020-examples" }
])