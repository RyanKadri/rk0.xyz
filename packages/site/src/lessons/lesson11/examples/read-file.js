const fs = require("fs");

console.log("start");
fs.readFile(`./test.txt`, "utf-8", (_, data) => {
    if(err) {
        console.log("Error")
    } else {
        console.log(data)
    }
});
console.log("end");

fs.writeFile(`./myFile.txt`, "I want to write a file!", (err, res) => {
    console.log("File writing complete")
})