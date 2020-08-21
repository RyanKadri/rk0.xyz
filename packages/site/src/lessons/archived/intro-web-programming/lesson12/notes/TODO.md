Questions
    Clarify Markdown

General Topics
    Types of servers
        Static vs Dynamic Pages
        POST from forms
        SPAs and Ajax
    How does REST help you organize your app?
        Verbs / Routes / Headers / Body
            Headers - Caching, compression, encoding, preferred representations
        Body for main request. Headers for side-channel. Verbs for organization. Code for status
            Verbs / Codes are interesting - Don't cover everything and aren't required
            https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol
        Statelessness
            XKCD
            Where does statefulness show up in the app we last built?
        Application state transitions


    Methods and assumptions of REST
        When can you cache?
        When is it safe to retry a request?

    Layered Architecture
        Proxies / Firewalls / Load Balancers

    Advantages
        Improved performance

    Not everybody does it right.
        Most people do REST-lite
        Nothing is suuuper enforced

    State management?
        Shopping Cart Example
        Not saying that the app is stateless. Only that protocol is

    Object normalization?
        Example of a Todo app

    How do you test REST APIs?
        Postman? Browser? Fetch?

    Authentication / Authorization