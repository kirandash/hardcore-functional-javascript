// Setup
//==============
const R = require("ramda");
const QUnit = require("qunit")
const _ = R;
const split = _.curry((delimiter, string) => string.split(delimiter))


// Exercise 1
//==============

// const words = function(str) {
//   return split(' ', str);
// }
const words = split(' '); // curried fn to get all words

const result1 = words("Jingle bells Batman smells");

console.log("Exercise 1: Get all words", result1);

QUnit.test("Ex1: split", assert => {
  assert.deepEqual(words("Jingle bells Batman smells"), ['Jingles', 'bells', 'Batman', 'smells'])
})


// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

// const sentences = xs => _.map(words, xs);

const sentences = _.map(words); // map is a curried fn. Map words function to array items

const result1a = sentences(["Jingle bells Batman smells", "Robin laid an egg"]);

console.log("Exercise 1a: Map words", result1a);

QUnit.test("Ex1a: map/split", assert => {
  assert.deepEqual(sentences(["Jingle bells Batman smells", "Robin laid an egg"]), [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']]);
})


// Exercise 2
//==============
// const filterQs = function(xs) {
//   return _.filter(function(x){ return _.test(/q/ig, x);  }, xs);
// }

const filterQs = _.filter(_.test(/q/ig));

const result2 = filterQs(['quick', 'camels', 'quarry', 'over', 'quails', 'testql']);

console.log("Exercise 2: Filter words containing q", result2);

QUnit.test("Ex2: filter", assert => {
  assert.deepEqual(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), ['quick', 'quarry', 'quails']);
})


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x,y) => x >= y ? x : y // <- leave be

// TODO: rewrite max in its "simplest" form
// const max = function(xs) {
//   return _.reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, 0, xs);
// }

const max = _.reduce(_keepHighest, 0);

const result3 = max([323,523,554,123,5234]);

console.log("Exercise 3: Get max number from array", result3);

QUnit.test("Ex3: max", assert => {
  assert.equal(max([323,523,554,123,5234]), 5234);
})


// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

// const slice = undefined

const slice = _.curry((start, end, xs) => xs.slice(start, end))

const resultB1 = slice(1)(3)(['a', 'b', 'c']);

console.log("Bonus 1: Curried Slice", resultB1)

QUnit.test("Bonus 1", assert => {
  assert.deepEqual(slice(1)(3)(['a', 'b', 'c']), ['b', 'c']);
})

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried

// const take = undefined

const take = slice(0); // slice starting from 0

QUnit.test("Bonus 2", assert => {
  assert.deepEqual(take(2)(['a', 'b', 'c']), ['a', 'b']);
})
