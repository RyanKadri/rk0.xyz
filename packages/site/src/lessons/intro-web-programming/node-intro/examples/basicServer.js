const express = require("express");
const fs = require("fs");

const app = express();
let name = "";

app.route("/hello")
    .get((req, resp) => {
        resp.send(`Hi ${name}`)
    })
    .post((req, resp) => {
        name = req.query.name;
        resp.send("Ooo. A post request")
    });

app.use(express.static(__dirname));

app.listen(8080, () => {
    console.log(`Server started`)
})