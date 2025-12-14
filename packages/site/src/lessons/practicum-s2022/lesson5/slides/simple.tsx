import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateDefinitionSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide("APIs and Spring Part 2", "Ryan Kadri");

export const ApiDefinition = generateDefinitionSlide(
  "API",
  "Application Programming Interface - A specification for how a piece of software can interact with other software",
);

export const WhereApis = generateContentSlide("What are APIs?", [
  "APIs can define the communications between entire systems (like networked services)",
  "APIs can define how narrow systems work together (like how one class uses another)",
  "APIs are often focused on direct interactions",
  "... but can also be more implicit",
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
  "For libraries, changes get trickier",
]);

export const ApiShape = generateContentSlide("API Shape", [
  "APIs are consumed by other software",
  "It is important to get the interface right",
  "In HTTP, the wrong paths, bodies, headers, etc can break apps",
  "In Java, the wrong interface means code doesn't compile",
  "Updating APIs is harder than updating inner details",
]);

export const HttpApis = generateContentSlide("HTTP APIs", [
  "HTTP is a de facto standard way for network services to talk",
  "HTTP is language-agnostic and very simple (just stateless request-response)",
  "Services that communicate with HTTP can be written in different languages",
  "Services can use different data storage systems and be built with different tools",
  "Many different tools can debug HTTP APIs (cURL, Postman, testing frameworks)",
]);

export const RestAPIs = generateContentSlide('"REST" APIs', [
  "One way to structure HTTP APIs is REST",
  "REST thinks about the world in terms of resources and nouns",
  "Tries to enforce proper headers and standard response codes",
  'REST suggests using URLs in your responses to "link" your data model',
  "Not always used perfectly but often a good model",
]);

export const BookstoreModel = generateContentSlide("REST-ish Book Store API", [
  <>
    <code>GET /books</code> - Get some data about all books in the system
  </>,
  <>
    <code>GET /books/abc123</code> - Get details about a book with the ID abc123
  </>,
  <>
    <code>POST /books</code> - Create a new book (request body gives details)
  </>,
  <>
    <code>PUT /books/abc123</code> - Update book abc123 to a new state (request body defines)
  </>,
  <>
    <code>DELETE /books/abc123</code> - Remove the record for book abc123
  </>,
]);

export const BookstoreBadModel = generateContentSlide("Non-REST Book Store API", [
  <>
    <code>GET /read-books</code>
  </>,
  <>
    <code>GET /read-books</code> (book ID defined in headers)
  </>,
  <>
    <code>POST /create-book</code> (book details and ID defined in headers)
  </>,
  <>
    <code>POST /update-book</code>
  </>,
  <>
    <code>POST /delete-book</code>
  </>,
]);

export const SpringApis = generateContentSlide("Spring APIs", [
  "When making APIs in Spring, you tell Spring what request data you care about",
  "And what the response should look like",
  "Spring actually extracts the data from the request and calls the proper methods",
  "The method return value tells Spring how to respond",
  "The combination of URL and method tell spring what method to call",
]);

export const ExampleSpring = generateCodeSlide(
  "Spring Example",
  [
    "Spring uses Java Reflection to figure out how to call your methods",
    "Also uses Reflection to figure out how to structure the HTTP response",
  ],
  {
    code: synJava`
@RestController
public class EmployeeDB {
    @GetMapping("/employees/{employeeId}")
    public Person fetchEmployee(@PathVariable Integer employeeId) { 
        /* ... */
    }
}`,
  },
);

export const Serialization = generateContentSlide("Serialization", [
  "HTTP requests pass information as text",
  "HTTP has no concept of Java classes",
  "It's useful to be able to treat JSON data from a request as an object",
  "It's also useful to go from an object back to JSON",
  "Spring does this magically for you (actually using more reflection)",
  "Going from an object to a text representation is serialization",
  "Going from text to an object is deserialization",
]);

export const ErrorHandling = generateContentSlide("Error Handling", [
  <>
    When your <code>@XMapping</code> method throws an exception, Spring sends back an error HTTP response
  </>,
  "You can control what error codes and info get sent back for specific errors",
  "Sometimes you want to throw specific exceptions when something is unexpected",
  "There are a number of ways to do this",
  "Different approaches have different benefits",
  <>
    One easy approach is to throw a <code>ResponseStatusException</code>
  </>,
]);

export const Subtitle = generateTitleSlide("Spring Configuration", "Ryan Kadri");

export const MultiFileProjects = generateContentSlide("Multi-File Projects", [
  "Beyond very simple projects, it helps to split up your code",
  "Code is usually split into multiple files and multiple classes",
  "Files and classes tend to be organized by functionality",
  "How does code in different files interact?",
  "In other words, how do classes interact each other?",
]);

