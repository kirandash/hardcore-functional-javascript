// Composition

const compose = (f, g) => x => f(g(x));

const toUpper = str => str.toUpperCase();

const exclaim = str => str + "!";

const first = xs => xs[0];

// Orders fn from right to left
const shout = compose(exclaim, toUpper)

const shoutFirstLetter = compose(first, compose(exclaim, toUpper))

console.log("Shout", shout("tears"))

console.log("Shout first letter", shoutFirstLetter("tears"))
