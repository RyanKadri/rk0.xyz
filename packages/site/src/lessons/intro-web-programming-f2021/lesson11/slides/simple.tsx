import { Link } from "@material-ui/core";
import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML, synJS } from "../../../../common/highlighting";

export const TitleSlide = generateTitleSlide("Using JavaScript Libraries", "Ryan Kadri");

export const InReview = generateMessageSlide("In Review...");

export const BuiltIn = generateCodeSlide(
  "Built-in Objects",
  [
    "JavaScript has some useful built-in methods and objects",
    <>
      For operations with dates, use the <code>Date</code> object
    </>,
    <>
      For advanced math, use the <code>Math</code> methods
    </>,
    <Link href="https://developer.mozilla.org/en-US/docs/Web/API">Browser APIs</Link>,
  ],
  {
    code: synJS`
const random = Math.random();
const test = Math.sin(Math.PI / 6);

const today = new Date();
const month = today.getMonth()
`,
  }
);

export const WhatIsLibrary = generateContentSlide("What is a Library?", [
  'Reusable code that can "extend" your browser\'s capabilities',
  "Some libraries are narrow-focused (math, graphics, sound, etc)",
  "Some help with general programming tasks (working with strings, arrays, etc)",
  "Some libraries solve really specific problems (read data out of a QR code)",
  "Contains functions, constants, etc",
]);

export const HowToImport = generateCodeSlide(
  'How to "import" libraries',
  [
    "The easiest way to use a JS library is just linking with a <script> tag",
    "This lets you pull in somebody else's code from somewhere on the internet",
    "In your HTML, CSS can go directly into a <style> tag",
    "CSS can also be in an external file with a <link>",
    "To use a CSS framework, just link the file with a <link> tag",
    <>
      You may see some examples online with <code>import</code> but you need some special tools for those
    </>,
  ],
  {
    code: synHTML`
<body>
    ...
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>`,
  }
);

export const HowToUse = generateContentSlide("How to Use Libraries", [
  "Libraries come in a number of shapes and sizes",
  "Some just work without any input",
  "Some libraries create a bunch of functions and objects that you can use",
  "Some libraries totally change the way you write your code",
]);

export const HowWriteLibrary = generateMessageSlide("How would you write a library?");

export const BrainstormingLibraries = generateContentSlide("Brainstorming", [
  "Maybe create a bunch of global functions and constants?",
  "Maybe create a single object with a bunch of methods?",
  "Is it possible to add methods to built-in objects?",
  "Need to think about perspective of both the library writer and user",
]);

export const ThinkingGlobals = generateContentSlide("Thinking about globals", [
  "Global variables are not always nice",
  "They can be overridden, written, and read by anyone",
  "Global names must be unique",
  "Picking names is hard / important",
]);

export const BunchOfFunctions = generateContentSlide("A bunch of functions", [
  {
    text: "Pros",
    children: ["User does not need to always prefix operations with your library name", "Easier to write the library"],
  },
  {
    text: "Cons",
    children: [
      "Unclear (to user) where the functions are coming from",
      "Functions and constants can override your variables (or other libraries)",
    ],
  },
]);

export const OneObject = generateContentSlide("One Object", [
  "Declare all methods and constants as properties of a global library object",
  {
    text: "Pros",
    children: [
      "Less chance of problems with unique naming",
      "The user knows when the library is being used",
      "The developer tools make it easier to see what functions / constants are included",
    ],
  },
  {
    text: "Cons",
    children: ["The user needs to type more", "Needs to load the whole library at once"],
  },
]);

export const JQuery = generateCodeSlide(
  "JQuery",
  [
    "One of the most common / famous old libraries",
    "Simplifies common DOM operations",
    "Supports very old browsers",
    "Popularized using CSS Selectors in JavaScript",
    "Helped browsers unify on standards",
  ],
  {
    code: synJS`
$("#my-list li")
    .css("color", "red")
    .text((i, old) => \`Item \${i + 1}.\${i + 1}\`)
    .append(
        $("<ul>").append(
            $("<li>", { class: "inner" })
                .text("inner")
                .hover(e => $(e.currentTarget).css("color", "green"))
        )
    )`,
  }
);

export const MoProblems = generateContentSlide("Mo $ mo problems", [
  "Because JQuery was so popular, examples with it are everywhere",
  "A lot of people learned JS through the lens of JQuery",
  "StackOverflow often ends up assuming you're using it",
  'Look for the telltale "$" everywhere',
  "Not a bad library. But maybe not suuuper necessary anymore",
]);