export const InstanceMethods = generateCodeSlide(
  "Instance Methods",
  [
    "In Java, instance methods can only be called on an instance of an object",
    "static methods do not need an instance",
  ],
  {
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
}`,
  },
);

export const ProblemStatement = generateContentSlide("Problem Statement: Financial Calculator", [
  "Imagine a complex stock trading engine that uses the data in your profile to make a trade",
  {
    text: "You might want to split this into 2 (or more) parts",
    children: [
      "The part that fetches your currently held stocks (ProfileFetcher)",
      "The part that calculates what trades you should make (TradeCalculator)",
    ],
  },
  "How do these files connect?",
]);

export const StaticMethodApproach = generateCodeSlide(
  "Approach 1: Static methods",
  [
    "The profile fetcher has a static method",
    "Before calculating trades, our tool will call the static method to fetch your profile",
  ],
  {
    code: synJava`public class TradeCalculator {
    public static Something calculateTrades(String userId) {
        ProfileData data = ProfileFetcher.fetchProfile(userId)
        // Do math !
    }
}

public class ProfileFetcher {
    public static ProfileData fetchProfile(String userId) {
        // Complex SQL?
        return userProfile;
    }
}`,
  },
);

export const StaticMethodApproachProsCons = generateContentSlide("Approach 1: Pros and Cons", [
  "Pro: The connection between classes is nice and unambiguous",
  {
    text: "Con: The TradeCalculator is totally tied to the ProfileFetcher",
    children: [
      "These classes are tightly coupled. TradeCalculator relies on the specific ProfileFetcher",
      "Yeah? So what?",
      "It makes unit testing the TradeCalculator difficult",
    ],
  },
  "Con: If you have many static methods, it can be tricky to see how classes are related",
]);

export const InstanceMethodApproach = generateCodeSlide(
  "Approach 2: Instance Methods",
  [
    "The ProfileFetcher can be constructed and passed to TradeCalculator",
    "When calculating trades, our tool calls the instance method",
  ],
  {
    code: synJava`
public class TradeCalculator {    
    // Set this.profileFetcher in TradeCalculator's constructor
    public Something calculateTrades(String userId) {
        ProfileData data = this.profileFetcher.fetchProfile(userId)
        // Do math !
    }
}

public class ProfileFetcher {
    public ProfileData fetchProfile(String userId) {
        // Complex SQL?
        return userProfile;
    }
}`,
  },
);

export const InstanceMethodProsCons = generateContentSlide("Approach 2: Pros and Cons", [
  "Pro: ???",
  "Con: Who builds the ProfileFetcher?",
  "You could construct it in TradeCalculator",
  "... but then you're stuck with a specific ProfileFetcher again",
  "You could pass it in via the TradeCalculator constructor",
  "... but then who constructs it?",
]);

export const UseAnInterface = generateCodeSlide(
  "Approach 2b: Use an Interface",
  [
    "Make an interface for ProfileFetcher",
    "Pass that interface in the constructor for TradeCalculator",
    "Construct the ProfileFetcher outside of TradeCalculator",
  ],
  {
    code: synJava`
public interface ProfileFetcher {
    public ProfileData fetchProfile(String userId);
}
public class SqlProfileFetcher implements ProfileFetcher {
    // ...
}
public class TradeCalculator {    
    private final ProfileFetcher profileFetcher;
    public TradeCalculator(ProfileFetcher profileFetcher) {
        this.profileFetcher = profileFetcher
    }
}`,
  },
);

export const InterfaceProsCons = generateContentSlide("Approach 2b: Pros and Cons", [
  {
    text: "Pro: Now we can test TradeCalculator without worrying about the database",
    children: ["... or actually making trades"],
  },
  "Con: Still need to figure out who builds the ProfileFetcher...",
  "Con: A bit more complex to deal with",
]);

export const WhySpring = generateMessageSlide("What does this have to do with Spring?");

export const DependencyInjection = generateContentSlide("Dependency Injection", [
  "Spring tries to help make  this process simpler",
  "Handles constructing classes for you",
  "If a class is dependent on an interface, figures out which class implements the interface",
  "... and then constructs that class for you",
]);

export const WhoBuilds = generateMessageSlide(
  "How do your RestController classes get constructed? Why aren't the methods static?",
);

export const ConstructingOthers = generateCodeSlide(
  "More Constructors",
  [
    "Spring will automatically construct your @RestController classes...",
    "But it will also construct your other classes too!",
  ],
  {
    code: synJava`
@RestController
class CalculatorController {
    private final MyCalculator calculator;
    public CalculatorController(MyCalculator calculator) {
        this.calculator = calculator;
    }

    @GetMapping("/add/{a}/{b}")
    public double add(double a, double b) {
        return this.calculator.add(a,b);
    }
}`,
  },
);

export const SpringApproach = generateContentSlide("Approach 3: Dependency Injection", [
  'Use annotations to indicate that a class can be "injected" into another',
  "Spring will pass you an instance of that class in the constructor of a class that depends on it",
  "This makes testing easier",
  "And also makes it clear what classes depend on which other classes",
]);

export const references: Reference[] = [
  {
    label: "Jeff Bezos API Mandate",
    url: "https://nordicapis.com/the-bezos-api-mandate-amazons-manifesto-for-externalization/",
    note: "You won't be directly tested on this but it's interesting",
  },
  {
    label: "Stevey's Platform Rant",
    url: "https://gist.github.com/chitchcock/1281611",
    note: "You also won't be tested on this but it's pretty famous and pretty entertaining",
  },
];
