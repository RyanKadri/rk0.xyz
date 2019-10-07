# Lab 5: Asynchronous JavaScript and APIs

<article>

## Overview

In this lab, you will be learning about asynchronous JavaScript and how to call APIs. In the
first section of the lab, you will be directly calling a public API and adding some of the
result data to a web page. In the second section, you will be creating a Tic Tac Toe game
and providing a computer player by calling an API I wrote. Both of these labs should give
you some real-world experience with handling asynchronous JavaScript and calling APIs. 
</article>

<article>

## Part One - The Pokedex

For the first part of the lab, you will be making a page that displays some information based
on a public API. The API you will be using is described here: https://pokeapi.co/. You can
call it to get information about the world of Pokemon. What I would like you to build is
a simple site with an input box that accepts the name of a Pokemon and returns the following
data about the Pokemon:

- Height
- Weight
- Type
- Starting Stats (in a table)
- An image of the pokemon.

After the user searches for their first Pokemon, they should still be able to search for
other pokemon and have their following searches overwrite the data from the original on
the screen. Please use the documentation on the API's site to figure out how to call
it. There is a URL you can use to directly look up information about a pokemon based
on its exact name. You should make sure that searching with different capitalizations
also works for the user of your site. 


</article>

<article>

## Part 2: Tic Tac Toe

For the second part of this lab, you will be creating a Tic Tac Toe game with the help of
an external "AI" API. Please create a web site that allows a user to play Tic Tac Toe.
When they launch the page, they should see a Tic Tac Toe board and a message asking them
to make a move by clicking on a square on the board. When they click on a square, your page 
should fill in the square with a marker showing that they clicked. It should then make an
API call to the Tic Tac Toe AI described below. The API will act as a computer player and will give the browser
the coordinates of the square that the computer player wants to select.

After each move, your code should check if the game has ended (with a win or a tie). If the
game has ended, please display a message congratulating the winner or telling the players
that the game was a tie. Please also check that when a player tries to make a move, they are
only allowed to make a legal move (not on top of a taken square). 

The user should have an option to restart the game at any time by pressing a button and
should always go first.

### Tic Tac Toe API

You can use the Tic Tac Toe AI API by making a call to 
https://api.rk0.xyz/api/games/tic-tac-toe/next-move. You must provide a query parameter along
with the URL that expresses the current state of the game board. To do that, you can
pass an array of arrays. This is easiest to show in an example. If your board looks like
this:

```
x |   | o
x | x | o  
  |   |   
```

and it is the computer (o's) turn, you would call the api as follows:  
`fetch("https://api.rk0.xyz/api/games/tic-tac-toe/next-move?board=[[1,0,2][1,1,2][0,0,0]]")`.

The API will probably respond to tell you the next computer move (o) is { row: 2, column: 2 }.

In the API call, the 1s indicate that player 1 (the human) has selected that space.
The 2s indicate that the computer has selected the space. If you take the 
three inner arrays in the call and stick them on top of each other, you get:

```
[1,0,2],
[1,1,2],
[0,0,0]
```

If the ones were X's and the twos were O's, the array of arrays would match up perfectly
with the board state. Therefore, the outer array represents the whole board, the inner
arrays are each rows, and the elements of the arrays are columns within a row.
In your code, you should keep track of the state of the board in an array of arrays.
You might start it as `const board = [[0,0,0],[0,0,0],[0,0,0]]` and then you can change
a stored cell by doing something like `board[row][col] = <new_val>`.

</article>

<article>

## Submitting

To submit this lab, please create a single zip file and upload it to Canvas under the appropriate assignment.
The zip file should contain two sub folders, one for part one and one for part two. Each folder
should contain your HTML file and all files referenced within.

</article>
<article>

## Grading

I am not too picky about the appearance of these two sites. I am more concerned that they
meet all of the requirements listed above and behave properly.

The main things I am looking for in this lab are:
- In Part One:
    - Do you fetch and display all of the appropriate data from the Pokemon API
    - Does the user have the option to 
    - Is the site friendly (can the user enter different capitalizations of a pokemon name)?
    Can they enter spaces before and after the name?
- In Part Two:
     - Does the Tic Tac Toe game flow like a normal game of Tic Tac Toe?
     - Do you detect the right win and loss conditions?
     - Do you stop the player from making illegal moves?
     - Do you provide messages to the user informing them that they have won, lost, or tied?

</article>

## Extra Credit Opportunity (25 Points)

You can get up to 25 points of extra credit if you create an option to play the game with
another human player. The player should be able to select something on the UI at the
beginning of the game to decide whether they want to play against a computer or a person.

In two-player mode, there should also be a message telling the players whose turn it is.

## Hints

- For both parts of this lab, you should be using the `fetch` API. Here are some
instructions on how to use it: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
It gets a bit complicated / outside of what we've learned but the simple example at the top
of the page mostly covers what we need.
- For part two, you may want to keep track of the position of the Xs and Os on the board
in a single variable and then worry about making the grid on the page line up with what's
in your variable. To store the grid data, maybe you could use arrays in arrays (which you
could access with coordinates like `const board = [[0,0,0], [0,0,0], [0,0,0]]; board[0][1]`). 
Make sure not to get your rows and columns flipped around though!
- `display: grid` is your friend here for displaying the Tic Tac Toe board. Remember how that
works? If not, here's a quick article: https://learncssgrid.com/