## Most Important HTML Tags

* div
* h1-6
* p
* span
* a
* img
* table
* style

## Most Import CSS Selectors

* "a b" 
    * Any element with a tagname of "b" that is a child of an element with a tagname of "a"

* ".something"
    * An element with an attribute named "class" that has a value of "something"
    * (eg. `<div class="something">...</div>`)

* "#thing"
    * An element with an attribute named "id" that has a value of "thing"
    * (eg. `<span id="thing">...</span>`)

* "a b.special c.thingy#whatever"
    * An element with a tag "c", a class of "thingy" and an id of "whatever"
        * That is a child of an element with tag "b" and class "special"
            * That is in turn a child of an element with tag "a"
    * (eg) 

    const myHTML = synHTML`
        <a>
            <b class="special">
                <c class="thingy" id="whatever">
                    I am the chosen one
                </c>
                <d>I am not :(</d>
            </b>
        </a>
    `