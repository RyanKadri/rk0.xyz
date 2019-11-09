const fs = require("fs");
fs.readFile(__dirname + "/asdkasdkjn", "utf-8", (err, data) => {
    if(err) {
        console.log("There was an error: " + err.message)
    } else {
        console.log(data)
    }
});