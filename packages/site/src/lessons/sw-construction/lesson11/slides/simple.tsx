import React from "react";
import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";

export const Title = generateTitleSlide(
    "Modern Frontend Frameworks",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review Last Quiz",
    "Modern Frontend Goals",
    "Imperative vs Declarative",
    "Common Frameworks",
    "Introducing React",
    "React State and State Management",
]);

export const FrontendGoals = generateContentSlide("Frontend Goals", [
    "Fast Initial Load",
    "Fast Interactive Updates",
    "Loading Indicators / Animations / Feedback",
    "Information Density",
    "Real-Time data flow",
    "UI Consistency"
]);

export const HowDoFastLoad = generateMessageSlide(
    "How do we improve the initial page load time?"
);

export const InitPageLoad = generateContentSlide("Initial Page Load", [
    "Use a CDN / ensure sufficient server power",
    "Cache assets",
    "Reduce the amount of code you're sending (minification, compression, dead code elimination)",
    'Reduce "critical network paths"',
    "Reduce the amount of network data",
    "Reduce the number of initial page loads?"
]);

export const HowDoFastUpdates = generateMessageSlide(
    "How can we make an efficient, interactive page?"
);

export const FastUpdates = generateContentSlide("Interatctive Updates", [
    "Fetch the minimal amount of data needed to make an update",
    "Update the page with JavaScript based on the data you got back",
    "Only update the portion of the page that needs to change",
    "Skip going to the network when you can"
]);

export const UiFeedback = generateContentSlide("User Feedback", [
    "When you start an asynchonous task, show a loading indicator",
    "Use subtle animations to register user actions",
    "Give the user indications for success and failure",
    "Use the right UI elements for different interactions"
]);

export const InformationDensity = generateContentSlide("Information Density", [
    "Lots of data coming from many different sources",
    "If one data source fails, page should not totally crash",
    'May be too "expensive" to totally re-render the page on update',
    "May make sense to lazy-load data",
    "May want to preload some data while the page is loading"
]);

export const RealTimeDataFlow = generateContentSlide("Real-Time Data Flow", [
    "Data in your app is coming from many sources",
    "New data needs to be integrated into your app as it arrives",
    "Users should be notified of new data if appropriate",
    "App may need to pull (poll) data or listen for data pushed by the server"
]);

export const UiConsistency = generateContentSlide("UI Consistency", [
    "Your app's UI should be visually consistent",
    "Elements should have a common look and feel",
    "Some content should be present on all pages of the application",
    "Most pages should share similar fonts, padding, margins, colors, etc",
    "Shared elements and styles should be stable as much as possible"
]);

export const ImperativeVsDeclarative = generateContentSlide("Imperative vs Declarative", [
    "Imperative code says exactly how to do something",
    "Declarative code describes a desired state and lets something else get you there",
    "Not a perfect distinction between the two",
    "Declarative leaves more room for performance tuning under the hood",
    "Declarative is often easier to read / write",
    "Your system may not be flexible enough to handle every use case"
])

export const ImperativeFrameworks = generateContentSlide("Imperative Libraries / Frameworks", [
    "Explicitly tell the framework what elements to update",
    "Refer to DOM elements by IDs or selectors",
    "Use explicit JavaScript to set up event listeners",
    <>Explicitly manipulate the DOM (<code>document.createElement, element.appendChild, etc</code>)</>
])

export const FrontendHard = generateMessageSlide(
    "Application Frontends are complicated!"
);

export const EnterFrameworks = generateContentSlide("Enter Frontend Frameworks", [
    "There are a ton of problems to solve",
    "Frameworks directly solve some",
    "And make it easier for you to solve others",
    "It is important to understand where a framework starts and ends",
    'Frameworks can be "opinionated"',
    "Frameworks can be extended"
]);

export const CommonFrameworks = generateContentSlide("Common Frameworks", [
    "React - Created by Facebook. Not super opinionated. Most popular of list",
    'Angular - Created by Google. Very opinionated. Different from "Angular JS"',
    "VueJS - Created by Evan You. Cool guy. Gaining in popularity. Simpler according to some",
    "Preact - Created by Jason Miller. Smaller version of React. Mostly same API",
    "Svelte - Created by Rich Harris. Up and coming framework. Fancy tricks up its sleeves"
]);

export const EnterReact = generateContentSlide("React", [
    "Why React? Because I know it best",
    "React uses a functional programming approach to buiding web apps",
    "Supports data binding and setting up event handlers",
    "Breaks your app into components",
    "Uses JSX - Like putting HTML into your JavaScript but better!"
]);

export const LetsGetStarted = generateMessageSlide("Enough theory! What does this all look like?");

export const SoWhatIsJSX = generateContentSlide("So what is that HTML syntax?", [
    "JSX looks like HTML. Is it valid JavaScript?",
    "Uses a compiler to build valid JavaScript",
    "React's structure revolves around the React.createElement function",
    'Creates a "Virtual DOM" that makes updates faster'
]);

export const PureJs = generateMessageSlide(
    "So what would this look like in plain HTML / JS?"
);

export const DownsidesOfPlainApproach = generateContentSlide("That didn't look so bad!", [
    "Updates have to re-render everything",
    "Attached event listeners have to be globally defined and end up in your HTML",
    "You need to let the UI know when to update",
    "What if multiple things change at once? Can you ensure only one re-render?"
]);

export const References = generateReferencesSlide([
    { label: "React Documentation", url: "https://reactjs.org/" },
    { label: "Angular", url: "https://angular.io/" },
    { label: "State of JS", url: "https://2019.stateofjs.com/overview/"}
])