import { generateContentSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Full Stack Development: Backend", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Review (with more code examples)",
    "Quiz",
    "Asynchronous JavaScript",
    "REST APIs",
    "Database Basics",
    "JPA"
]);

export const AsyncJavaScript = generateContentSlide("Async JavaScript", [
    "Java has support for doing multiple blocking things at once",
    'JavaScript is single-threaded so it cannot',
    "Blocking tasks will freeze the page",
    "Events do not interrupt",
    "Obviously web pages do asynchronous things. So how do pages stay responsive?"
]);

