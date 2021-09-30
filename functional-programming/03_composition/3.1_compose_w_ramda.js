// Composition with ramda
const { compose } = require("ramda")

// const compose = (f, g) => x => f(g(x));

const toUpper = str => str.toUpperCase();

const exclaim = str => str + "!";

const first = xs => xs[0];

// Orders fn from right to left
const shout = compose(exclaim, toUpper)

// const shoutFirstLetter = compose(first, compose(exclaim, toUpper))

const shoutFirstLetter = compose(first, exclaim, toUpper)

const loudFirst = compose(toUpper, first);
const shoutFirstLetterWithExclaim = compose(exclaim, loudFirst)

console.log("Shout", shout("tears"))

console.log("Shout first letter", shoutFirstLetter("tears"))

console.log("Shout first letter with exclaim", shoutFirstLetterWithExclaim("tears"))
