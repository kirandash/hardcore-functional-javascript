// Curry and Compose
const { curry, compose } = require("ramda");

const toUpper = str => str.toUpperCase();

// curry - concat fn - to concat y(input) to x(data)
const concat = curry((y, x) => x + y)

const first = xs => xs[0];

const loudFirst = compose(toUpper, first);

const shout = compose(concat("!"), loudFirst);

console.log(shout("tears"));