export const ChartJS = generateCodeSlide(
  "Chart.js",
  ["Helps create graphs in the browser", "Much narrower goal than JQuery", "Pretty easy to use but harder to extend"],
  {
    code: synJS`
const chart = new Chart(context, {
    type: "bar",
    data: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [{
            label: "Some Data",
            data: [0,1,2,3,4,5]
        }]
    }
});`,
  }
);

export const HowDoesWebsiteWork = generateMessageSlide("How does your browser load websites?");

export const WebsiteBasics = generateContentSlide("Browser Revisited", [
  "To load a page, your browser will request some HTML from a server",
  "If the HTML tells the browser to load more CSS and JS, the browser loads that",
  "Your browser makes an HTTP GET request for a specific URL",
  "The server sends an HTTP Response with HTML",
  "How does your browser talk to other machines?",
]);

export const DomainNames = generateContentSlide("Domain Names", [
  "Domain names are the part of the URL that identify a service online",
  'ie. "www.wikipedia.org"',
  "You must pay to own a domain name",
  "Controlled by organizations called a domain name registrar",
  "Resolves to an IP address",
]);

export const IPNetworks = generateContentSlide("IP Addresses", [
  "IP addresses correspond (pretty roughly) to a single machine",
  "There are two standards for IP addresses: IPv4 and IPv6",
  "Generally look something like a collection of 4 numbers 0-255 for IPv4",
  "Most IP addresses could correspond to a machine on the internet (public IP)",
  'Some IPs correspond to "private networks"',
  "These private IPs get reused all over the place (in private networks)",
  "Your computer probably has a private IP address and your whole household may share a public IP",
  "You need a public IP to host a web site",
]);

export const Ports = generateContentSlide("Ports", [
  'A single machine can host multiple "servers" at the same time',
  "Each server gets tied to a numerical port",
  {
    text: "For instance, you might have...",
    children: [
      "a web server running on port 80",
      "a game server running on port 2000",
      "an SSH server running on port 22",
    ],
  },
  "... all running on the same machine",
  "Domain name + port usually identifies a service on a single machine on a network",
]);

export const FirewallsNoReally = generateContentSlide("Firewalls", [
  "Firewalls usually check requests and either pass, reject, or drop them",
  "Usually look at source IP and port number",
  'A way to say "people on the internet can access this web server"',
  '..."but people need to be on the network to try to log in with SSH"',
  '..."and these specific people can\'t come in at all"',
  '..."and these unused ports should not be used"',
  "Comes from construction terminology",
  "Need firewall rules to allow incoming connections",
]);

export const RecapNecessities = generateContentSlide(
  "Requirements for Self-Hosting",
  [
    "A domain name",
    "A public IP address (ideally that does not change)",
    "A DNS record pointing the name to the IP",
    "Some way to associate your public IP with your machine",
    "Firewall rules that allow traffic in",
  ],
  { useOrderedLists: true }
);

export const HostingIsHard = generateContentSlide("Self-Hosting is Still Hard", [
  "Need an uninterrupted power supply",
  "Need a good / stable internet connection",
  'Need to run "real" server software',
  "Potentially need a powerful machine",
  "You're opening up your machine to attacks",
]);

export const BetterWay = generateMessageSlide("Is there a better way?!");

export const HostingProviders = generateContentSlide("Hosting Providers", [
  "Many companies and services specialize in hosting web content",
  "They cover the networking, hardware, security, etc for a fee",
  "Often also handle domain names for you",
  "May actually be cheaper than doing it yourself",
]);

export const WhoHosts = generateContentSlide("So who will host me?", [
  "Tons of people!",
  "AWS (Amazon)",
  "GitHub (Microsoft)",
  "Netlify",
  "Firebase (Google)",
  "GoDaddy",
]);

export const references: Reference[] = [
  {
    label: "JQuery Documentation",
    url: "https://learn.jquery.com/about-jquery/how-jquery-works/",
    note: "You can read this if you're interested but don't try to learn it all unless you really want to",
  },
  {
    label: "ChartJS Documentation",
    url: "https://www.chartjs.org/docs/latest/getting-started/",
    note: "Also don't try to memorize this",
  },
  {
    label: "Self-Hosting from the Ground Up",
    url: "https://fuzzytek.ml/tutorials/selfhostingguide/",
    note: "Probably not worth jumping through all these hoops for a web site. But interesting and informative if you're curious",
  },
];
