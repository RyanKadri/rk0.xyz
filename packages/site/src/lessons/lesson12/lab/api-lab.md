# Lab 10: REST APIs

<article>

## Overview

In this lab, you will be getting some practice with writing APIs. You will be following loosely along
with a set of design patterns called REST to structure your code. In Part 1, you will be creating a
simple UI and server for a review shop. In Part 2, you will have a chance to finish fleshing out the
API you made for creating "posts" in your final project website. You will also begin connecting that
API to a user interface  

</article>

<article>

## Part 1: A Practice API

In this part of the lab, you will be creating a simple API for a restaurant-review site. Clients should
be able to use your API to look up restaurants and also to leave reviews. To access your APIs, your users
should be able to make the following requests:

/restaurants
- GET - Returns a list of all created restaurants. Requests should return an array of restaurant objects.
    - Example Request: `GET /restaurants`
    - Example Response: 
```
[
    { 
        id: 1,
        name: "Panera Bread",
        averageScore: 3.5,
        reviews: [
            { id: 100, text: "It was good", score: 4 },
            { id: 101, text: "It was meh", score: 3 }
        ]
    },
    { 
        id: 2,
        name: "The Melting Pot",
        averageScore: 5,
        reviews: [
            { id: 102, text: "I love cheese", score: 5 }
        ]
    }
]
```
- POST - "Registers" a new restaurant. When creating a restaurant, a user should provide a name and the server should decide on a unique id
    - Example Request: `POST /restaurants { name: "McDonalds" }`
    - Example Response: `{ id: 3, name: McDonalds }`

/restaurants/123
- DELETE - "Unregisters" the restaurant from the server and deletes all reviews
    - Example Request: `DELETE /restaurants/2`
    - Example Response: `{ id: 2 }`

/restaurants/123/reviews
- GET - Returns a list of all the reviews for restaurant 123. Requests should return an array of review
        objects.
    - Example Request: `GET /restaurants/1/reviews`
    - Example Response: 
    ```[
        { id: 100, text: "It was good", score: 4 },
        { id: 101, text: "It was meh", score: 3 },
    ]```
- POST - Creates a review for restaurant 123
    - Example Request: `POST /restaurants/2/reviews { text: "It was great!", score: 5 }`
    - Example Response: `{ id: 102, text: "It was great!", score: 5 }`

/restaurants/123/reviews/102
- DELETE - Deletes a specific review
    - Example Request: `DELETE /restaurants/123/reviews/102`
    - Example Response: `{ id: 102 }`

</article>

<article>

## Part 2: Final Project - Content Creation API

In the last lab, you created an API that would let you upload an article / blog post / content in markdown
to your server. You then used a library to convert it to HTML and store it in a file. In this portion of
the lab, you will have a chance to extend your API to let users read these dynamic posts that other users
create. 

At this point, you should have an API that accepts a POST request to an "endpoint" called /posts (or 
something similar). A request and response may look like this:

- Example Request `POST /posts "Here is a **fancy** markdown post"`
- Example Response `{ postId: 123, html: "Here is a <strong>fancy</strong> markdown post" }`

As of last lab, unless you felt like getting ambitious, your users would have no API to read these
posts (much less a UI to view them in the browser). The goal for this lab, will be creating a full
UI for creating and deleting forum posts (or whatever dynamic content best fits into your site).

### API Changes

The first thing you will need is an resource to read posts that have been made in previous API calls.
You will, therefore, probably want a GET endpoint that looks something like:

- Example Request: `GET /posts`
- Example Response: `[{ postId: 123, html: "Post 1"}, { postId: 124, html: "<p>Here is a post</p>"}]`

Keep in mind that this resource will need to read a post stored in a file and then write it to the
response. 

You will also need an API to delete a post. It might look something like:

- Example Request: `DELETE /posts/123`
- Example Response: `{ postId: 123 }`

After calling this API, you should delete the file that was storing the referenced post.

### UI Code

In your existing final project site, please create a very simple UI that lets users read, create, and
delete posts. There should be a textbox at the top of the page with an associated submit button. Once
they click the submit button, their browser makes a POST request to create a new post (using the api
you built in the last class). Under the textbox, there should be a list of posts that have been submitted
so far. Along with each post, there should be a delete button to delete that post. Assume for now that
any user is able to delete any post. Obviously, this is not a good assumption but securing
a site and managing users is probably a little outside the scope of this course. I am not too particular
about exactly how this UI looks but the user should be able to create, read, and delete posts that
were written in Markdown.

</article>

<article>

## Submitting

Please submit a single zip file with the code for Part 1. For Part 2, please either send me a link to
the Github repo for your final project or include another folder in the zip file with the code for
your lab. 

</article>
<article>

## Grading

WIP

</article>