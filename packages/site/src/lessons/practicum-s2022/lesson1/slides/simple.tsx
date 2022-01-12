import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateContentSlide, generateDefinitionSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import myPicture from "./about-me-picture-web.jpg";

export const Title = generateTitleSlide("Practicum in Software Construction", "Ryan Kadri");

export const AboutMePicture = generateMediaSlide(
    <img src={ myPicture.src } alt="Me at Smith Rock" />,
    "Smith Rock 2019",
    "About Me"
)

export const AboutMe = generateContentSlide("About Me", [
    "I am an adjunct professor",
    "I currently work at Capital One",
    "I grew up in New Jersey",
    "I studied CS at Rutgers",
    "I like rock climbing and being outdoors",
]);

export const Syllabus = generateMessageSlide(
    <Link variant="h4" href="https://templeu.instructure.com/courses/109327" target="_blank">
        Syllabus
    </Link>
)

export const VersionControlDef = generateDefinitionSlide("Version Control", 
    "A system for managing the evolution of a piece of software over time and across collaborators"
);

export const WhyVersionControl = generateMessageSlide(
    "Why do we want version control?"
);

export const ImagineAlmostDone = generateMessageSlide(
    "You are 90% done with an assignment. To do the last 10%, you need to change your working code"
);

export const ImagineChangingProjects = generateMessageSlide(
    "You are working on a new feature for your product. Your boss asks you to drop that and start trying to fix a bug"
);

export const ImagineATeam = generateMessageSlide(
    "You are working with a team. You need to all merge your work"
);

export const ItWouldBeNice = generateContentSlide("It would be nice if...", [
    'It were easy to take a "snapshot" of your project to return to if you break things',
    'You could easily switch between working on different changes at once',
    "You could merge different team members' work together",
    'You could compare the changes between different versions of your code',
    "You could see who made a specific change and why"
]);

export const Terms = generateContentSlide('What is a "version"?', [
    'An important "checkpoint" in your code',
    "You create new versions of your code as you build on it over time",
    "Keeping track of versions is more purposeful than tracking every change",
    "Versions sometimes have a name/number",
    "A version can be released to customers but doesn't need to be",
    'A version can be a snapshot of a codebase'
]);

export const EnterGit = generateContentSlide("Enter git", [
    "Developed by Linus Torvalds (creator of Linux)",
    "One of the most popular version control systems",
    "Operations generally add information to git rather than delete information",
    "That means operations are generally safe",
    "GitHub and git are two different things (we'll git into the differences later)"
]);

export const GitConcepts = generateContentSlide("Git Concepts", [
    { text: <><strong>Repository</strong> - A folder / set of files managed by git</>, children: [
        "Git tracks changes to a repository over time"
    ] },
    { text: <><strong>Commit</strong> - A commit in git is a point in time snapshot of the repository folder</>, children: [
        "A commit keeps track of the state of all files and folders",
        "A commit is kind of like a version",
        "A commit comes with a message and knows what commit came before it",
        'All commits are identified by a special "commit hash"'
    ] }
]);

export const GitConcepts2 = generateContentSlide("Git Concepts (continued)", [
    { text: <><strong>Branch</strong> - A pointer to a commit</>, children: [
        "You can use a branch to jump around easily between commits",
        "Branches make it easier to work on multiple changes at once"
    ] },
    { text: <><strong>Commit Graph</strong> - As a project grows, you can think of it as a graph of commits</>, children: [
        "Commits are nodes in the graph",
        "Branches can be used to make the graph something other than a straight line",
        "Branches can be merged and separate parts of the graph come together"
    ] }
])

export const BasicCommands = generateContentSlide("Basic git Commands", [
    <><code>git config</code> - Get/Set some git configuration parameters (run at installation)</>,
    <><code>git init</code> - Initialize your repository (run when starting a project)</>,
    <><code>git add/rm/reset/restore</code> - Stage or unstage files</>,
    <><code>git status</code> - List information about your current repository</>,
    <><code>git commit</code> - Take a snapshot of your working directory</>
]);

export const PlayingWithHistory = generateContentSlide("Using the git history", [
    <><code>git log</code> - Show the commits before your current one</>,
    <><code>git checkout</code> - Change your working directory to another version</>,
    <><code>git branch</code> - Create a branch or show branches</>
]);

export const WorkingWithOthers = generateContentSlide("Working with Others", [
    <><code>git clone</code> - Copies the files in a project (and the history) to your machine</>,
    <><code>git fetch</code> - Update your git graph based on a remote repo. Does not make changes directly</>,
    <><code>git merge</code> - Merges changes from another branch into yours</>,
    <><code>git pull</code> - Retrieves updates from another git repository</>,
    <><code>git push</code> - Makes updates to another git repository</>,
]);

export const MergeConflict = generateContentSlide("Merge Conflicts", [
    "Merge conflicts may happen when merging branches that touch the same file",
    "Conflicts can be resolved manually",
    "Git provides some tools to do it manually",
    "You should use a visual tool for merge conflicts (IMO)",
    "A sign of a merge conflict: <<<<<<< HEAD:something.xyz"
]);

export const GitHub = generateContentSlide("GitHub", [
    <>GitHub ≠ git</>,
    "GitHub is a host for Git repositories",
    "The most popular host for open source projects",
    "... but not the only host",
    'It is often where a "source of truth" repository lives for a project',
    "Open Source communities often use it to manage projects",
    "Issues and Pull Requests are how work usually gets done"
]);

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

export const references: Reference[] = [
    { label: "Git Manual", url: "https://git-scm.com/book/en/v2" },
    { label: "Open Source Definition", url: "https://opensource.org/osd" },
    { label: "Free Software Definition", url: "https://www.gnu.org/philosophy/free-sw.en.html" },
    { label: "License tl;dr", url: "https://tldrlegal.com/" }
]