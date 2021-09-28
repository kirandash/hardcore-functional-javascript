/**
 * Currying Examples
 */

// Curry fn
const {curry} = require("ramda");
// const curry = f => x => y => f(x, y)

// Modulo fn with curry
const modulo = curry((x , y) => y % x);

// isOdd fn with curried modulo
const isOdd = modulo(2) // saves x as 2 and  waits for y

// filter fn with curry to run a fn on each item of an array - args: f: fn and xs: arrays of x
const filter = curry((f, xs) => xs.filter(f))

// Get all odds fn with curried filter
getAllOdds = filter(isOdd) // sasves isOdd and waits for xs which is an array

const result = getAllOdds([1, 2, 3, 4, 5]);

console.log("All odd numbers", result);
