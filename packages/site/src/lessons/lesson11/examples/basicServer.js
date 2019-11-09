const express = require("express");
const fs = require("fs");
const myHelpers = require("./server-helpers");

const app = express();
app.route("/hello")
    .get((req, resp) => {
        resp.send(myHelpers.greeting)
    })
    .post((req, resp) => {
        resp.send("Ooo. A post request")
    })
app.listen(8080, () => {
    console.log(`Server started`)
})