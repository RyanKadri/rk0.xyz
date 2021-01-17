import { generateContentSlide, generateTitleSlide } from "../../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "Working in Software Development",
    "Ryan Kadri"
);

export const Agenda = generateContentSlide("Agenda", [
    "Review / Bookkeeping",
    "Demos!",
    "Roles in Software Development",
    "The Interview",
    "Starting Work",
    "Evaluating your Company",
]);

export const RolesInDevelopment = generateContentSlide("Roles in Software Development", [
    "Frontend Developer - HTML / CSS / JS with React / Angular / etc",
    "Mid-Tier Developer - Java / Node with Spring",
    "DBA / Backend - SQL / PLSQL / Stored Procs",
    "App Developer - Flutter / React Native / Swift / Kotlin",
    "Data Science / ML - Python / R with Pandas / Numpy / Scikit",
    "Devops - Docker / VMs / CICD / Tooling",
    "Ops - Config / Networking / Server Stuff"
]);

export const EnteringInterview = generateContentSlide("Pre-Interview", [
    "Prepare for the job -- not the interview",
    "Figure out what you're interested in",
    "Do side projects. Write code. Learn how to learn",
    "Figure out enough about topics to know how to research",
    "Form opinions and be able to defend them",
]);

export const TheoryInterview = generateContentSlide("Interview - Theory", [
    "Be able to talk about your projects. Maybe host some for demos",
    "Know the why's of CS stuff",
    "Be honest when you don't know something",
    "Know the limits of what you do know. Don't assume",
    "Tune your answers a bit. A nuanced, precise answer is super beneficial"
]);

export const PracticeInterview = generateContentSlide("Interview - Practice", [
    "Practice writing algorithm-y code - Project Euler and Leetcode have been good",
    "Some interviewers like whiteboarding. Practice that",
    "Practice talking about systems problems - Class projects and personal projects",
    "Nail down simple problem components - Searching, Filtering, Excluding Duplicates",
    "Build answers out of simpler components",
    "Data structures are your friend. Arrays, Maps, Sets, Trees are important"
]);

export const BehavioralInterview = generateContentSlide("Interview - Behavioral", [
    "Tell me about a time when...",
    "Practice these kinds of questions. Get your stories ready",
    "Don't just tell a story. It should have a purpose",
    "What do you like to work on? What do you want to work on?",
    "An amazing GPA is not an enormous factor"
]);

export const YourQuestions = generateContentSlide("Interview - Your Questions", [
    "Try to get a sense for how you'll spend your time",
    "Will you be able to improve as a developer?",
    "How does your company think about talent?",
    "How does tech fit into the overall company?",
    "What technologies are you using and why?",
    "How does internal posting work?",
    "Training and extracurriculars?",
    "Performance management?",
    "Cross-team work?"
]);

export const StartingWork = generateContentSlide("Starting Work", [
    'Learn about the product. Don"t think of Devs as separate from "the business"',
    "Learn the org. Understand your dependencies",
    "Ask technical questions",
    "Ask critical questions about the product. Get context",
    "Partner with people",
    "Be proactive",
    "Look for work / commit to doing things",
    "Don't get lost in the minutia"
]);

export const StartingWorkGotchas = generateContentSlide("Starting Work - Gotchas", [
    "Expect to teach yourself a lot",
    "Don't hold your school-taught opinions too firmly",
    "Keep a critical eye on team dynamics and practices",
    "Understand context before you critize",
    "Don't feed into negativity / complain about politics",
    "Be careful where you have conversations",
]);

export const EvaluateCompany = generateContentSlide("Evaluating your Company", [
    "What is my company's approach toward tech?",
    "What skills are most important at my company?",
    "Why do promotions happen?",
    "Am I learning? If not, what can I do?",
    "How much say do I have in technical decisions?",
    "Contractors vs Employees",
    "Who is disengaged? Why?"
]);

export const GrowingWhileWorking = generateContentSlide("Growing While Working", [
    "Take time for learning",
    "Can I (responsibly) introduce a new approach to better solve this problem?",
    "Can I generalize this problem?",
    "Can I use a developer's lense to see this more clearly than the business?",
    "What are side-projects I can join to improve in a specific skill?"
])
