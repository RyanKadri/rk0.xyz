const express = require("express");
const app = express();
const fs = require("fs");

const database = {
    data: {
        "123": {
            name: "Ryan",
            age: 27
        },
        "456": {
            name: "Alice",
            age: 12
        }
    },
    lookup(userId) {
        return this.data[userId];
    }
}

app.route("/user/:userId")
    .get((req, resp) => {
        const userData = database.lookup(req.params.userId);
        resp.send(userData);
    })

app.route("*")
    .get((req, resp) => {
        fs.readFile(`./index-api.html`, "utf-8", (err, data) => {
            resp.header("Content-Type", "text/html")
            resp.send(data);
        })
    });

app.listen(8080, () => {
    console.log("API Server Started");
})