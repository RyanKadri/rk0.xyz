const express = require("express");
const parser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(parser.json());

const todoList = [

]

let id = 1;

app.route("/todo")
    .get((req, resp) => {
        resp.send(todoList)
    })
    .post((req, resp) => {
        const newTodo = req.query;
        newTodo.id = id;
        id++;
        todoList.push(newTodo);
        resp.send(newTodo);
    })
    .delete((req, resp) => {
        const itemToDelete = parseInt(req.query.id);
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].id === itemToDelete) {
                todoList.splice(i);
            }
        }
        resp.send({ id: itemToDelete });
    });

app.route("*")
    .get((req, resp) => {
        fs.readFile(`.` + req.path, "utf-8", (err, data) => {
            resp.header("Content-Type", "text/html")
            resp.send(data);
        })
    });

app.listen(8080, () => {
    console.log("Hey. The server started")
})