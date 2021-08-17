import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateCodeSlide, generateContentSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML, synJS } from "../../../../common/highlighting";

export const TitleSlide = generateTitleSlide("Using JavaScript Libraries", "Ryan Kadri");

export const WhatIsLibrary = generateContentSlide("What is a Library?", [
    "Pre-written generic code that helps you solve problems",
    "Some small group writes a library and ideally many people / projects use it",
    "Libraries can be domain specific (math, graphics, sound, etc)",
    "Can also help with general programming tasks (working with strings, arrays, etc)",
    "Can also solve really specific problems (read data out of a QR code)",
    "More like pre-built Lego structures",
    "Contains functions, constants, etc"
]);

export const HowToUse = generateCodeSlide("How to use libraries", [
    "In your HTML, CSS can go directly into a <style> tag",
    "CSS can also be in an external file with a <link>",
    "To use a CSS framework, just link the file with a <link> tag",
    "The easiest way to use a JS library is just linking with a <script> tag",
    <>You may see some examples online with <code>import</code> but you need some special tools for those</>
], { 
        code: 
synHTML`
<body>
    ...
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>`
});

export const HowWriteLibrary = generateMessageSlide("How would you write a library?");

export const BrainstormingLibraries = generateContentSlide('Brainstorming', [
    "Maybe create a bunch of global functions and constants?",
    "Maybe create a single object with a bunch of methods?",
    "Is it possible to add methods to built-in objects?",
    "Need to think about perspective of both the library writer and user"
]);

export const ThinkingGlobals = generateContentSlide("Thinking about globals", [
    "Global variables are not always nice",
    "They can be overridden, written, and read by anyone",
    "Global names must be unique",
    "Picking names is hard / important"
]);

export const BunchOfFunctions = generateContentSlide("A bunch of functions", [
    { text: "Pros", children: [
        "User does not need to always prefix operations with your library name",
        "Easier to write the library"
    ]},
    { text: "Cons", children: [
        "Unclear (to user) where the functions are coming from",
        "Functions and constants can override your variables (or other libraries)"
    ]}
]);

export const OneObject = generateContentSlide("One Object", [
    "Declare all methods and constants as properties of a global library object",
    { text: "Pros", children: [
        'Less chance of problems with unique naming',
        "The user knows when the library is being used",
        "The developer tools make it easier to see what functions / constants are included"
    ]},
    { text: "Cons", children: [
        "The user needs to type more",
        "Needs to load the whole library at once"
    ]}
]);

export const ModifyingBuiltIns = generateCodeSlide("Modifying Built-In Objects", [
    "JavaScript lets you modify built-in objects and data types",
    "Can add new array or string methods for instance",
    "Originally this was possible / somewhat common",
    "Became less popular. Hurts standards adoption"
], {
        code: synJS`
"abc".reverse() // Throws error
String.prototype.reverse = function() { 
    return this.split("").reverse().join("")
}
"abc".reverse() // "cba"`
});

export const JQuery = generateCodeSlide("JQuery", [
    "One of the most common / famous old libraries",
    "Simplifies common DOM operations",
    "Supports very old browsers",
    "Popularized using CSS Selectors in JavaScript",
    "Helped browsers unify on standards",
], {
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
    )`
});

export const MoProblems = generateContentSlide("Mo $ mo problems", [
    "Because JQuery was so popular, examples with it are everywhere",
    "A lot of people learned JS through the lens of JQuery",
    "StackOverflow often ends up assuming you're using it",
    'Look for the telltale "$" everywhere',
    "Not a bad library. But maybe not suuuper necessary anymore",
]);

export const ChartJS = generateCodeSlide("Chart.js", [
    "Helps create graphs in the browser",
    "Much narrower goal than JQuery",
    "Pretty easy to use but harder to extend",
], {
        code: 
synJS`
const chart = new Chart(context, {
    type: "bar",
    data: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [{
            label: "Some Data",
            data: [0,1,2,3,4,5]
        }]
    }
});`
});

export const HowDoesWebsiteWork = generateMessageSlide("How does your browser request sites?");

export const WebsiteBasics = generateContentSlide("Browser Revisited", [
    "To load a page, your browser will request some HTML from a server",
    "If the HTML tells the browser to load more CSS and JS, the browser loads that",
    "Your browser makes an HTTP GET request for a specific URL",
    "The server sends an HTTP response with HTML",
    "With the Local Server extension, your computer runs a server on port 5500",
    "Your browser can always talk to servers running on your machine",
    "How does it talk to other machines?"
]);

export const Servers = generateContentSlide("What is a Server?", [
    "The term server often refers to separate concepts of hardware and software",
    'A full-fledged physical machine is a "server"',
    'Your computer can also run multiple "server" programs',
    "To access a website, your browser needs the right hardware and software",
    "URL domain name and port get you there"
]);

export const IPNetworks = generateContentSlide("IP Networks", [
    "IP addresses correspond (pretty roughly) to a single machine",
    "There are two standards for IP addresses: IPv4 and IPv6",
    "Generally look something like a collection of 4 numbers 0-255 for IPv4",
    "Most IP addresses could correspond to a machine on the internet (public IP)",
    'Some IPs correspond to "private networks"',
    "These private IPs get reused all over the place (in private networks)",
    "You probably have a private IP address and your whole household probably shares a public IP",
    "You need a public IP to host a web site"
]);

export const Firewalls = generateMediaSlide(
    <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/B1XqrTgRpfM?start=102" 
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />,
    "Arrow Season 4 Episode 22",
    "Firewalls"
);

export const FirewallsNoReally = generateContentSlide("Firewalls", [
    "Firewalls usually check requests coming in and either pass, reject, or drop them",
    "Usually look at source IP and port number",
    'A way to say "people on the internet can access this web server"',
    '..."but people need to be on the network to try to log in"',
    '..."and these specific people can\'t come in at all"',
    '..."and these unused ports should not be used"',
    "Comes from construction terminology",
    "Need firewall rules to allow incoming connections"
]);

export const RecapNecessities = generateContentSlide("Requirements for Self-Hosting", [
    "A domain name",
    "A public IP address (ideally that does not change)",
    "A DNS record pointing the name to the IP",
    "Some way to associate your public IP with your machine",
    "Firewall rules that allow traffic in"
], { useOrderedLists: true });

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
    "May actually be cheaper than doing it yourself"
])

export const WhoHosts = generateContentSlide("So who will host me?", [
    "Tons of people!",
    "AWS (Amazon)",
    "GitHub (Microsoft)",
    "Netlify",
    "Firebase (Google)",
    "GoDaddy"
]);

export const references: Reference[] = [
    { 
        label: "JQuery Documentation", 
        url: "https://learn.jquery.com/about-jquery/how-jquery-works/", 
        note: "You can read this if you're interested but don't try to learn it all unless you really want to"
    },
    { 
        label: "ChartJS Documentation",
        url: "https://www.chartjs.org/docs/latest/getting-started/",
        note: "Also don't try to memorize this"
    },
    {
        label: "Self-Hosting from the Ground Up",
        url: "https://fuzzytek.ml/tutorials/selfhostingguide/",
        note: "Probably not worth jumping through all these hoops for a web site. But interesting and informative if you're curious"
    }
]