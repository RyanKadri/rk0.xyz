import { generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";

export const Title = generateTitleSlide("Project Management and Spring", "Ryan Kadri");

export const Agenda = generateContentSlide("Agenda", [
    "Review Git",
    "Quiz",
    "Java Compilation / Loading Process",
    "Project Management - Java vs Node",
    "Inversion of Control / Dependency Injection",
    "Spring",
    "Practical Examples"
]);

export const IntroJvm = generateContentSlide("Java Compilation", [
    "Java is a compiled language",
    "Java binaries run on the JVM",
    "The JVM startup process can be tricky",
    "Built-in java compiler is not user-friendly",
    "The JVM is not language-specific"
]);

export const IntroJvmClassLoading = generateContentSlide("JVM Class Loading", [
    "Java loads compiled binaries lazily",
    "Often uses a built-in ClassLoader",
    "Lets you provide your own",
    "(You can even write adhoc compiler plugins)",
    "Bytecode retains information about the source code"
]);

export const JavaHasMagic = generateMessageSlide(
    "Java has room for magic"
);

export const ProjectManagement = generateContentSlide("Dependency Management", [
    "How does your language include 3rd party libraries?",
    "Have you ever needed to install a dependency manually? (libpng12 or similar)",
    "Operating Systems often have package managers",
    "How might package managers work?"
]);

export const PackageManagementNode1 = generateContentSlide("Node Package Management", [
    "Old-school JS applications used <script> tags",
    "Hard to find dependencies",
    "Node has npm (Node Package Manager) built in",
    { text: "NPM has:", children: [
        "A central repo for libraries",
        "Opinions about versioning",
        "A helpful CLI"
    ]}
]);

export const PackageManagementNode2 = generateContentSlide("Node Package Management", [
    { text: "Project information is stored in package.json", children: [
        "Project name",
        "Website",
        "License",
        "Dependencies (with versions)"
    ]},
    "Dependencies are installed into local node_modules"
]);

export const PackageManagementJava = generateContentSlide("Java Package Management", [
    "Java does not have a built-in package manager",
    "You can save libraries locally and include on a classpath",
    { text: "Popular package managers have arisen: ", children: [
        "Maven",
        "Gradle",
        "Ivy"
    ]}
]);

export const Maven = generateContentSlide("Maven", [
    "Maven defines project structure in a pom.xml",
    'Takes a "Convention over Configuration" approach',
    "Uses a lot of plugins",
    "Dependencies are installed to shared .m2",
    'Integrates "nicely" with Eclipse'
]);

export const InversionOfControl = generateContentSlide("Inversion of Control", [
    "IoC frameworks flip the normal library-project relationship",
    "Normal: Custom code calls shared libraries",
    "IoC: Shared container calls custom code",
    "Helps decouple systems and reduces need for configuration"
]);

export const DependencyInjection = generateContentSlide("Dependency Injection", [
    "Pass dependencies explicitly rather than implicitly",
    "Makes code easier to follow and analyze",
    "Can help decouple systems",
    "Improves testability"
]);

export const Spring = generateContentSlide("Spring", [
    "Spring is an IoC container that supports Dependency Injection",
    "Has tons of sub-projects for different tasks",
    "Large integrated ecosystem",
    "Tries to reduce lock-in sometimes"
]);



export const References = generateReferencesSlide([
    { label: "Maven 30 Minute Guide", url: "https://maven.apache.org/guides/getting-started/index.html" },
    { label: "Spring Rest Getting Started", url: "https://spring.io/guides/gs/rest-service/" },
])