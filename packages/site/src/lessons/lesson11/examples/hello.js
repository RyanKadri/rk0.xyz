const express = require("express");
const myFunctions = require("./server-helpers")
const parser = require("body-parser")

const app = express();
app.use(parser.text())

let name = "Ryan";
app.route("/test")
    .get(function(req, resp) {
        resp.header({ "Access-Control-Allow-Origin": "*" })
        resp.send(name);
    })
    .post((req, resp) => {
        name = req.query.name;
        resp.send(req.body)
    })
    .delete((req, resp) => {
        name = "unknown";
        resp.send("Success")
    });

app.listen(8080, () => {
    console.log("Connected")
})