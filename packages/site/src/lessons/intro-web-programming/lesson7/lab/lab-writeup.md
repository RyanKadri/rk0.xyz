# Lab 6: Something Old, Something New

<article>

## Overview

For this lab, you will be learning about a few features of CSS that we never got a chance to work
on in class. Once you are done with that, you will get a chance to practice more on-page JavaScript
in the form of a simple To Do List application.

</article>

<article>

## Part One - CSS Pseudo Classes

In HTML, classes are either meant to express an element's purpose on the page or to express a specific
characteristic about the element. An element can have multiple classes separated by spaces. Therefore,
`<div class="comment unread">` may indicate that the div element is meant to be a "comment" in the
application and also that the comment is unread. If used that HTML, you would be able to 
use CSS to apply specific styles to all "comments" in your application and then make unread comments
look a little different to give your users a visual cue that they are special.

CSS also has a number of "pseudo classes" that you don't need to add in your HTML but that you can still
target. We have already used pseudo-classes when we targeted things like `:last-child` in selectors.

CSS also has the following pseudo classes (among others):

- `:hover`: The element is currently being hovered
- `:active`: The element is being interacted with (like a button currenly being pressed).
- `:focus`: Think of this being activated when an input contains the user's cursor. 
- `:disabled/:enabled`: The button / input / control is enabled or disabled
- `:visited`: A link may have this pseudo class if it has been visited
- `:focus-within`: A component contains an input that currently has the user's focus (often the cursor)
- `:checked`: A checkbox has this pseudo class if it is checked
- `:not()`: A function-like selector that can be applied in combination with other CSS selector elements
to negate them
  - For example, p:not(:first-child) targets all paragraphs other than the first.

You can use these pseudo classes anywhere in a selector just like you could use a normal class.
Therefore, `div :hover :disabled` would target a disabled control that is inside a hovered element that
is inside a div.

Please create the following with only HTML and CSS. You can put these all on one page when you submit
this lab.

1. A checkbox that, when checked, turns the background color of a nearby div from green to red
    - Give the div a black border so it is easier to see 
1. A text `<input>` that has red text while a user is typing but turns back to black otherwise
1. A button that, while it is being clicked, changes its text to stay "Stop that!"
1. A link that grows to twice the original size when hovered
1. Given the following HTML: 
```
    <div class="user-form">
        <label>
            Name:
            <input type="text" placeholder="Type here...">
        </label>
        <strong>
            Hey you! You should enter your name. You can do it in that form up above!
        </strong>
    </div>
```
please make the "Hey you!" text show up whenever the user is not typing in the textbox.

</article>

<article>

## Part 2: Animations - Transitions

CSS allows you animate changes between CSS properties. You can do that with the `transition` property.
The syntax looks like `transition: margin-left 4s ease-in, height 1s linear`. That property instructs
the browser to look for changes in `margin-left` and `height`, and when they change, gradually transition
from the original value to the next value. The `margin-left` has 4 seconds to make that transition and
the `height` has 1 second. The `ease-in` and `linear` refer to how gradually the changes start and end.
You can read this article for more specifics about exactly how transitions work: 
https://developer.mozilla.org/en-US/docs/Web/CSS/transition

These transitions occur whether styles are changed via CSS and JavaScript. They combine nicely with
some of the pseudo classes above. Please create the following effects with CSS transitions and 
pseudo-classes:
- A 64x64 square that starts as green and transitions to red as you hover over it.
- A 64x64 square that follows your mouse across the screen as long as you hover over it.
- A button that, as long as you hold it down, causes a red square to grow to twice its original size,
then rotate 360 degrees, and then gradually change color to green.

Changing styles with JavaScript allows you to accomplish some pretty interesting effects in a more
flexible way than CSS pseudo classes. Please use JavaScript to make:
- A textbox that, when you type in a CSS color, causes a square to transition to that color

</article>

<article>

## Part 3 - To-Do List

And now for something completely different! In order to get some more practice with in-page JavaScript,
please write a simple To-Do list page. A user visiting the page should be able to add list items by
typing into a textbox and clicking a submit button. Once they have typed something in and clicked the
button, the text they entered should show up at the top of their to-do list. Once there, they should
have a button that they can click to mark the item as done. Marking an item as done should remove it
from the list.

</article>

<article>

## Submitting

To submit this lab, please create a single zip file and upload it to Canvas under the appropriate assignment.
The zip file should contain two folders. The first folder should contain at least one HTML file with all of the
demonstrations requested in parts one and two. Any/all linked CSS and JavaScript should also be included.
Demonstrations should be labeled in the page so it is clear which elements on the page correspond to which
demonstration. Please also use CSS Comments to indicate which blocks of CSS are used to accomplish 
which requested demonstration. 

The second folder in your zip file should contain the HTML page and linked CSS/Javascript for your To-Do 
list application.

</article>
<article>

## Grading

I am not too picky about the appearance of the page(s) that contain your Part 1 and 2 answers.
The main thing I am looking for in Parts 1 and 2 is that the CSS animations and pseudo-class effects
work as described. 

In part 3, I am also not super concerned with the art/design of the application. I am mainly checking that:
- The user can add to-do items to their list
- If the user does not type anything but tries to add a list item, nothing happens
- If the user clicks the button to remove an item from the list, the item should be removed from the
position they selected and all the other items should remain in their previous ordering
</article>
