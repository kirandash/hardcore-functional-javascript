const R = require("ramda");

// Dot chaining
const  doStuff = str => 
    str
    .toLowerCase()
    .split(" ")
    .map(c => c.trim())
    .reverse()
    .filter(x => x.length > 3)
    .join("");

console.log("Dot chaining", doStuff("Hello I am a great guy!"));

// Equivalent fn with compose
const  doStuff2 = R.compose(
    R.join(""),
    R.filter(x => x.length > 3),
    R.reverse,
    R.map(R.trim),
    R.split(" "),
    R.toLower
);

console.log("Dot chaining with compose", doStuff2("Hello I am a great guy!"));