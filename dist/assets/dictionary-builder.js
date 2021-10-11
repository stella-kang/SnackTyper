const fs = require("fs");
const text = fs.readFileSync("./dictionary.txt").toString();
const dictionaryArray = text.split("\n");
fs.writeFileSync("dictionary.js", JSON.stringify(dictionaryArray, null, 1));
