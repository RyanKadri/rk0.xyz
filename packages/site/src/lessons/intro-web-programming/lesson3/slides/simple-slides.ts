import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const TitleSlide = generateTitleSlide(`Responsive Design and Component Libraries`, "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Quiz",
    "Talk About the Lab",
    "Goals of Responsive Design",
    "Possible Non-CSS Approaches",
    "Modern Responsive CSS",
    "Animation",
    "Using Component Libraries (Bootstrap and Material-UI)"
]);

export const GoalsOfResponsiveDesign = generateContentSlide("Goals of Responsive Design", [
    "Make the site work on smart phones",
    "Profit?"
]);

export const GoalsOfResponsiveDesignMore = generateContentSlide("Goals of Responsive Design", [
    "Work on small screens",
    "Work on huge screens",
    "Work without a screen (screen reader)",
    "Work in different browsers",
    "Add features progressively"
]);

export const HowToResponsive = generateMessageSlide("How do we make a site look good on mulitple devices?")

export const UseDifferentSite = generateContentSlide("Approach 1: Use Multiple Sites", [
    `Early mobile web apps directed phones to a different url`,
    "This site had simpler HTML and was styled to run on a smaller screen",
    "Loaded a smaller set of features to run on the network",
    "Features were often missing in mobile (or desktop)",
    "Links shared from a mobile user to a desktop user looked weird"
]);

export const UseDifferentCode = generateContentSlide("Approach 2: Send Back Different Content", [
    "Uses the same URLs and backend logic but sends back different content",
    "Links work again",
    "Features are often still missing",
    "Code and design scheme often became more unified though"
]);

export const CompletelyResponsive = generateContentSlide("Approach 3: Use Responsive CSS (and JS)", [
    "Sites send back the same code for all clients",
    "Code adapts to different devices",
    "User interface code is mostly consistent",
    "Most likely to support all features"
]);

export const ResponsiveIsHard = generateMessageSlide("But responsive design is hard!");

export const WhyResponsiveHard = generateContentSlide("Why?", [
    "Not all features make sense in a mobile context",
    "Not all browsers are created equal (cough. IE)",
    "Adaptive code can be more complex than special-purpose code",
    "CSS wasn't up to the task"
]);

export const MixMatchApproach = generateContentSlide("Approach 4: Mix and Match", [
    "Most sites combine approaches",
    "Make components adaptable if possible",
    "Send back dumber code for old browsers",
    "Send back simpler code for mobile "
]);

export const FlexBox = generateContentSlide("Revisiting Display", [
    "Inline and block displays are tricky",
    "What if we want items to show up next to each other but also control their height?",
    "What if we want to display items in a column?",
    "Vertical centering?"
]);

export const EnterFlexbox = generateMessageSlide("Enter Flexbox!");

export const FlexboxOverview = generateContentSlide("Flexbox", [
    "Flexbox lets us create responsive designs",
    "Avoids need for percentages and calculations",
    "Centering, reordering, and spacing become easier and more declarative",
    "Mostly one-dimensional"
]);

export const FlexboxMissing = generateContentSlide("What is Flexbox Missing?", [
    "Flexbox lets us create responsive designs",
    "Avoids need for percentages and calculations",
    "Centering, reordering, and spacing become easier and more declarative"
]);

export const EnterGrid = generateMessageSlide("Enter Grid!");

export const GridOverview = generateContentSlide("CSS Grid", [
    "Allows for creating 2 dimensional layouts",
    "Does not require nesting",
    "Easier to rearrange"
]);

export const HowToRearrange = generateMessageSlide("So how do we rearrange things?");

export const EnterMedia = generateMessageSlide("Enter Media Queries!");

export const MediaQueries = generateContentSlide("Media Queries", [
    "Media queries apply styles based on the media used to display a page",
    "Usually used with device size for responsive design",
    { text: "Can also query...", children: [
        "print vs screen vs other",
        "Color quality of the media",
        "Ambient light in the environment",
        "Much more"
    ]}
]);

