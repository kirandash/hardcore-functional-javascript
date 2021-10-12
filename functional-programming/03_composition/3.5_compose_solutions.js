// Setup
//==============
const _ = R;
const {formatMoney} = accounting;

// Example Data
const CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

// const isLastInStock = cars => {
//   var reversed_cars = _.last(cars)
//   return _.prop('in_stock', reversed_cars)
// }

// _.prop('in_stock', reversed_cars) . ==> reversed_cars.in_stock ===> reversed_cars["in_stock"]
const isLastInStock = _.compose(_.prop("in_stock"), _.last)

console.log("Ex1: isLastInStock", isLastInStock(CARS))

QUnit.test("Ex1: isLastInStock", assert => {
  assert.deepEqual(isLastInStock(CARS), false);
})

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

// const nameOfFirstCar = undefined

const nameOfFirstCar = _.compose(_.prop("name"), _.head);

console.log("Ex2: nameOfFirstCar", nameOfFirstCar(CARS))

QUnit.test("Ex2: nameOfFirstCar", assert => {
  assert.equal(nameOfFirstCar(CARS), "Ferrari FF");
})

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- leave be

// const averageDollarValue_ = function(cars) {
//   const dollar_values = _.map(_.prop('dollar_value'), cars);
//   return _average(dollar_values);
// };

// var averageDollarValue = function(cars) {
//   var dollar_values = _.map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };

const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

console.log("Ex3: averageDollarValue", averageDollarValue(CARS))

QUnit.test("Ex3: averageDollarValue", assert => {
  assert.equal(averageDollarValue(CARS), 790700);
})


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

// const sanitizeNames = undefined

// solution - 1
const sanitizeNames = _.compose(_.map(_.toLower), _.map(_underscore), _.map(_.prop("name")))

// solution - 2 : compose(map(f), map(g)) == map(compose(f, g))
const sanitizeNames2 = _.map(_.compose(_.toLower, _underscore, _.prop("name")))

console.log("Ex4: sanitizeNames", sanitizeNames(CARS))

console.log("Ex4: sanitizeNames refactored", sanitizeNames2(CARS))

QUnit.test("Ex4: sanitizeNames", assert => {
  assert.deepEqual(sanitizeNames(CARS), ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);
})

// Bonus 1:
// ============
// Refactor availablePrices with compose.

// const availablePrices = function(cars) {
//   const available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(x => formatMoney(x.dollar_value)).join(', ');
// }

const formatDollarValue = _.compose(formatMoney, _.prop("dollar_value"))

// solution 1
const availablePrices = _.compose(_.join(', '), _.map(x => formatMoney(x.dollar_value)), _.filter(_.prop('in_stock')));

// solution 2
const availablePrices2 = _.compose(_.join(', '), _.map(formatDollarValue), _.filter(_.prop('in_stock')));

// solution 3
const availablePricesArray = _.compose(_.map(formatDollarValue), _.filter(_.prop('in_stock')));

const availablePrices3 = _.compose(_.join(', '), availablePricesArray)

console.log("Bonus 1: availablePrices", availablePrices(CARS))

console.log("Bonus 1: availablePrices solution 2", availablePrices2(CARS))

console.log("Bonus 1: availablePrices solution 3", availablePrices3(CARS))

QUnit.test("Bonus 1: availablePrices", assert => {
  assert.deepEqual(availablePrices(CARS), '$700,000.00, $1,850,000.00');
})

// Bonus 2:
// ============
// Refactor to pointfree.

// const fastestCar = function(cars) {
//   const sorted = _.sortBy(car => car.horsepower, cars);
//   const fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// }

// solution 1
const fastestCar = _.compose(_.flip(_.concat)(' is the fastest'), _.prop("name"), _.last, _.sortBy(_.prop("horsepower")));

// solution 2
const append = _.flip(_.concat)

const fastestCar = _.compose(append(' is the fastest'), _.prop("name"), _.last, _.sortBy(_.prop("horsepower")));

console.log("Bonus 2: fastestCar", fastestCar(CARS))

console.log("Bonus 2: fastestCar solution 2", fastestCar(CARS))

QUnit.test("Bonus 2: fastestCar", assert => {
  assert.equal(fastestCar(CARS), 'Aston Martin One-77 is the fastest');
})
