## Notes

Server Review:

What is HTTP?
Request-Response Diagram
Super Basic REST
    Treat data as resources with URLs
    Friendly URLs
    Use right methods
    Self-descriptive (no GET /movie-data.json unless it's a file)
Weird REST alternatives
    Use POSTs for everything /create-movie /read-movie, etc
    Use one URL /action and pass data in body. In headers?
    Track Users by IP address and track where they are on the page
Why not?
    Dev Tools make less sense
    Logging is harder
    Harder to scan actions 
    Everyone needs to learn a new system
    Non Standard
    Harder to cache

Hosting
    Who will run your Code?
    Who configures the server?
    Is it safe?
    History
        PHP Hosting / CPanel -- Physical Servers
        VMs / VPS services
        Docker
        Serverless Computing
    What can you do? 
        Memory? FS?
    How do you have to rewrite code?

Misc Programming Topics
    Objects as Dictionaries
        Object.values / keys
    Try / catch
    Classes
    Arrow functions
    Spread / Rest
    Array methods

    Including HTML (via templating, etc)
    Preprocessors
        Minify / Dead Code Elimination / Bundling / Transpilation
        
React / Data Binding / Components - Do we want to talk about?
