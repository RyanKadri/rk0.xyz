import { generateContentSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "Deploying Websites / Analytics",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review Last Quiz",
    "Class Updates (Participation and Final Project)",
    "Static App Deployment Goals",
    { text: "Deploying Static Sites", children: [
        "With AWS",
        "With Netlify"
    ] },
    "Using Google Analytics",
]);

