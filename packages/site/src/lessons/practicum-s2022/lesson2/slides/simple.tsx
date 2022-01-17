import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Open Source and Project Management", "Ryan Kadri");

export const OpenSourceP1 = generateContentSlide("Free and Open Source Software", [
    'What is "source"?',
    'When is it "open"?',
    'What is "free software"?'
]);

export const OpenSourceP2 = generateContentSlide("Open Source", [
    "Users are free to redistribute software",
    "You must make the source code available",
    "Users must be allowed to create derivatives",
    "You may prevent others from using your brand",
    "You may require users to include original source",
]);

export const OpenSourceP3 = generateContentSlide("Open Source", [
    "No discrimination (against people)",
    "No discrimination (against projects)",
    "You may require derivatives to include license",
    "Users can take pieces out of your code",
    "You can't restrict users' choice of other software",
    "Users can use your code with whatever tech they want"
]);

export const OpenSourceProfit = generateContentSlide("Open Source", [
    { text: "How do Open Source projects make money?", children: [
        "Donations",
        "Premium features",
        "SaaS features",
        "Support contracts",
        "Reduced maintenance burden (for company projects)"
    ]}
])

export const FreeSoftware = generateContentSlide("Free Software", [
    "The freedom to run the program as you wish, for any purpose",
    "The freedom to study how the program works, and change it so it does your computing as you wish. Access to the source code is a precondition for this.",
    "The freedom to redistribute copies so you can help others",
    "The freedom to distribute copies of your modified versions to others. By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this."
]);

export const Licensing = generateContentSlide("Licensing Software", [
    'Software needs a license to be "free"',
    "Licenses can be standardized and templated",
    "Licenses can affect derived software",
    "Companies care a lot about OSS licensing",
    <Link href="https://tldrlegal.com/" target="_blank">License tl;dr</Link>
]);

export const FairUse = generateMessageSlide(
    "Is it possible to plagiarize Open Source Code?"
);

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
    
    code: synHTML`
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
<!-- omitted -->`
})

export const DependencyDive = generateCodeSlide("Maven Dependency", [
    "Dependencies give groupId, artifactId, version, scope, etc",
    "groupId: What organization is publishing this?",
    "artifactId: What artifact do you want from this group?",
    "version: Which version of the library?",
    "scope: How will it be used?"
], {
    
    code: synHTML`<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>30.1-jre</version>
    <scope>compile</scope>
</dependency>`
});

export const ExampleTime = generateMessageSlide(
    "Example Time!"
);

export const WhatIsAJavaLibrary = generateContentSlide("What is a Java Library?", [
    "Java libraries are packaged as JAR files",
    "JARs are zip compressed archives",
    "Inside, they have class files and metadata",
    "Java is compiled into bytecode (not machine code)",
    "Some JAR files are runnable. Libraries generally are not",
    <>Often installs to <code>~/.m2/</code></>
]);

export const references: Reference[] = [
    { label: "Open Source Definition", url: "https://opensource.org/osd" },
    { label: "Free Software Definition", url: "https://www.gnu.org/philosophy/free-sw.en.html" },
    { label: "License tl;dr", url: "https://tldrlegal.com/" },
    { label: "Semantic Versioning", url: "https://semver.org/", 
        note:  "The formal definition is a bit stuffy. Points up 8 are important to understand though"
    },
    { label: "Maven 30 Minute Guide", url: "https://maven.apache.org/guides/getting-started/index.html" },
]