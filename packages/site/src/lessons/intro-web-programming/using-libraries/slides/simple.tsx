import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const slides = [
    generateTitleSlide("Common JavaScript Libraries", "Ryan Kadri"),
    generateContentSlide("Agenda", [
        { text: '"Global" Libraries', children: [
            "JQuery",
            "Chart.js",
        ]},
        "Best practices when writing libraries",
        "NPM and package managers",
        '"Importing" libraries',
        "Bundlers",
        "Automated Testing"
    ]),
    generateMessageSlide("How would you write a library?"),
    generateContentSlide('"Global" Libraries', [
        "Maybe create a bunch of functions and constants?",
        "Could you add things to Math.*?",
        "How do you tell your users what exists?",
        "Maybe create a single object with a bunch of methods?"
    ]),
    generateContentSlide("A bunch of functions", [
        "Most convenient to type",
        "Blends in with other code",
        "Collides with user code",
        "Where is everything coming from?",
    ]),
    generateContentSlide("Modifying Math.*", [
        "Source of function is more clear",
        "Feels more natural",
        "Collides with standards code",
        "Collides with other libraries"
    ]),
    generateContentSlide("One Object", [
        "A bit more to type",
        "Easier to read",
        'Less likely to "collide"'
    ]),
    generateContentSlide("JQuery", [
        "Simplifies common DOM operations",
        "Very broad scope",
        "Strong browser compatibility",
        '"Write less, do more."'
    ]),
    generateContentSlide("Chart.js", [
        "Helps create graphs in the browser",
        "Much narrower goal",
        "Easy but inflexible",
    ]),
    generateContentSlide("Modules", [
        "We can load JS files from HTML",
        "Can we load JS files from JS?",
        "Why would this be useful?"
    ]),
    generateContentSlide("Benefits", [
        "Even fewer global variables hanging around",
        "Easier to read what each file needs",
        "Can use direct function names, object namespaces, or both",
        "How do we import libraries?"
    ]),
    generateContentSlide("Packages", [
        'NPM is a javascript "package manager"',
        "You can install most common libraries",
        "Packages have versions for safe usage",
        "NPM also has general JS tools"
    ]),
    generateContentSlide("Bundlers", [
        "Browsers don't always work with importing from NPM",
        "Sending over a lot of small separate files is slow",
        "Bundlers put many files together",
        "May also do transformations"
    ])
];
