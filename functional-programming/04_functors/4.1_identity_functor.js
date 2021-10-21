// Box - Identity functor
// Can use class or in our case we will use factory function
const Box = x =>  ({
  map: f => Box(f(x)), // run the function on the value and store it back in box (accumulating current state)
  fold: f => f(x), // run the function on the value and return it instead of keeping in box
  toString: `Box(${x})` // convert current value to string to log
});

const nextCharFromNumberString_ = str => {
  const trimmed = str.trim()
  const number = parseInt(trimmed)
  const nextNumber = new Number(number + 1)
  return String.fromCharCode(nextNumber)
}

// Make the above function chainable with help of functor
const nextCharFromNumberString = str => 
  Box(str) // Box functor calls the functions, we only map here
  .map(x => x.trim())
  .map(trimmed => parseInt(trimmed, 10))
  .map(number => new Number(number + 1))
  .fold(String.fromCharCode)

const result_ = nextCharFromNumberString_('  64 ')

const result = nextCharFromNumberString('  64 ')

console.log(result_)
console.log(result)