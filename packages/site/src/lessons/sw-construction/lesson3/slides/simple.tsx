import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Java Spring and Networked Services", "Ryan Kadri");

export const HowDoNetworking = generateMessageSlide("How do programs communicate across a network?");

export const NetworkingBasics = generateContentSlide("Networking", [
  "For computers to communicate over networks, they need an identifier",
  "Across network segments, the standard identifier is an IP address",
  "IP addresses come in 2 varieties: IPv4 (32 bits) and IPv6 (128 bits)",
  "IPv4 addresses are often written like: 12.123.14.243",
  "IP addresses can be public, private, or local",
  "Public IP addresses should have one owner and identify one logical entity",
  "Private networks often share one of a few common ranges",
]);

export const NetworkingPart2 = generateContentSlide("Networking", [
  "Domain names on the internet point to a public IP address",
  "For instance, rk0.xyz -> 159.65.216.232",
  "This uses a system called DNS",
  'When you buy a domain name and set up servers, somebody needs to "resolve" the domain',
  "Private networks can still have their own private DNS",
  "localhost is a domain name that generally points to 127.0.0.1",
  "It is specific to your machine (loopback)",
]);

export const HttpBasics = generateContentSlide("HTTP", [
  "HTTP is a common networking protocol",
  "HTTP thinks about the world in terms of resources (identified by a URL)",
  "You interact with resources according to a standard verb (GET, POST, PUT, DELETE, etc)",
  'Many networked services "speak" HTTP',
  "Your browser makes HTTP requests to websites",
  "HTTP is a pretty non-opinionated tool",
]);

export const RequestMethod = generateContentSlide("Request Method", [
  'Requests have a "method" to define how you want to interact with a resource',
  "Common methods include GET, POST, PUT, DELETE",
  "They correspond (usually) to Read, Create, Update, Delete, respectively",
  "Server can interpret how it wants",
  "Browser uses GET by default when you browse to a page",
  "May also see OPTIONS, PATCH, HEAD and others less frequently",
]);

export const HttpHeaders = generateContentSlide("HTTP Headers", [
  "Contain metadata about the request / response",
  "Uppercase words separated by dashes",
  {
    text: "Examples include",
    children: ["Authorization", "Expires / Age / Cache-Control", "Cookie", "Accept / Content-Type"],
  },
]);

export const HttpBody = generateContentSlide("HTTP Request / Response Body", [
  "Main request / response data",
  "In a request, this usually pairs with POST / PUT requests and some user-initiated interaction",
  "Most (but not all) responses have a body",
  "Can be HTML, JSON, XML, Text, etc depending on the URL requested (and some headers)",
]);

export const ResponseCodes = generateContentSlide("HTTP Response Codes", [
  "A 3 digit numerical value that describes succinctly how the request went",
  "Somewhat standardized and agreed upon",
  {
    text: "200-299 means the request was successful",
    children: [
      "200: OK - This is the most common response. Means everything went ok",
      "201: Created - Something was created on the server",
    ],
  },
  {
    text: "300-399 means the request is being redirected",
    children: ["301: Moved Permanently", "302: Found (Moved Temporarily)", "304: Not Modified"],
  },
]);

export const ResponseCodesContinued = generateContentSlide("Response Codes Continued", [
  {
    text: "400-499 means the client did something wrong",
    children: [
      "400: Bad Request - The server can't understand the request",
      "404: Not Found - The requested resource does not exist",
      "418: I'm a teapot - The server refuses the attempt to brew coffee with a teapot.",
    ],
  },
  {
    text: "500-599 means there was an error on the server",
    children: [
      "500: Internal Server Error - Something went wrong",
      "503: The server is not ready to handle the request",
      "504: Another server behind the one you are talking to timed out",
    ],
  },
]);

export const HttpApis = generateMessageSlide("Are there standard ways to make an HTTP API?");

export const HttpDesigns = generateContentSlide('"REST" APIs', [
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

export const LetsLookAtApi = generateMessageSlide("Let's review our Spring server");

export const SpringPart = generateTitleSlide("Part 2: Building Spring Apps", "Dependency Injection and Decoupling");

export const MultiFileProjects = generateContentSlide("Multi-File Projects", [
  "Beyond very simple projects, it helps to split up your code",
  "Code is usually split into multiple files and multiple classes",
  "Files and classes tend to be organized by functionality",
  "How does code in different files interact?",
  "In other words, how do classes interact with their dependencies?",
]);

export const LoggerProblemStatement = generateMessageSlide(
  "Let's say we have a Logger class and we want to use it in different files",
);

export const StaticMethodApproach = generateCodeSlide(
  "Approach 1: Static methods",
  ["The logger has a static method", "Classes that use the logger call the static method"],
  {
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
}`,
  },
);

export const StaticMethodApproachProsCons = generateContentSlide("Approach 1: Pros and Cons", [
  "Pro: Super simple and unambiguous",
  "Con: All callers are tied to this specific logger",
  "What if logging needs to change across the application?",
  "You change the logger in one place",
  "What if the logger needs to behave differently in different circumstances?",
  "Doable. But requires a bit more work",
  "This might be a good place for interfaces",
]);

export const InstanceMethodApproach = generateCodeSlide(
  "Approach 2: Instance Methods",
  ["The logger can be constructed", "Classes that call the logger use an instance method"],
  {
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
}`,
  },
);

export const InstanceMethodProsCons = generateContentSlide("Approach 2: Pros and Cons", [
  "Pro: You could use an interface here",
  "Con: Where does the logger instance come from?",
  "You could construct it in ImportantProcessHandler",
  "... but then you're stuck with a specific type of logger",
  "You could pass it in via the constructor",
  "... but then who constructs it?",
]);

export const DependencyInjection = generateContentSlide("Dependency Injection", [
  "Spring has another approach to this problem",
  "Spring encourages approach 2 (to allow for using interfaces)",
  "Passes dependencies to your class either by the constructor or setters",
  "Handles constructing dependency classes for you",
  "If a class is dependent on an interface, figures out which class implements the interface",
]);

export const SpringApproach = generateCodeSlide(
  "Approach 3: Dependency Injection",
  ["Use annotations to indicate that a class can be injected", "Spring will pass you an instance of a class"],
  {
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
}`,
  },
);

export const references: Reference[] = [
  { label: "HTTP Basics", url: "https://devqa.io/http-basics/" },
  {
    label: "Dependency Injection Approach",
    url: "https://www.codementor.io/@olotintemitope/dependency-injection-explained-in-plain-english-b24hippx7",
    note:
      "I like this explanation but one part it doesn't totally hit is that using a dependency injection like Spring " +
      "ends up meaning that another system builds your dependencies for you. They build the flashlight and pick the tires for the car",
  },
];
