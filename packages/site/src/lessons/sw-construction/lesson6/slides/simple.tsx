import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateDefinitionSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "APIs",
    "Ryan Kadri"
);

export const HowDoTalk = generateDefinitionSlide(
    "API",
    "Application Programming Interface - A specification for how a piece of software can be used by other external software"
);

export const WhereApis = generateContentSlide("Where are APIs?", [
    "APIs can define the communications between entire systems (like networked services)",
    "APIs can define how to use narrow systems (like how one class uses another)",
    "APIs can refer to network communication or other kinds of processes",
    "APIs are often focused on direct messages",
    "... but can also be more implicit"
]);

export const ApisAreImportant = generateContentSlide("APIs", [
    "APIs are the main contact point between your component and the world",
    "If the API produces the right output for any input, your component probably works",
    "If the API doesn't change, you can update your component freely",
    "It is important to pick a narrow API",
]);

export const PublicApisAreHard = generateContentSlide("Public APIs", [
    "APIs that are consumed by other people are harder to manage",
    "Changing your API requires consumers to change their code",
    "In a single project, that's usually not a big deal",
    "For networked services, changes get trickier",
    "For libraries, changes get trickier"
]);

export const ExampleBadApi = generateCodeSlide("Dangerous API Example", [
    "Opening up too much functionality is a bad idea"
], {
    
    code: `
public class ExpressionEvaluator {

    private ParsedExpression parsedExpression;
    public double evaluateExpression(String expression) {
        // ... a bunch of parsing logic
        this.parsedExpression = new ParsedExpression(...);

        // ... math
        return result;
    }

    public ParsedExpression getExpression() {
        return this.parsedExpression;
    }
}` });

export const HttpApis = generateContentSlide("HTTP APIs", [
    "HTTP is a de facto standard way for network services to talk",
    "HTTP is language-agnostic and very simple (just stateless request-response)",
    "Services that communicate with HTTP can be written in different languages",
    "Services can use different data storage systems and be built with different tools",
    "Many different tools can debug HTTP APIs (cURL, Postman, testing frameworks)"
]);

export const ApiShape = generateContentSlide("API Shape", [
    "APIs are consumed by other software",
    "It is important to get the interface right",
    "In HTTP, the wrong paths, bodies, headers, etc can break apps",
    "In Java, the wrong interface means code doesn't compile",
    "Updating APIs is harder than updating inner details"
]);

export const ThatBringsUsTo = generateMessageSlide(
    "That brings us to our next assignment..."
);

export const references: Reference[] = [
    { label: "Example Solution: Assignment 3", url: "https://github.com/RyanKadri/spring2021-practicum-examples/tree/main/6-apis/housing-data-example" },
    { label: "Jeff Bezos API Mandate", url: "https://nordicapis.com/the-bezos-api-mandate-amazons-manifesto-for-externalization/", note: "You won't be directly tested on this but it's " },
    { label: "Stevey's Platform Rant", url: "https://gist.github.com/chitchcock/1281611", note: "You also won't be tested on this but it's pretty famous and pretty entertaining"}
]