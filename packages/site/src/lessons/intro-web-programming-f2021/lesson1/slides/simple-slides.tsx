import { Link as MaterialLink } from "@material-ui/core";
import React from "react";
import aboutMe from "../../../../../../../public/images/about-me-picture-web.jpg";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML } from "../../../../common/highlighting";

export const TitleSlide = generateTitleSlide(
    "Course Expectations and Intro to HTML", 
    "Ryan Kadri"
);

export const AboutMePicture = generateMediaSlide(
    <img src={ aboutMe.src } alt="Me at Smith Rock" />,
    "Smith Rock 2019",
    "About Me"
)

export const AboutMe = generateContentSlide("About Me", [
    "I am an adjunct professor",
    "I currently work at Capital One",
    "I grew up in New Jersey",
    "I like rock climbing and coding (not at the same time)",
    "I studied CS at Rutgers",
]);

export const CourseTopics = generateContentSlide("Course Progression", [
    "Creating basic \"static\" web documents",
    "Making those pages look good (on all devices)",
    "Adding functionality to those pages",
    "Hosting your site on the Internet",
    "Integrating with other services to make your site more interesting"
], { useOrderedLists: true });

export const CourseNonTopics = generateContentSlide("What is this Course NOT?", [
    "How to use Content Management Services",
    "WYSIWYG Editors",
    "Hosting Services"
]);

export const CourseTools = generateContentSlide("Course Tools", [
    <>Code Editor:{" "}
        <MaterialLink href="https://code.visualstudio.com/" target="_blank">
            Visual Studio Code
        </MaterialLink>
    </>,
    <>Chat App:{" "}
        <MaterialLink href="https://slack.com/" target="_blank">
            Slack
        </MaterialLink>
    </>,
    <>Example code repository:{" "}
        <MaterialLink href="https://github.com/RyanKadri/cis1052-fall-2021-examples" target="_blank">
            GitHub
        </MaterialLink>
    </>,
    "Email",
    "Zoom",
    "Google Chrome (recommended)"
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
    <MaterialLink variant="h4" href="https://templeu.instructure.com/courses/98065" target="_blank">
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
    "Remote Client",
]);

export const TradeoffsOfServerImages = generateContentSlide("Model 1 Pros / Cons", [
    { text: "Pros", children: [
        "The browser can be very simple - Just display an image",
        "A simple browser is a secure browser"
    ] },
    { text: "Cons", children: [
        "Uses tons of data",
        "Different devices need different images (complex)",
        "Interactivity is hard"
    ]}
]);

export const TradeoffsOfDirections = generateContentSlide("Model 2 Pros / Cons", [
    { text: "Pros", children: [
        "Much less data needed than before",
        <>Can be <em>more</em> adaptive to different devices</>
    ] },
    { text: "Cons", children: [
        "Hard to think about / modify",
        "Browser needs to understand directions",
        "Still hard to work with different devices",
        "Interactivity is still hard",
    ]}
]);

export const HTMLDef = generateContentSlide("The Web - HTML", [
    "Describes the content of the page - not exact layout",
    "Describes elements on the page by purpose - not shape",
    "Puts elements in a hierarchy",
    "Does not always give explicit dimensions",
]);

export const TradeoffsOfHTML = generateContentSlide("HTML Pros / Cons", [
    { text: "Pros", children: [
        "Most adaptable to multiple devices",
        "Allows for controls and interactivity",
        "Code makes more sense at a glance"
    ] },
    { text: "Cons", children: [
        "Harder to learn - that's why we need a class!",
        "Harder to be explicit and precise",
        "Worse for drawing arbitrary graphics",
    ]}
]);

export const XMLSlide = generateCodeSlide("XML", [
    "HTML is mostly based on XML",
    "Information in XML is nested/hierarchical",
    "Documents are self-descriptive"
], {
    code: synHTML`<Book isbn=”9788580410631”>
    <Title>The Name of the Wind</Title>
    <Author>
        <FirstName>Patrick</FirstName>
        <LastName>Rothfuss</LastName>
    </Author>
</Book>`
})

export const HtmlAsStructure = generateContentSlide("HTML", [
    'HTML is not meant to define the way things look',
    <>Tags describe the <em>purpose</em> of content</>,
    "Tags come with default styles but these are override-able",
    <><code>{"<strong>"}</code> means "strong importance". Not bold</>,
    <><code>{"<h1>"}</code> means "highest level organizational header" not "biggest text"</>,
    'Each tag can be made to look like any other',
    'Picking the right element is important for accessibility, among other things'
]);

export const LetsCode = generateMessageSlide("Let's Code!")

export const references: Reference[] = [
    { label: "HTML Element Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
    { label: "Class Examples", url: "https://github.com/RyanKadri/cis1052-fall2020-examples" },
    { label: "HTML Tutorials", url: "https://www.w3schools.com/html/default.asp" },
];