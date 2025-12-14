import { Link } from "@mui/material";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Open Source and Project Management", "Ryan Kadri");

export const OpenSourcePractical = generateContentSlide("Open Source Code", [
  {
    text: "Open source projects often have a few characteristics",
    children: [
      "The source code is available to view (pretty much required)",
      "The project is often available for free",
      "Often but not always, the project is on GitHub (not a requirement for open source)",
      "There is an active community supporting the project",
      'The project evolves "in the open"',
    ],
  },
]);

export const InTheOpen = generateMessageSlide("What does it mean for projects to develop in the open?");

export const GitHubOssFeatures = generateContentSlide("Open Development", [
  "Obviously in open source, code is public",
  "Other discussions happen in public too",
  "This can happen in many public forums (Slack, Discord, Blogs, etc)",
  "GitHub has some special features for discussing code changes in particular",
  "The most common you'll hear about is a Pull Request",
  "A Pull Request requests that the owner of a repository merge one branch into another",
  "Users can discuss the code changes and make suggestions before merging",
  <Link href="https://github.com/facebook/react/pull/23095">Example Pull Request</Link>,
]);

export const Forks = generateContentSlide("Forks", [
  "Forks are a cloned version of a git repository that live in another spot",
  "Mostly this is useful for talking about git hosts like GitHub, BitBucket, etc",
  "For open source contributions, you usually fork a repo to get your own copy",
  'Then you make changes to that copy and make PRs from that copy to the "main" repo',
]);

export const Philosophy = generateMessageSlide("Back to Some Philosophy...");

export const OsiDefP1 = generateContentSlide("OSI Open Source Definition", [
  <>
    An organization called the <Link href="https://opensource.org/">OSI</Link> defined Open Source software with the
    following conditions
  </>,
  "Users are free to redistribute software",
  "You must make the source code available",
  "Users must be allowed to create derivatives",
  "You may prevent others from using your brand",
  "You may require users to include original source",
]);

export const OsiDefP2 = generateContentSlide("OSI Open Source Definition", [
  "No discrimination (against people)",
  "No discrimination (against projects)",
  "You may require derivatives to include license",
  "Users can take pieces out of your code",
  "You can't restrict users' choice of other software",
  "Users can use your code with whatever tech they want",
]);

export const FreeSoftware = generateContentSlide("Free Software", [
  "The freedom to run the program as you wish, for any purpose",
  "The freedom to study how the program works, and change it so it does your computing as you wish. Access to the source code is a precondition for this.",
  "The freedom to redistribute copies so you can help others",
  "The freedom to distribute copies of your modified versions to others. By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.",
]);

export const Licensing = generateContentSlide("Licensing Software", [
  'Software needs a license to be "free"',
  "Licenses can be standardized and templated",
  "Licenses can affect derived software",
  "Companies care a lot about OSS licensing",
  <Link href="https://tldrlegal.com/" target="_blank">
    License tl;dr
  </Link>,
]);

export const OpenSourceProfit = generateContentSlide("Open Source for Profit?", [
  {
    text: "How do Open Source projects make money?",
    children: [
      "Donations",
      "Premium features",
      "SaaS features",
      "Support contracts",
      "Reduced maintenance burden (for company projects)",
    ],
  },
]);

export const HowDoOpenSource = generateMessageSlide("How do I use open source code in my projects?!");

export const PossibilitiesForOpenSource = generateContentSlide("Using Libraries (Manual Approach)", [
  "You could copy the code from the open source library into your project",
  "You'd have to be careful to separate that source code from yours though",
  "How do you know where your code ends and the library starts?",
  "How do you update the library?",
  "How do others know which libraries you're using?",
  "How do others know where the library came from?",
  "What if that library needs other libraries?",
]);

export const ProjectManagement = generateContentSlide("It would be nice if...", [
  "You could list all your dependencies in one place",
  "You could separate library code from your code",
  "There was a big trustworthy library repository somewhere",
  "Users could install/update dependencies with one command",
  "If those dependencies have dependencies, they get installed too",
]);

export const EnterPackageManagers = generateContentSlide("Enter Package Managers", [
  "Package managers try to solve many of these problems",
  "They know how to get libraries without you saying exactly where they are",
  "They often help integrate libraries into your project",
  "They often help keep library code separate from your project code",
  "Often manage versions, updates, transitive dependencies",
  "If you've ever used homebrew, apt, chocolatey, etc, programming package managers are similar",
]);

export const PackageManagementJava = generateContentSlide("Java Package Management", [
  "Java does not have a built-in package manager",
  { text: "Popular package managers have arisen: ", children: ["Maven", "Gradle", "Ivy"] },
  "Different package managers have different tradeoffs",
  "We'll use Maven",
]);

export const Maven = generateContentSlide("Maven", [
  "You configure Maven with a pom.xml file",
  'Maven takes a "Convention over Configuration" approach',
  "Very opinionated about how your project is structured",
  "Dependencies are installed to special shared directory",
  "Integrates nicely with IDEs",
  "Verbose but actually pretty nice to work with",
]);

export const MavenDependencies = generateCodeSlide(
  "Maven Example",
  ["pom.xml configures dependencies, language version, build process, etc"],
  {
    code: synHTML`
<!-- omitted -->
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
</properties>

<dependencies>
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version>30.1-jre</version>
    </dependency>
</dependencies>
<!-- omitted -->`,
  },
);

export const DependencyDive = generateCodeSlide(
  "Maven Dependency",
  [
    "Dependencies give groupId, artifactId, version, scope, etc",
    "groupId: What organization manages this library?",
    "artifactId: What library do you want?",
    "version: Which version of the library do you want?",
    "scope: How will it be used?",
  ],
  {
    code: synHTML`<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>30.1-jre</version>
    <scope>compile</scope>
</dependency>`,
  },
);

export const ExampleTime = generateMessageSlide("Example Time!");

export const WhatIsAJavaLibrary = generateContentSlide("What is a Java Library?", [
  "Java libraries are packaged as JAR files",
  "JARs are zip compressed archives",
  "Inside, they have class files and metadata",
  "Java is compiled into bytecode (not machine code)",
  "Some JAR files are runnable. Libraries generally are not",
  <>
    Often installs to <code>~/.m2/</code>
  </>,
]);

export const references: Reference[] = [
  { label: "Open Source Definition", url: "https://opensource.org/osd" },
  { label: "Free Software Definition", url: "https://www.gnu.org/philosophy/free-sw.en.html" },
  { label: "License tl;dr", url: "https://tldrlegal.com/" },
  {
    label: "Semantic Versioning",
    url: "https://semver.org/",
    note: "The formal definition is a bit stuffy. Points up 8 are important to understand though",
  },
  {
    label: "Maven 30 Minute Guide",
    url: "https://maven.apache.org/guides/getting-started/index.html",
  },
];
