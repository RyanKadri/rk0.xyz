import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { generateReferencesSlide } from "../../../shared/references-slide";

export const Title = generateTitleSlide("Project Management and Spring", "Ryan Kadri");

export const HowDoOpenSource = generateMessageSlide(
    "How do I use open source code in my projects?"
);

export const PossibilitiesForOpenSource = generateContentSlide("Using Libraries (Manual Approach)", [
    "You could copy the code from the open source library into your project",
    "You'd have to be careful to separate that source code from yours though",
    "This approach lets you tweak the library but that's dangerous",
    "If the code is packaged (a JAR file, a DLL), copy that into your project",
    "You may not want to have that file in version control",
]);

export const NaiveDownsides = generateContentSlide("Manual Approach Downsides", [
    "What if that library depends on other libraries (which depend on others)?",
    "How do you think about library versions?",
    "Is there a way to know which libraries are in a project?",
    "Where do libraries come from?"
])

export const ProjectManagement = generateContentSlide("It would be nice if...", [
    "you could list all your dependencies in one place",
    "if those dependencies have dependencies, they get installed too",
    "users could install/update dependencies with one command",
    "you could leave those dependencies out of version control",
    "there was a big library repository somewhere",
    "libraries had consistent versioning systems"
]);

export const EnterPackageManagers = generateContentSlide("Enter Package Managers", [
    "Package Managers manage the libraries and tools for a system",
    "In the software development space, they manage your software projects",
    { text: "Many operating systems have a package manager for tools", children: [
        "yum, apt-get, apt, homebrew, chocolatey"
    ] },
    "Often manage versions, updates, transitive dependencies"
]);

export const PackageManagementJava = generateContentSlide("Java Package Management", [
    "Java does not have a built-in package manager",
    { text: "Popular package managers have arisen: ", children: [
        "Maven",
        "Gradle",
        "Ivy"
    ]},
    "The lack of tight integration with the language has some downsides",
    "Versioning standards weren't as much of a thing when Java started",
]);

export const Maven = generateContentSlide("Maven", [
    "Maven defines project structure in a pom.xml file",
    'Takes a "Convention over Configuration" approach',
    "Uses a lot of plugins",
    "Dependencies are installed to shared .m2 directory",
    'Integrates "nicely" with IDEs',
    "Verbose but actually pretty nice to work with"
]);

export const MavenDependencies = generateCodeSlide("Maven Example", [
    "pom.xml configures dependencies, language version, build process, etc",
    "Fairly verbose"
], {
    language: "xml",
    code: `
<!-- omitted -->
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.15</maven.compiler.source>
    <maven.compiler.target>1.15</maven.compiler.target>
</properties>

<dependencies>
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version>30.1-jre</version>
    </dependency>
</dependencies>
<!-- omitted -->
    `.trim()
})

export const DependencyDive = generateCodeSlide("Maven Dependency", [
    "Dependencies give groupId, artifactId, version, scope, etc",
    "groupId: What organization is publishing this?",
    "artifactId: What artifact do you want from this group?",
    "version: Which version of the library?",
    "scope: How will it be used?"
], {
    language: "xml",
    code: `
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>30.1-jre</version>
    <scope>compile</scope>
</dependency>
    `.trim()
});

export const ExampleTime = generateMessageSlide(
    "Example Time!"
);

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