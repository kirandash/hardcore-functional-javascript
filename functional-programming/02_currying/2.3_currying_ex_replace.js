const { curry } = require('ramda');

// replace fn with curry
const replace = curry((regexp, replacement, str) => str.replace(regexp, replacement));

// replace vowels fn with curried replace
const replaceVowels = replace(/[AEIOU]/ig, '!'); // saves first two arguments in fn and waits for third arg str

const result = replaceVowels("Hey I have words!");

console.log(result);
