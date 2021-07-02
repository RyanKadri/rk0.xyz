const babel = require("@babel/core");
const fs = require("fs");
const plugin = require("./plugin");

const inputCode = fs.readFileSync("./example.js", { encoding: "utf-8" });

const { code } = babel.transform(inputCode, { plugins: [plugin] })
console.log(code);