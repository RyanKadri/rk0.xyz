import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateDefinitionSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide(
    "APIs and Spring Part 2",
    "Ryan Kadri"
);

export const ApiDefinition = generateDefinitionSlide(
    "API",
    "Application Programming Interface - A specification for how a piece of software can interact with other software"
);

export const WhereApis = generateContentSlide("Where are APIs?", [
    "APIs can define the communications between entire systems (like networked services)",
    "APIs can define how to use narrow systems (like how one class uses another)",
    "APIs can refer to network communication or other kinds of processes",
    "APIs are often focused on direct interactions",
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

export const ApiShape = generateContentSlide("API Shape", [
    "APIs are consumed by other software",
    "It is important to get the interface right",
    "In HTTP, the wrong paths, bodies, headers, etc can break apps",
    "In Java, the wrong interface means code doesn't compile",
    "Updating APIs is harder than updating inner details"
]);

export const HttpApis = generateContentSlide("HTTP APIs", [
    "HTTP is a de facto standard way for network services to talk",
    "HTTP is language-agnostic and very simple (just stateless request-response)",
    "Services that communicate with HTTP can be written in different languages",
    "Services can use different data storage systems and be built with different tools",
    "Many different tools can debug HTTP APIs (cURL, Postman, testing frameworks)"
]);

export const RestAPIs = generateContentSlide('"REST" APIs', [
    "One way to structure HTTP APIs is REST",
    "REST thinks about the world in terms of resources and nouns",
    "Tries to enforce proper headers and standard response codes",
    'REST suggests using URLs in your responses to "link" your data model',
    "Not always used perfectly but often a good model"
]);

export const BookstoreModel = generateContentSlide("REST-ish Book Store API", [
    <><code>GET /books</code> - Get some data about all books in the system</>,
    <><code>GET /books/abc123</code> - Get details about a book with the ID abc123</>,
    <><code>POST /books</code> - Create a new book (request body gives details)</>,
    <><code>PUT /books/abc123</code> - Update book abc123 to a new state (request body defines)</>,
    <><code>DELETE /books/abc123</code> - Remove the record for book abc123</>
]);

export const BookstoreBadModel = generateContentSlide("Non-REST Book Store API", [
    <><code>GET /read-books</code></>,
    <><code>GET /read-books</code> (book ID defined in headers)</>,
    <><code>POST /create-book</code> (book details and ID defined in headers)</>,
    <><code>POST /update-book</code></>,
    <><code>POST /delete-book</code></>
]);

export const SpringApis = generateContentSlide("Spring APIs", [
    "When making APIs in Spring, you tell Spring what request data you care about",
    "And what the response should look like",
    "Spring actually extracts the data from the request and calls the proper methods",
    "The method return value tells Spring how to respond",
    "The combination of URL and method tell spring what method to call"
]);

export const ExampleSpring = generateCodeSlide("Spring Example", [
    "Spring uses Java Reflection to figure out how to call your methods",
    "Also uses Reflection to figure out how to structure the HTTP response"
], {
    code: synJava`
@RestController
public class EmployeeDB {
    @GetMapping("/employees/{employeeId}")
    public Person fetchEmployee(@PathVariable Integer employeeId) { 
        /* ... */
    }
}`
});

export const Serialization = generateContentSlide("Serialization", [
    "HTTP requests pass information as text",
    "HTTP has no concept of Java classes",
    "It's useful to be able to treat JSON data from a request as an object",
    "It's also useful to go from an object back to JSON",
    "Spring does this magically for you (actually using more reflection)",
    "Going from an object to a text representation is serialization",
    "Going from text to an object is deserialization"
]);

export const ErrorHandling = generateContentSlide("Error Handling", [
    <>When your <code>@XMapping</code> method throws an exception, Spring sends back an error HTTP response</>,
    "You can control what error codes and info get sent back for specific errors",
    "Sometimes you want to throw specific exceptions when something is unexpected",
    "There are a number of ways to do this",
    "Different approaches have different benefits",
    <>One easy approach is to throw a <code>ResponseStatusException</code></>
]);

export const Subtitle = generateTitleSlide(
    "Spring Configuration",
    "Ryan Kadri"
);

export const WhoBuilds = generateMessageSlide(
    "How do your RestController classes get constructed? Why aren't the methods static?"
);

export const InstanceMethods = generateCodeSlide("Instance Methods", [
    "In Java, instance methods can only be called on an instance of an object",
    "static methods do not need an instance"
], {
    code: synJava`
class MyCalculator {
    public static int add(int a, int b) { return a + b; }
    public int subtract(int a, int b) { return a - b; }
}

class App {
    public static void main(String[] args) {
        MyCalculator.add(1,2); // All good
        MyCalculator.subtract(1,2); // no good
        var calc = new MyCalculator();
        calc.subtract(1,2); // Good again
    }
}`
});

export const MultiFileProjects = generateContentSlide("Multi-File Projects", [
    "Beyond very simple projects, it helps to split up your code",
    "Code is usually split into multiple files and multiple classes",
    "Files and classes tend to be organized by functionality",
    "How does code in different files interact?",
    "In other words, how do classes interact each other?"
]);

export const LoggerProblemStatement = generateMessageSlide(
    "Let's say we have a Logger class and we want to use it in different files"
)

export const StaticMethodApproach = generateCodeSlide("Approach 1: Static methods", [
    "The logger has a static method",
    "Classes that use the logger call the static method"
], {
    
    code: synJava`public class ImportantProcessHandler {
    public static void handleImportantProcess() {
        // Do something...
        Logger.log("Done!");
    }
}

public class Logger {
    public static void log(String message) {
        System.out.println(message)
    }
}`
});

export const StaticMethodApproachProsCons = generateContentSlide("Approach 1: Pros and Cons", [
    "Pro: Super simple and unambiguous",
    "Con: All callers are tied to this specific logger",
    "What if logging needs to change across the application?",
    "You change the logger in one place",
    "What if the logger needs to behave differently in different circumstances?",
    "Doable. But requires a bit more work",
    "This might be a good place for interfaces"
]);

export const InstanceMethodApproach = generateCodeSlide("Approach 2: Instance Methods", [
    "The logger can be constructed",
    "Classes that call the logger use an instance method",
], {
    
    code: synJava`public class ImportantProcessHandler {
    private final Logger myLogger;

    public void handleImportantProcess() {
        myLogger.log("Done!");
    }
}

public class Logger {
    public void log(String message) {
        System.out.println(message)
    }
}`
});

export const InstanceMethodProsCons = generateContentSlide("Approach 2: Pros and Cons", [
    "Pro: You could use an interface here",
    "Con: Where does the logger instance come from?",
    "You could construct it in ImportantProcessHandler",
    "... but then you're stuck with a specific type of logger",
    "You could pass it in via the constructor",
    "... but then who constructs it?"
]);

export const DependencyInjection = generateContentSlide("Dependency Injection", [
    "Spring has another approach to this problem",
    "Spring encourages approach 2 (to allow for using interfaces)",
    "Passes dependencies to your class either by the constructor or setters",
    "Handles constructing dependency classes for you",
    "If a class is dependent on an interface, figures out which class implements the interface"
]);

export const SpringApproach = generateCodeSlide("Approach 3: Dependency Injection", [
    "Use annotations to indicate that a class can be injected",
    "Spring will pass you an instance of a class",
], {
    
    code: synJava`public class ImportantProcessHandler {

    public ImportantProcessHandler(Logger logger) {
        this.myLogger = logger;
    }

    public void handleImportantProcess() {
        myLogger.log("Done!");
    }
}

@Component
public class StandardOutLogger implements Logger {
    public void log(String message) {
        System.out.println(message)
    }
}`});

export const references: Reference[] = [
    { label: "Example Solution: Assignment 3", url: "https://github.com/RyanKadri/spring2021-practicum-examples/tree/main/6-apis/housing-data-example" },
    { label: "Jeff Bezos API Mandate", url: "https://nordicapis.com/the-bezos-api-mandate-amazons-manifesto-for-externalization/", note: "You won't be directly tested on this but it's " },
    { label: "Stevey's Platform Rant", url: "https://gist.github.com/chitchcock/1281611", note: "You also won't be tested on this but it's pretty famous and pretty entertaining"}
]