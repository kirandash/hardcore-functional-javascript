const QUnit = require("qunit")

const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  toString: () => `Box(${x})`
})

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces




// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat_ = str =>
  parseFloat(str.replace(/\$/, ''))

const moneyToFloat = str =>
  Box(str)
    .map(str => str.replace(/\$/, ''))
    .fold(str => parseFloat(str))

console.log("Ex1: moneyToFloat", String(moneyToFloat('$5.00')))

QUnit.test("Ex1: moneyToFloat", assert => {
  assert.equal(String(moneyToFloat('$5.00')), 5)
})





// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat_ = str => {
  const float = parseFloat(str.replace(/\%/, ''))
  return float * 0.0100
}

const percentToFloat = str => 
  Box(str)
    .map(str => str.replace(/\%/, ''))
    .fold(float => float * 0.0100)

console.log("Ex2: percentToFloat", String(percentToFloat('20%')))

QUnit.test("Ex2: percentToFloat", assert => {
  assert.equal(String(percentToFloat('20%')), 0.2)
})





// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
  const cents = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cents - (cents * savings)
}

// For these types of problems with multiple variables we will end up with Box nesting.
// To simplify this we need a flat box architecture which is solved by Monads
const applyDiscount = (price, discount) => 
  Box(price)
    .map(price => moneyToFloat(price))
    .fold(cents => 
      Box(discount)
        .map(discount => percentToFloat(discount))
        .fold(savings => cents - (cents * savings))
    )

// Alternate - refactor with few lines
const applyDiscountR = (price, discount) => 
  Box(moneyToFloat(price))
    .fold(cents => 
      Box(percentToFloat(discount))
        .fold(savings => cents - (cents * savings))
    )

console.log("Ex3: Apply discount", String(applyDiscount('$5.00', '20%')))

console.log("Ex3: Apply discount refactored", String(applyDiscountR('$5.00', '20%')))

QUnit.test("Ex3: Apply discount", assert => {
  assert.equal(String(applyDiscount('$5.00', '20%')), 4)
})