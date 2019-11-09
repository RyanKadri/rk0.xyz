const fs = require("fs");
console.log(`${__dirname}/test.txt`);
fs.readFile(`${__dirname}/test.txt`, "utf-8", (err, data) => {
    console.log(data)
});

fs.writeFile(`${__dirname}/myFile.txt`, "I want to write a file!", (err, res) => {
    console.log("File writing complete")
})