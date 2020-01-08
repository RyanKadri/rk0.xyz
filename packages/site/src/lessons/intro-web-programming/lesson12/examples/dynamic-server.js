const express = require("express");
const app = express();
const fs = require("fs");

app.route("*.template")
    .get((req, resp) => {
        fs.readFile("." + req.path, "utf-8", (err, data) => {
            resp.header("Content-Type", "text/html"),
            resp.send(data.replace("##name##", req.query.name))
        })
    })

app.route("*")
    .get((req, resp) => {
        fs.readFile(`.${req.path}`, "utf-8", (err, data) => {
            resp.header("Content-Type", "text/html")
            resp.send(data);
        })
    });

app.listen(8080, () => {
    console.log("Dynamic Server Started");
})