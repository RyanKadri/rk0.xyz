const express = require("express");
const myFunctions = require("./server-helpers")

const app = express();

let name = "Ryan";
app.route("/test")
    .get(function(req, resp) {
        resp.header({ "Access-Control-Allow-Origin": "*" })
        resp.send(JSON.stringify({ name: name }));
    })
    .post((req, resp) => {
        name = req.query.name;
        resp.send("Success")
    })
    .delete((req, resp) => {
        name = "unknown";
        resp.send("Success")
    });

app.listen(8080, () => {
    console.log("Connected")
})